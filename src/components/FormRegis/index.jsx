// components/FormRegis/index.jsx
import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import './FormRegis.css';

const FormRegis = () => {
    const onFinish = (values) => {
        console.log('Registro exitoso: ', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Error en el registro: ', errorInfo);
    };

    return (
        <Card
            title="Crea una cuenta"
            bordered={false}
            className='responsive-card'
        >
            <Form
                name="register"
                className="register-form"
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
                    <Input placeholder='Usuario' />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[{
                        required: true,
                        type: 'email',
                        message: 'Por favor ingrese un correo válido'
                    }]}
                >
                    <Input placeholder='Correo electrónico' />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{
                        required: true,
                        message: 'Por favor ingrese su contraseña'
                    }]}
                >
                    <Input.Password placeholder='Contraseña'/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="register-form-button">
                        Registrarse
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default FormRegis;
