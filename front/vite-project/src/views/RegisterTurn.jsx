import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'; 
import { useNavigate, Link } from 'react-router-dom'; 
import medical from "../assets/medical.jpg";
import "./Login.css";

function RegisterTurn() {
  const navigate = useNavigate();
  const userId = useSelector(state => state.user && state.user.user ? state.user.user.id : null);
  const isAuthenticated = useSelector(state => !!state.user.user); 
  const [minDate, setMinDate] = useState(new Date());

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/home"); 
    }
    const today = new Date();
    setMinDate(today);
  }, [navigate, isAuthenticated]);

  const handleSubmit = async (values, { setSubmitting }) => {
    const data = { ...values, userId };
    try {
      await axios.post('http://localhost:3005/turns/schedule', data);
      console.log('Turno programado exitosamente');
      navigate("/turns");
    } catch (error) {
      console.error('Error al programar turno:', error);
      alert('Error al programar turno');
    }
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        date: '',
        time: '',
        details: ''
      }}
      validationSchema={Yup.object({
        date: Yup.string()
          .required('La fecha es obligatoria')
          .test('is-valid-date', 'La fecha no puede ser anterior al día actual', value => {
            const selectedDate = new Date(value);
            const currentDate = new Date();
            currentDate.setHours(0, 0, 0, 0); 
            return selectedDate >= currentDate;
          }),
        time: Yup.string()
          .required('La hora es obligatoria')
          .matches(/^(0[7-9]|1[0-6]):[0-5][0-9]$/, 'La hora debe estar entre las 07:00 y las 16:59'),
        details: Yup.string()
          .required('Los detalles son obligatorios')
      })}
      onSubmit={handleSubmit}
    >
      <div className="gralFormContainer">
        <div className="container-reg">
          <Form className='form-reg'>
            <div className="heading"><img src={medical} alt="" /><span>Programar Turno</span></div>

            <div className="input-flex">
              <div className="input-container">
                <span className='indic-input'>Fecha</span>
                <Field className="input" type="date" name="date" id="date" min={minDate.toISOString().split('T')[0]} />
                <ErrorMessage name="date" component="p" className='errorMessagePass-reg'/>
              </div>

              <div className="input-container">
                <span className='indic-input'>Hora</span>
                <Field className="input" type="time" name="time" id="time" min="07:00" max="18:00" />
                <ErrorMessage name="time" component="p" className='errorMessagePass-reg'/> 
              </div>
            </div>

            <div className="input-flex">
              <div className="input-container">
                <span className='indic-input'>Detalles</span>
                <Field className="input" type="text" name="details" id="details" />
                <ErrorMessage name="details" component="p" className='errorMessagePass-reg'/>
              </div>
            </div>

            <button className='register-button' type="submit" disabled={!isAuthenticated}>
              Programar Turno
            </button> 
            <span className="forgot-password"><Link to="/turns">Volver</Link></span>
          </Form>
        </div>
      </div>
    </Formik>
  );
}

export default RegisterTurn;
