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
      </View >
    )
  }
}

