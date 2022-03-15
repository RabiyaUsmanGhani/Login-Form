const loggerMiddleware = ({ getState }) => (next) => (action) => {
    console.group('store')
    console.log('befor', getState())
    console.log('action', action)
    const rs = next(action)
    console.log('after', getState())
    console.groupEnd()
    return rs
  }
  export default loggerMiddleware
  