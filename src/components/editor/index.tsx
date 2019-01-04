import Taro, { Component, Config } from '@tarojs/taro'
import { Swiper, SwiperItem, View, Text, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import Icons from '../icon'
import './index.scss'

if (process.env.TARO_ENV === 'weapp') {
  require('taro-ui/dist/weapp/css/index.css')
} else if (process.env.TARO_ENV === 'h5') {
  require('taro-ui/dist/h5/css/index.css')
}
export default class EditorNum extends Component {
  state = {
    editorItem: [7, 8, 9, "", 4, 5, 6, "+", 1, 2, 3, '-', '.', 0, 'x', '完成'],
    value: "",
  }
  /**
   * 获取焦点
   */
  childFocus(ref) {
    const { value } = this.state
    const { onChange, onSubmit, maxLength } = this.props
    const retValue = ref === 'x' ? value.substr(0, value.length - 1) : `${value}${ref === '完成' ? '' : ref}`
    if (retValue.length > maxLength) {
      return false
    } else if (ref === '完成' && onSubmit && retValue.length === maxLength) {
      onSubmit()
    } else if (ref !== '完成' && ref !== '') {
      this.setState({ value: retValue })
      onChange(retValue, ref)
    }
  }

  componentWillMount() {

  }

  render() {
    const { editorItem } = this.state
    const isAddClassName = (data) => {
      switch (data) {
        case '':
          return ''
          break
        case '完成':
          return 'submit'
          break
        default:
          return 'hover'
          break
      }
    }
    return (
      <View className="editor_num at-row at-row--wrap">
        {editorItem.map((ref, $key) => (<View className={`at-col at-col-3 ${isAddClassName(ref)}`} onClick={this.childFocus.bind(this, ref)} key={$key} >
          {ref === 'x' ? <Icons icon='iconfont-qingchu' size='45rpx' /> : ref}
        </View>))}
      </View >
    )
  }
}

