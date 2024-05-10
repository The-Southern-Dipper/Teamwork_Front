import { Button, Card, Form, Input, Modal, Space } from "antd"
import "./index.scss"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNicknameAPI, changePassword, changeUserInfo, fetchUserInfo } from "../../store/modules/user";
import _changePassword from "../../components/userInfo/_changePassword"
import _changeNickname from "../../components/userInfo/_changeNickname";
import _changeEmail from "../../components/userInfo/_changeEmail"

const User = () => {
    const [form] = Form.useForm();

    const [ischangePwdOpen, setIschangePwdOpen] = useState(false);
    const [ischangeNicknameOpen, setIschangeNicknameOpen] = useState(false)
    const [isChangeEmailOpen, setIsChangeEmailOpen] = useState(false)
    const [nickname, setNickname] = useState(useSelector(state => state.user.userInfo.nickname))
    const [email, setEmail] = useState(useSelector(state => state.user.userInfo.email))

    const closechangePwd = () => {
        setIschangePwdOpen(false);
    };
    const closechangeNickname = () => {
        setIschangeNicknameOpen(false)
    }
    const closeChangeEmail = () => {
        setIsChangeEmailOpen(false)
    }

    return (
        // 修改个人信息卡片
        <div className="userpage">
            <Card
                title="个人中心"
                className="card"
                extra={
                    <Button
                        type="primary"
                        className="button"
                        onClick={() => {
                            setIschangePwdOpen(true);
                        }}
                    >
                        修改密码
                    </Button>
                }
            >
                <Form
                    form={form}
                >
                    <Form.Item
                        name="nickname"
                    >
                        <Space.Compact
                            style={{
                                width: '100%',
                            }}
                        >
                            <Input
                                defaultValue={nickname}
                                size="large"
                                disabled
                            />
                            <Button
                                type="primary"
                                size="large"
                                style={{ lineHeight: 0 }}
                                onClick={() => { setIschangeNicknameOpen(true) }}
                            >修改</Button>
                        </Space.Compact>
                    </Form.Item>
                    <Form.Item
                        name="nickname"
                    >
                        <Space.Compact
                            style={{
                                width: '100%',
                            }}
                        >
                            <Input
                                defaultValue={email}
                                size="large"
                                disabled
                            />
                            <Button
                                type="primary"
                                size="large"
                                style={{ lineHeight: 0 }}
                                onClick={() => { setIsChangeEmailOpen(true) }}
                            >修改</Button>
                        </Space.Compact>
                    </Form.Item>
                </Form>
            </Card>

            <_changePassword
                open={ischangePwdOpen}
                close={closechangePwd}
            ></_changePassword>

            <_changeNickname
                open={ischangeNicknameOpen}
                close={closechangeNickname}
                setNickname={setNickname}
            />

            <_changeEmail
                open={isChangeEmailOpen}
                close={closeChangeEmail}
                setEmail={setEmail}
            />
        </div>
    )
}

export default User