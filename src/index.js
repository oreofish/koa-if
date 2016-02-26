import isFunction from 'lodash.isFunction'
import isBoolean from 'lodash.isboolean'

export default function(middleware, condition=true) {
  return async (ctx, next) => {
    if (isFunction(condition) && condition(ctx)) {
      await middleware(ctx, next)
    } else if (isBoolean(condition) && condition) {
      await middleware(ctx, next)
    } else {
      await next()
    }
  }
}
