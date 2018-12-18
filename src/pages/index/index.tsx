import Taro, { Component, Config } from '@tarojs/taro'
import { Swiper, SwiperItem, View, Text, Image } from '@tarojs/components'
import { AtAvatar, AtButton } from 'taro-ui'
import './index.scss'

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

  componentWillMount() {
    let _this = this;
    wx.getUserInfo({
      success(res) {
        console.log(res);
        _this.setState({ weiXinInfo: res.userInfo });
      }
    })

  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const { swiperConfig, circle, weiXinInfo } = this.state
    console.log(swiperConfig, circle)
    return (
      <View style='flex-direction:column;' className='flex-wrp layoutbg'>
        <Swiper
          className='test-h'
          indicatorColor='#fff'
          indicatorActiveColor='rgba(0,0,0.3)'
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
        <View className='at-article home-info '>
          <View className='cent at-article__section'>
            <View className='at-row at-row__align--center'>
              <AtAvatar className='at-col' circle={circle} image={weiXinInfo.avatarUrl}></AtAvatar>
              <View>
                <View className='at-article__h3'>下午好，{weiXinInfo.nickName}</View>
                <View className='at-article__p'>
                  欢迎来到“XXXXXXXX”酒店使用自助终端办理入住。
                </View>
              </View>
            </View>
          </View>
        </View>

        <View className='at-row at-row__justify--between at-row__align--center'>
          <View className='at-col at-col-5'>
            <AtButton type='primary' size='small'>按钮文案</AtButton>
          </View>
          <View className='at-col at-col-5'>
            <AtButton type='primary' size='small'>按钮文案</AtButton>
          </View>
        </View>
      </View>
    )
  }
}

