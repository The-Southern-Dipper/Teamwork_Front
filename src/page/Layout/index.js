import React, { useEffect, useState } from 'react';
import { Layout, Menu, Popconfirm, theme, ConfigProvider, Button, Modal, Dropdown, Space } from 'antd'
import {
    HomeOutlined,
    DiffOutlined,
    EditOutlined,
    LogoutOutlined,
} from '@ant-design/icons'
import './index.scss'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearUserInfo, fetchUserInfo } from '../../store/modules/user';
import Contact from '../../components/Contact';

const { Header, Sider } = Layout

const items = [
    {
        label: '首页',
        key: '/',
        icon: <HomeOutlined />,
    },
    {
        label: '我要卖书',
        key: '/seller',
    },
    {
        label: '个人中心',
        key: '/user'
    }
]



const GeekLayout = () => {
    const items2 = [
        {
            label: <Button
                type='link'
                onClick={() => { setIsContactOpen(true) }}
            >
                聊天消息
            </Button>,
            key: '1',
        },
        {
            label: "修改信息",
            key: '2',
        },
        {
            label: <Button
                type='link'
                onClick={() => { setLogout(true) }}
            >
                <LogoutOutlined /> 退出
            </Button>,
            key: '3',
        },
    ];

    const navigate = useNavigate()

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken()

    const onMenuClick = (route) => {
        const path = route.key
        navigate(path)
    }

    const location = useLocation();
    const selectedKey = location.pathname

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserInfo())
    }, [dispatch])

    const nickname = useSelector(state => state.user.userInfo.nickname);

    const [Logout, setLogout] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    //确认退出窗口
    const ConfirmLogout = () => {
        dispatch(clearUserInfo())
        navigate('/login')
        setLogout(false);
    };
    const CancelLogout = () => {
        setLogout(false);
    };

    //关闭聊天窗口
    const closeContact = () => {
        setIsContactOpen(false)
    }

    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: '#77c2ff'
                }}
            >
                {/* <div className="logo" /> */}
                <Menu
                    theme='dark'
                    mode="horizontal"
                    selectedKeys={selectedKey}
                    onClick={onMenuClick}
                    style={{ flex: 1, minWidth: 0, color: '#77c2ff' }}
                    items={items}
                ></Menu>
                <div className="user-info">
                    {/* <span className="user-name">{nickname}</span> */}
                    <span className="user-logout">
                        <Dropdown
                            menu={{ items: items2 }}
                            trigger={['click']}
                        >
                            <Space>
                                {nickname}
                            </Space>
                        </Dropdown>
                    </span>
                </div>
            </Header>
            <Layout
                style={{
                    padding: '24px 0',
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Layout
                    className="layout-content"
                    style={{ padding: 20 }}
                >
                    <Outlet />
                </Layout>
            </Layout>

            <Modal
                title="确认要退出吗"
                open={Logout}
                onOk={ConfirmLogout}
                onCancel={CancelLogout}
                okText="确认"
                cancelText="取消"
            >
                退出登录后，您下次登录将要重新输入账号密码
            </Modal>

            <Contact
                open={isContactOpen}
                close={closeContact}
            >
            </Contact>
        </Layout>
    )
}

export default GeekLayout;