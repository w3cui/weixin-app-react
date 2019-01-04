import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import '../../scss/common.scss'
export default class Icons extends Component {
  state = {
  }
  render() {
    const { icon, iconName, size, color } = this.props
    return (
      <View className={`${icon} ${iconName || 'iconfont'}`} style={{ fontSize: size || '35rpx', color: color || '#555' }}>
      </View >
    )
  }
}

