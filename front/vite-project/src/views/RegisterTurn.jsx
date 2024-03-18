// views/RegisterTurn.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'; 
import { useNavigate, Link } from 'react-router-dom'; // Importa Link de react-router-dom
import medical from "../assets/medical.jpg"
import "./Login.css"

function RegisterTurn() {
  const navigate = useNavigate();
  const userId = useSelector(state => state.user && state.user.user ? state.user.user.id : null);

  const handleSubmit = (values, { setSubmitting }) => {
    const data = { ...values, userId };
    axios.post('http://localhost:3005/turns/schedule', data)
      .then(response => {
        console.log('Turno programado exitosamente:', response.data);
        navigate("/turns");
        setSubmitting(false);
      })
      .catch(error => {
        console.error('Error al programar turno:', error);
        alert('Error al programar turno');
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={{
        date: '',
        time: ''
      }}
      validationSchema={Yup.object({
        date: Yup.string()
          .required('Date is required'),
        time: Yup.string()
          .required('Time is required')
      })}
      onSubmit={handleSubmit}
    >  
      <div className="gralFormContainer">
        <div className="container-reg">
          <Form className='form-reg'>
            <div className="heading"><img src={medical} alt="" /><span>Programar Turno</span></div>

            <div className="input-flex">
              <div className="input-container">
                <span indeic-reg className='indic-input'>Fecha</span>
                <Field className="input" type="date" name="date" id="date" />
                <ErrorMessage name="date" component="p" className='errorMessagePass-reg'/>
              </div>

              <div className="input-container">
                <span indeic-reg className='indic-input'>Hora</span>
                <Field className="input" type="time" name="time" id="time" />
                <ErrorMessage name="time" component="p" className='errorMessagePass-reg'/>
              </div>
            </div>

            <button className='register-button' type="submit">
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
