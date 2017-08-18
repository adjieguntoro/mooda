
export default (store) => ({
  path : 'register',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Search = require('./components/RegisterPage').default
      /*  Add the reducer to the store on key 'counter'  */
      /*  Return getComponent   */
      cb(null, Search)

    /* Webpack named bundle   */
    }, 'register')
  }
})
