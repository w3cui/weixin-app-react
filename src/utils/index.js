let host = ''

if (process.env.NODE_ENV === 'development') {
    // 开发环境
    // host = 'http://www.hyc.com/xcx'
    host = '/api/'

} else if (process.env.NODE_ENV === 'production') {
    // 生产环境
    host = `http://yang.park666.com/`
}


export {
    host
}
