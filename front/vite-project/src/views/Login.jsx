import { Formik, Form, Field, ErrorMessage } from 'formik';
import medical from "../assets/medical.jpg"
import * as Yup from 'yup';
import axios from 'axios';
import "./Login.css"

function LoginForm() {
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required('Username is required'),
        password: Yup.string()
          .required('Password is required')
      })}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // Verificar si hay errores de validación
        if (!Object.keys(values).every(key => !values[key])) {
          // Realizar la solicitud POST a la API de login utilizando Axios
          axios.post('http://localhost:3005/users/login', values)
            .then(response => {
              if (response.data.login) {
                // Si el login es exitoso, mostrar un alert
                alert('¡Estás dentro de la página!');
                resetForm();
              } else {
                // Si el login falla, mostrar un mensaje de error
                alert('Usuario o contraseña inválidos');
              }
              setSubmitting(false);
            })
            .catch(error => {
              console.error('Error:', error);
              alert('Ocurrió un error al intentar iniciar sesión');
              setSubmitting(false);
            });
        }
      }}
    >
      {({ isSubmitting }) => (
        <div className="gralFormContainer">
          <div className="container">
            <Form className='form'>
              <div className="heading"><img src={medical} alt="" /><span>Wellcome!</span></div>

              <Field className="input" type="text" name="username" id="username" placeholder="Username"/>
              <ErrorMessage name="username" component="p" className='errorMessagePass' />

              <Field className="input" type="password" name="password" id="password" placeholder="Password"/>
              <ErrorMessage name="password" component="p" className='errorMessagePass'/>
              <button className='login-button' type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
              <span className="forgot-password"><a href="#">Forgot Password ?</a></span>
             <div className="register-btn-container">
                <a className='register-button'>New?
                </a>
             </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default LoginForm;
