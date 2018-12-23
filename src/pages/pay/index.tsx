import Taro, { Component, Config } from '@tarojs/taro'
import { Swiper, SwiperItem, View, Text, Image } from '@tarojs/components'
import { AtAvatar, AtButton , AtSteps, AtForm, Input } from 'taro-ui'
import { connect, userInfo } from '@tarojs/redux'
import './index.scss'

import { add, minus, asyncAdd, setWeiXinUser } from '../../redux/action'

@connect(({ counter, userInfo }) => ({
  counter, userInfo
}), (dispatch, rep) => ({
  setWeiXinUser(data) {
    dispatch(setWeiXinUser(data))
  },
}))

export default class Index extends Component {
  state = {
    swiperConfig: {
      vertical: false,
    },
    circle: true,
    weiXinInfo: false,
    current:0,
    passwordFocus:0,
  }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '新网服务终端'
  }

  hloadChange(value){
    this.setState({passwordFocus:value})
  }

  componentWillMount() {
    const _this = this
    wx.getUserInfo({
      success(res) {
        _this.props.setWeiXinUser(res);
      }
    })
  }


  componentDidMount() {
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { swiperConfig, circle, weiXinInfo ,passwordFocus} = this.state
    const { wxInfo } = this.props.userInfo
    const items = [
      {
        'title': '输入密码',
        'icon': {
          value: 'sound',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14',
        }
      },
      {
        'title': '支付押金',
        'icon': {
          value: 'shopping-cart',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14',
        }
      },
      {
        'title': '领取房卡（钥匙）',
        'icon': {
          value: 'camera',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14',
        }
      }
    ]
    console.log("fdsa", this.props)
    return (
      <View style='flex-direction:column;' className='flex-wrp '>
        <View 
          style={{
            marginTop:'20rpx',
          }}
        >
        <AtSteps
          items={items}
          current={this.state.current}
          onChange={this.onChange.bind(this)}
        />
        </View>
        <AtForm className='pay_password_list'>
          <View className='at-row pay_password_list'>
          {[0,1,2].map(r=>{
            return r !== 2 ? <View className='at-col input'>
            <Input type='password' placeholder='' focus = { passwordFocus === r } onChange={this.hloadChange.bind(this,r)} /><View className='fg'>-</View>
          </View>: <View className='at-col input'>
            <Input type='password'  placeholder='' focus = { passwordFocus === r } onChange={this.hloadChange.bind(this,r)} />
          </View> 
          })}           
          </View>
          
        </AtForm> 
       
      </View>
    )
  }
}
