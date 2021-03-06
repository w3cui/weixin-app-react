import Taro, { Component, Config } from '@tarojs/taro'
import { Swiper, SwiperItem, View, Text, Image } from '@tarojs/components'
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

  }

  onChange(){
    
  }
  render() {
    const { passwords, current } = this.state
    const _this = this;
    const { wxInfo } = this.props.userInfo
    const items = [
      { 'title': '输入密码' },
      { 'title': '支付押金' },
      { 'title': '领取房卡（钥匙）' }
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
            paddingTop: '30rpx',
            paddingBottom: '20rpx'
          }}
        >
          <AtSteps
            items={items}
            current={current}
            onChange={this.onChange.bind(this)}
          />
        </View>
        {current === 0 ? (
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
        ) : ''}

        {current === 1 ? (<View className='pay_push'>
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

        </View>) : ''}

      </View>
    )
  }
}
