import Taro, { Component, Config } from '@tarojs/taro'
import { Swiper, SwiperItem, View, Text, Image ,Button} from '@tarojs/components'
import { AtAvatar, AtButton } from 'taro-ui'
import { connect, userInfo } from '@tarojs/redux'
import './index.scss'

import { setWeiXinUser } from '../../redux/action'

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

  openURL(url) {
    wx.navigateTo({
      url: url
    })
  }
  componentWillMount() {
    const _this = this
    // 获取用户信息
    wx.getUserInfo({
      success(res) {
        _this.props.setWeiXinUser(res)
        setTimeout(() => {
          res.userInfo.nickName = res.userInfo.nickName + "111111111"
          console.log(res)
          _this.props.setWeiXinUser(res)
          console.log(_this.props)
        }, 5000);

        // _this.setState({ weiXinInfo: res.userInfo });
      }
    })
    // 进行微信授权
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.record']) {
          wx.authorize({
            scope: 'scope.record',
            success() {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              wx.startRecord()
            }
          })
        }
      }
    })

  }

  componentDidMount() {
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { swiperConfig, circle, weiXinInfo } = this.state
    const { wxInfo } = this.props.userInfo

    console.log("fdsa", this.props)
    return (
      <View style='flex-direction:column;' className='flex-wrp layoutbg'>
        <Swiper
          className='test-h'
          indicatorColor='rgba(255,255,255,1)'
          indicatorActiveColor='rgba(255,255,255,.3)'
          vertical={swiperConfig.vertical}
          circular
          indicatorDots
          autoplay>
          <SwiperItem style={{ backgroundColor: '#dfe2e5' }} >
            <Image
              style={{ width: '100%', height: '100%' }}
              src='https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180'
              mode='widthFix' />
          </SwiperItem>
          <SwiperItem style={{ backgroundColor: '#f1f1f1' }} >
            <Image
              style={{ width: '100%', height: '100%' }}
              src='https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180'
              mode='widthFix' />
          </SwiperItem>
          <SwiperItem style={{ backgroundColor: '#dfe2e5' }} >
            <Image
              style={{ width: '100%', height: '100%' }}
              src='https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180'
              mode='widthFix' />
          </SwiperItem>
        </Swiper>
        {wxInfo && (
          <View className='at-article home-info '>
            <View className='cent at-article__section'>
              <View className='at-row at-row__align--center'>
                {/* <AtAvatar className='at-col' circle={circle} image={wxInfo.userInfo.avatarUrl}></AtAvatar> */}
                <View>
                  <View className='at-article__h3'>下午好，{wxInfo.userInfo.nickName}</View>
                  <View className='at-article__p'>
                    欢迎来到<Text>XXXXXXXX</Text>酒店使用自助终端办理入住。
                </View>
                </View>
              </View>
            </View>
          </View>
        )}


        <View className=''>
          <View className=''>
            <Button onClick={this.openURL.bind(this, '/pages/pay/index')}>已订房间密码办理入住</Button>
          </View>
          <View className=''>
            <Button onClick={this.openURL.bind(this, '/pages/pay/index')}>自助订房在线支付入住</Button>
          </View>
        </View>

      </View>
    )
  }
}

