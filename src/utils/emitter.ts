import mitt, { Emitter } from 'mitt'
import logger from './logger'

const emitter: Emitter<any> =
  typeof window === 'undefined'
    ? {
        all: new Map(),
        on: () => {
          logger.error('emitter', 'emitter should not be invoked on server side')
        },
        off: () => {
          logger.error('emitter', 'emitter should not be invoked on server side')
        },
        emit: () => {
          logger.error('emitter', 'emitter should not be invoked on server side')
        },
      }
    : mitt()

export default emitter
