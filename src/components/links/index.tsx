import Taro, { Component, Config } from '@tarojs/taro'
import { Swiper, SwiperItem, View, Text, Image } from '@tarojs/components'
import { AtAvatar, AtButton, AtSteps } from 'taro-ui'
import { connect, userInfo } from '@tarojs/redux'
import './index.scss'

export default class Index extends Component {
  state = {
    showPayPwdInput: false,  //是否展示密码输入层
    pwdVal: '',  //输入的密码
    payFocus: true, //文本框焦点
  }
  /**
   * 显示支付密码输入层
   */
  showInputLayer() {
    this.setState({ showPayPwdInput: true, payFocus: true });
  }

  /**
 * 显示支付密码输入层
 */
  showInputLayer() {
    this.setState({ showPayPwdInput: true, payFocus: true });
  }
  /**
   * 隐藏支付密码输入层
   */
  hidePayLayer() {

    var val = this.data.pwdVal;

    this.setState({ showPayPwdInput: false, payFocus: false, pwdVal: '' }, function () {
      wx.showToast({
        title: val,
      })
    });

  }
  /**
   * 获取焦点
   */
  getFocus() {
    this.setState({ payFocus: true });
  }
  /**
   * 输入密码监听
   */
  inputPwd(e) {
    this.setState({ pwdVal: e.detail.value });
    if (e.detail.value.length >= 6) {
      this.hidePayLayer();
    }
  }

  componentWillMount() {
    this.showInputLayer()
  }


  render() {
    return (
      <View >
        <View className='bg_layer'></View>
        <View className='input_main'>
          <View className='input_title'>
            <View className='input_back' catchtap='hidePayLayer'><Text></Text></View>
            <Text>输入支付密码</Text>
          </View>
          <View className='input_tip'><Text>使用会员卡余额支付需要验证身份，验证通过后才可进行支付。</Text></View>
          <View className='input_row' catchtap='getFocus'>
            <View className='pwd_item' wx: for='{{ 6}}' wx:key='item' wx:for-index='i'>
                      <Text>fdsafdsa</Text>
          </View>
        </View>
        <View className='forget_pwd' catchtap='hidePayLayer'>忘记密码</View>
        <Input className='input_control' password type='number' focus='{{payFocus}}' bindinput='inputPwd' maxlength='6' />
      </View >
    )
  }
}

