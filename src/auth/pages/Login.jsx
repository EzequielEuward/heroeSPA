import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../../UI/components/LoginForm';

export const Login = () => {

  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/marvel', {
      replace: true
    });
  };

  return (
    < >

      <div className="container mt-5 d-flex justify-content-center">
        <form className="form-container bg-light p-4 rounded shadow-sm">
          <LoginForm></LoginForm>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary mt-2"
              onClick={onLogout}
            >
              Iniciar sesión</button>

          </div>

        </form>
      </div>

    </>
  )
}

export default Login
