// src/reducers/counter.js
import { WEIXIN_USER } from '../constants'

const INITIAL_STATE = {
    wxInfo: false,
}

export default function userInfo(state = INITIAL_STATE, action) {
    const { type, user } = action;
    switch (type) {
        case WEIXIN_USER:
            return {
                ...state,
                wxInfo: user || state.wxInfo
            }
        default:
            return state
    }
}