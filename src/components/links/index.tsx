import Taro, { Component, Config } from '@tarojs/taro'
import { Swiper, SwiperItem, View, Text, Image } from '@tarojs/components'
import { AtAvatar, AtButton , AtSteps } from 'taro-ui'
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
    current:0
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
    const { swiperConfig, circle, weiXinInfo } = this.state
    const { wxInfo } = this.props.userInfo
    const items = [
      {
        'title': '步骤一',
        'desc': '这里是额外的信息，最多两行',
        'icon': {
          value: 'sound',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14',
        }
      },
      {
        'title': '步骤二',
        'desc': '这里是额外的信息，最多两行',
        'icon': {
          value: 'shopping-cart',
          activeColor: '#fff',
          inactiveColor: '#78A4FA',
          size: '14',
        }
      },
      {
        'title': '步骤三',
        'desc': '这里是额外的信息，最多两行',
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
      <View style='flex-direction:column;' className='flex-wrp layoutbg'>
        <AtSteps
          items={items}
          current={this.state.current}
          onChange={this.onChange.bind(this)}
        />
        {wxInfo && (
          <View className='at-article home-info '>
            <View className='cent at-article__section'>
              <View className='at-row at-row__align--center'>
                <AtAvatar className='at-col' circle={circle} image={wxInfo.userInfo.avatarUrl}></AtAvatar>
                <View>
                  <View className='at-article__h3'>下午好，{wxInfo.userInfo.nickName}</View>
                  <View className='at-article__p'>
                    欢迎来到“XXXXXXXX”酒店使用自助终端办理入住。
                </View>
                </View>
              </View>
            </View>
          </View>
        )}


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

