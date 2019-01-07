import Taro, { Component, Config } from '@tarojs/taro'
import { Swiper, SwiperItem, View, Text, Image } from '@tarojs/components'
import { AtAvatar, AtButton, AtSteps, AtForm, Input, AtIcon } from 'taro-ui'
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
    current: 2,
    passwords: '',
  }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '密码办理入住'
  }

  // hloadChange(event) {
  //   const { current } = this.state
  //   this.setState({ ...{ passwords: event.detail.value }, ...(event.detail.value.length === 4 ? { current: current + 1 } : {}) })
  // }

  childChange(v, k) {
    const { current } = this.state
    this.setState({ passwords: v })
  }
  childSubmit() {
    const { current } = this.state
    const { config } = this
    config.navigationBarTitleText = '支付成功'
    this.setState({ current: current + 1 })
  }
  componentWillMount() {

  }


  render() {
    const { current } = this.state
    const _this = this;
    const items = [
      { 'title': '输入密码' },
      { 'title': '支付押金' },
      { 'title': '领取房卡（钥匙）' }
    ]
    return (
      <View style='flex-direction:column;' className='flex-wrp '>
        <View
          style={{
            paddingTop: '30rpx',
            paddingBottom: '20rpx'
          }}
        >
          <AtSteps
            items={items}
            current={current}
          />
        </View>

        <View className='pay_push'>
          <View className='pay_succes_msg'>
            <View>
              <AtIcon prefixClass='iconfont' value='gou' size='80' color='#f58523'  ></AtIcon>
            </View>
            支付成功
          </View>
          <View className='hr'></View>
          <View className='pay_push_text_two'>
            <View className='bt'><AtIcon prefixClass='iconfont' value='gengduo' size='30' color='#9B9E9F'  ></AtIcon>开启成功<AtIcon prefixClass='iconfont' value='gengduo' size='30' color='#9B9E9F'  ></AtIcon></View>
            <View>305 房间 1 间 请打开柜门领取房间钥匙</View>
          </View>
          <View className='pay_btn'>
            <View>
              <AtButton type='primary' disabled >开启柜门</AtButton>
            </View>
          </View>

        </View>

      </View>
    )
  }
}
