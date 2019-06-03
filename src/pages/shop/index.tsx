import Taro, { Component, Config } from '@tarojs/taro'
import { Swiper, SwiperItem, View, Text, Image, ScrollView } from '@tarojs/components'
import { AtAvatar, AtButton, AtSteps, AtForm, Input } from 'taro-ui'
import { connect, userInfo } from '@tarojs/redux'
import './index.scss'

import EditorNum from '../../components/editor'

import { add, minus, asyncAdd, setWeiXinUser } from '../../redux/action'

@connect(({ counter, userInfo }) => ({
  counter, userInfo
}), (dispatch, rep) => ({
  setWeiXinUser(data) {
    dispatch(setWeiXinUser(data))
  },
}))

class userItemNew {
  constructor(parameters) {
    this.config = {
      ...{
        user: "",
        userId: "",
      },
      ...parameters
    }
  }
  set user(name) {
    this.config.user = name
  }
  get user() {
    const { user } = this.config
    return user
  }
  user2(name) {
    console.log(name)
  }
}

export default class Index extends Component {
  state = {
    swiperConfig: {
      vertical: false,
    },
    circle: true,
    weiXinInfo: false,
    current: 0,
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
    navigationBarTitleText: '自助订房'
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
    console.log(this)
    config.navigationBarTitleText = '支付押金'
    this.setState({ current: current + 1 })
  }
  openPage(url) {
    Taro.navigateTo({
      url: url
    })
  }
  componentWillMount() {
    const userItem2 = new userItemNew({ user: "" })
    console.log(userItem2);
    debugger
  }
  onChange(){
    
  }

  render() {
    const { passwords, current } = this.state
    const _this = this;
    const items = [
      { 'title': '选择房型' },
      { 'title': '信息录入' },
      { 'title': '支付押金' },
      { 'title': '领取房卡' }
    ]
    let inputItem = () => {
      if (!passwords) return []
      let element = []
      for (let index = 0; index < passwords.length; index++) {
        element[index] = `●`
      }
      console.log(element);
      return element
    };
    return (
      <View style='flex-direction:column;' className='flex-wrp '>
        <View
          style={{
            zIndex: 50,
            position: 'absolute',
            left: '0',
            top: 0,
            width: '100%',
            paddingTop: '30rpx',
            background: '#fff',
          }}
        >
          <AtSteps
            items={items}
            current={current}
            onChange={this.onChange.bind(this)}
          />
          <View className='hr' style={{ marginTop: '20rpx' }}></View>
        </View>
        {current === 0 ? (
          <ScrollView
            className='scrollview'
            scrollY
            scrollWithAnimation
            scrollTop={0}
            style='height: 100vh;'
            onScrolltoupper={this.onScrolltoupper}
            onScroll={this.onScroll}>
            <View style={{
              paddingTop: '200rpx',
            }}>
              {[1, 2, 3, 4, 5, 6].map(ref => (
                <View className="item_list_goods at-row">
                  <View className='pic at-col at-col-2 at-col--auto'>
                    <Image
                      mode='scaleToFill'
                      src='http://imgproxy.18cap.cn/imgextra/i3/2176670969/*o1*c*n012a*n87*c1*j1q*h3*hpw2b_!!2176670969.jpg_400x400.jpg'
                    />
                  </View>
                  <View className='center at-col'>
                    <View className='bt'>豪华双人间</View>
                    <View className='desc'>36平米 双床 5-6层</View>
                  </View>
                  <View className='btn'>
                    <View className="col ">
                      <AtButton type='primary' >订购</AtButton>
                    </View>
                    <View className="col money">¥<Text>260</Text></View>
                    <Text className=' col del' >¥226</Text>
                  </View>
                </View>
              ))}

            </View>
          </ScrollView>
        ) : ''
        }
        {
          current === 1 ? (
            <AtForm className='pay_password_list'>
              <View className='at-row pay_password_list' >
                {[0, 1, 2, 3].map(r => {
                  return r !== 3 ? <View className='at-col input' key >
                    <View className={inputItem().length === r ? 'inputText focus' : 'inputText'}  >{inputItem()[r]}</View>
                    <View className='fg'>-</View>
                  </View> : <View className='at-col input'>
                      <View className={inputItem().length === r ? 'inputText focus' : 'inputText'} >{inputItem()[r]}</View>
                    </View>
                })}
              </View>
              <EditorNum
                maxLength={4}
                onChange={this.childChange.bind(this)}
                onSubmit={this.childSubmit.bind(this)}
              />
            </AtForm>
          ) : ''
        }

        {
          current === 2 ? (<View className='pay_push'>
            <View className='pay_push_money'>¥100.00元</View>
            <View className='hr'></View>
            <View className='pay_push_text'>
              <View>1.押金用户通过微信支付的方式向xxx酒店支付入住押金</View>
              <View>2.押金会在用户离开酒店后，由酒店方查验房间后自动原路退返，退返押金需要2个工作日。</View>
              <View>3.又住宿疑问可致电酒店客服电话咨询。</View>
            </View>
            <View className='pay_btn'>
              <View>
                <AtButton type='primary' onClick={this.openPage.bind(this, "/pages/pay/success")}>支付押金 100.00元</AtButton>
              </View>
            </View>

          </View>) : ''
        }

      </View >
    )
  }
}
