import { Form, Input, Button, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './FormLogin.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import authService from '../../services/auth.js'
import { useAuth } from '../../hooks/useAuth.js'

const FormLogin = () => {

    //manejo de estado de autenticacion
    const useAuthData = useAuth();
    console.log(useAuthData);

    const navigate = useNavigate();

    const [loginError, setLoginError] = useState(false);

    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true); //Establece el estado de carga a true al enviar el formulario
        setLoginError(false);
        try{
            const response = await authService.loginF(values.username, values.password);
            if(response && response.data){
                localStorage.setItem('token', response.data.token);
                login(response.data.token);
                console.log(response.data.token);
                navigate('/');
            }else{
                console.log('Error de inicio inesperado');
                setLoginError(true);
            }
        }
        catch(error){
            console.error('Error en el login', error.response ? error.response.data : error.message);
            setLoginError(true);
        }
        finally {
            setLoading(false); //Establece el estado de carga a false despues de recibir la respuesta
        }
    };



    const onFinishFailed = (errorInfo) => {
        console.log('Failed: ', errorInfo);
        setLoginError(true);
    };
    return (
        <>
            <Card
                title="Bienvenido de nuevo!"
                bordered={false}
                className='responsive-card'
            >
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese su usuario'
                        }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder='User' />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese su contraseña'
                        }]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder='Password' />
                    </Form.Item>
                    <Form.Item>
                        {loginError && <p style={{color: 'red' }}>Credenciales incorrectas, intenta de nuevo</p>}
                        <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
                            Iniciar Sesión
                        </Button>
                    </Form.Item>
                    ¿Aún no tienes cuenta? <Link to="/register">Registrate</Link>
                </Form>
            </Card>
        </>
    );
}

export default FormLogin;

/*


const FormLogin = () => {
 

  return (
    <>
      <Card
        title="Bienvenido de nuevo!"
        bordered={false}
        className='responsive-card'
      >
        <Form
          name="username"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          
          
          
          
        </Form>
      </Card>
    </>
  );
}

export default FormLogin;

*/