import { createSlice } from '@reduxjs/toolkit'
import { request } from '../../utils'
import { setToken as _setToken, getToken, removeToken } from '../../utils'
// import { loginAPI, getProfileAPI } from '@/apis/user'

const userStore = createSlice({
    name: "user",
    // 数据状态
    initialState: {
        token: getToken() || '',
        userInfo: {},
        bookList: {}
    },
    // 同步修改方法
    reducers: {
        setToken(state, action) {
            state.token = action.payload
            _setToken(action.payload)
        },
        setUserInfo(state, action) {
            state.userInfo = action.payload
        },
        clearUserInfo(state){
            state.token = ''
            state.userInfo = {}
            removeToken()
        },
    }
})


// 解构出actionCreater

const { setToken, setUserInfo, clearUserInfo } = userStore.actions

// 获取reducer函数

const userReducer = userStore.reducer

// 登录获取token异步方法封装
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        await request({
            url: '/user/login',
            method: 'post',
            params: loginForm
        }).then(function (res) {
            if (res.code == 0) {
                dispatch(setToken(res.data));
            }
            else {
                alert("登录失败，账号或密码错误")
            }
        }).catch(function (err) {
            alert(err);
        })
    }
}

//注册registration异步方法
export function RegistrationAPI(data) {
    return request({
        url: '/user/register',
        method: 'post',
        data: data
    })
}

//发送验证码异步方法
export function sendCaptchaAPI(data) {
    return request({
        url: "/user/captcha",
        method: 'post',
        params: data
    })
}

// 获取个人用户信息异步方法
const fetchUserInfo = () => {
    return async (dispatch) => {
        await request({
            method: 'get',
            url: '/user/getInfo',
        }).then(function (res) {
            if (res.code == 0) {
                dispatch(setUserInfo(res.data));
            }
            else {
                console.log("获取用户数据失败")
            }
        }).catch(function (err) {
            console.log(err);
        })
    }
}

// 修改用户昵称异步方法
export function changeNicknameAPI(data) {
    return request({
        url: '/user/changeNickname',
        method: 'patch',
        params: data
    })
}

// 修改密码异步方法
export function changePasswordAPI() {
    return request({
        url: '/user/changePassword',
        method: 'patch',
    })
}

// 修改邮箱异步方法
export function changeEmailAPI() {
    return request({
        url: '/user/changeEmail',
        method: 'patch',
    })
}

export { fetchLogin, fetchUserInfo, setToken, clearUserInfo }

export default userReducer