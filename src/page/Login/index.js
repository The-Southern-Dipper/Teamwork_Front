import { Button, Form } from "antd";
import "./index.scss"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegistrationAPI, fetchLogin, sendCaptchaAPI } from "../../store/modules/user";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onFinish1 = async (values) => {
        await dispatch(fetchLogin(values))
        navigate('/')
    }

    const sendCaptcha = () => {
        const value = document.getElementById('email').value
        const data = { email: value }
        sendCaptchaAPI(data).then((res) => {
            if (res.code == 0) {
                alert(res.data)
            } else {
                console.log(res.message)
            }
        }).catch(function (err) {
            console.log(err);
        })
    }

    const onFinish2 = (values) => {
        RegistrationAPI(values).then((res) => {
            if (res.code == 0) {
                navigate('/login')
                alert("注册成功")
            }
            else {
                console.log(res.message)
            }
        })
    }


    const onSignup = () => {
        let lis = document.querySelector('.login');
        lis.classList.add('signup');
    }

    const onSignin = () => {
        let lis = document.querySelector('.login');
        lis.classList.remove('signup')
    }

    return (
        <div className="login">
            <div
                className="login-container"
            >
                <span></span>
                <span></span>
                <span></span>
                <Form
                    id="signinForm"
                    onFinish={onFinish1}
                    autoComplete="off"
                >
                    <h2>Login</h2>
                    <div className="inputBox">
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入账号!',
                                },
                            ]}
                            style={{ width: "100%" }}
                        >
                            <input
                                type="text"
                                placeholder="请输入账号"
                            />
                        </Form.Item>
                    </div>

                    <div className="inputBox">
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码!',
                                },
                            ]}
                            style={{ width: "100%" }}
                        >
                            <input
                                type="password"
                                placeholder="请输入密码"
                            />
                        </Form.Item>
                    </div>

                    <div
                        className="inputBox"
                    >
                        <a href="#">还未拥有账号？
                            <b id="signin" onClick={onSignup}>注册</b>
                        </a>
                    </div>

                    <div
                        className="inputBox"
                    >
                        <Form.Item
                            style={{ width: "100%" }}
                        >
                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                                style={{
                                    background: "#c368c47f",
                                    fontWeight: 500,
                                }}
                                block
                            >
                                登录
                            </Button>
                        </Form.Item>
                    </div>

                </Form>

                <Form
                    id="signupForm"
                    onFinish={onFinish2}
                    autoComplete="off"
                >
                    <h2>Registration</h2>
                    <div className="inputBox">
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '用户名不能为空',
                                },
                            ]}
                            style={{ width: "100%" }}
                        >
                            <input
                                type="text"
                                placeholder="请输入您的用户名"
                            />
                        </Form.Item>
                    </div>

                    <div className="inputBox">
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '密码不能为空',
                                },
                            ]}
                            style={{ width: "100%" }}
                        >
                            <input
                                type="password"
                                placeholder="请输入您的密码"
                            />
                        </Form.Item>
                    </div>

                    <div className="inputBox">
                        <Form.Item
                            name="confirmPassword"
                            rules={[
                                {
                                    required: true,
                                    message: '密码不能为空',
                                },
                            ]}
                            style={{ width: "100%" }}
                        >
                            <input
                                type="password"
                                placeholder="请确认您的密码"
                            />
                        </Form.Item>
                    </div>

                    <div className="inputBox">
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: '邮箱不能为空',
                                },
                            ]}
                            style={{ width: "100%" }}
                        >
                            <input
                                type="text"
                                id="email"
                                placeholder="请输入您的邮箱"
                            />
                        </Form.Item>
                        <button
                            onClick={sendCaptcha}
                            className="captchaButton"
                        >
                            发送验证码
                        </button>
                    </div>

                    <div className="inputBox">
                        <Form.Item
                            name="captcha"
                            rules={[
                                {
                                    required: true,
                                    message: '验证码不能为空',
                                },
                            ]}
                            style={{ width: "100%" }}
                        >
                            <input
                                type="text"
                                placeholder="请输入验证码"
                            />
                        </Form.Item>
                    </div>

                    <div
                        className="inputBox"
                    >
                        <Form.Item
                            style={{ width: "100%" }}
                        >
                            <Button
                                type="primary"
                                htmlType="submit"
                                size="large"
                                style={{
                                    background: "#fff",
                                    color: "#000",
                                    fontWeight: 500,
                                }}
                                block
                            >
                                确认注册
                            </Button>
                        </Form.Item>
                    </div>

                    <div
                        className="inputBox"
                    >
                        <a href="#">已经拥有账号？
                            <b id="signin" onClick={onSignin}>登录</b>
                        </a>

                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Login;