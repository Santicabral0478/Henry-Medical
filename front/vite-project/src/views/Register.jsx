//views/Register.jsx
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'; 
import { Link } from "react-router-dom";
import medical from "../assets/medical.jpg"
import { useNavigate } from 'react-router-dom';
import "./Login.css"

function Register() {
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        birthdate: '',
        nDni: '',
        username: '',
        password: ''
      }}
      validationSchema={Yup.object({
        name: Yup.string()
    .required('Name is required')
    .matches(
        /^[a-zA-Z]+(?: [a-zA-Z]+)+$/,
        'Invalid name'),
        email: Yup.string()
          .email('Invalid email format')
          .required('Email is required'),
        birthdate: Yup.string()
          .matches(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/, 'Invalid date format')
          .required('Birthdate is required'),
        nDni: Yup.string()
          .required('NID is required')
          .matches(/^[0-9]+$/, 'NID must be a number'),
        username: Yup.string()
          .required('Username is required')
          .min(5, 'Username must be at least 5 characters long')
          .matches(/^\S*$/, 'Username cannot contain spaces')
          .matches(/^[a-zA-Z0-9]+$/, 'Username cannot contain special characters'),
        password: Yup.string()
          .required('Password is required')
          .min(8, 'Password must be at least 8 characters long')
          .matches(
            /^(?=.*[A-Z])(?=.*\d)/,
            'Password must contain at least one uppercase letter and one number'
          ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        axios.post('http://localhost:3005/users/register', values) // Enviamos la solicitud POST
          .then(response => {
            console.log('Registro exitoso:', response.data);
            navigate("/");
            setSubmitting(false);
          })
          .catch(error => {
            console.error('Error al registrar usuario:', error);
            alert('Error al registrar usuario');
            setSubmitting(false);
          });
      }}
    >  

        <div className="gralFormContainer">
          <div className="container-reg">
            <Form className='form-reg'>
              <div className="heading"><img src={medical} alt="" /><span>Welcome!</span></div>

              <div className="input-flex">
                <div className="input-container">
                  <span indeic-reg className='indic-input'>Full name</span>
                  <Field className="input" type="text" name="name" id="name" placeholder="Full name"/>
                  <ErrorMessage name="name" component="p" className='errorMessagePass-reg'/>
                </div>

                <div className="input-container">
                  <span indeic-reg className='indic-input'>Your Email</span>
                  <Field className="input" type="email" name="email" id="email" placeholder="Email"/>
                  <ErrorMessage name="email" component="p" className='errorMessagePass-reg'/>
                </div>
              </div>

              <div className="input-flex">
                <div className="input-container">
                  <span indeic-reg className='indic-input'>Birthdate</span>
                  <Field className="input bitthdate-cursor" type="date" name="birthdate" id="birthdate" placeholder="birthdate"/>
                  <ErrorMessage name="birthdate" component="p" className='errorMessagePass-reg' />
                </div>

                <div className="input-container">
                  <span indeic-reg className='indic-input'>NID number</span>
                  <Field className="input" type="text" name="nDni" id="nDni" placeholder="NID number"/>
                  <ErrorMessage name="nDni" component="p" className='errorMessagePass-reg'/>
                </div>
              </div>

              <div className="input-flex">
                <div className="input-container">
                  <span indeic-reg className='indic-input'>Username</span>
                  <Field className="input" type="text" name="username" id="username" placeholder="Username"/>
                  <ErrorMessage name="username" component="p" className='errorMessagePass-reg'/>
                </div>

                <div className="input-container">
                  <span indeic-reg className='indic-input'>Password</span>
                  <Field className="input" type="password" name="password" id="password" placeholder="Password"/>
                  <ErrorMessage name="password" component="p" className='errorMessagePass-reg'/>
                </div>
              </div>

              <button className='register-button' type="submit">
               Register 
              </button>
              <span className="forgot-password"><Link to="/">Have you account?</Link></span>
            </Form>
          </div>
        </div>
   
    </Formik>



  );
}

export default Register;