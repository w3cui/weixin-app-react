import request from '../utils/request'
import {
    host
} from '../utils/index'

// 登录
export const setUserThird = (params = {}) => request(`/api/user/third`, {
    method: 'POST',
    data: params,
});
