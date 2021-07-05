/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
export const dev = {
  /**
   * Equivalent to console.error but in dev mode only
   */
  error: (...args: any[]): void => {
    if (process.env.NODE_ENV !== 'production') {
      console.error('[Dev only]: ', ...args)
    } else {
      console.error('Something is wrong')
    }
  },
  /**
   * Equivalent to console.log but in dev mode only
   */
  log: (...args: any[]): void => {
    if (process.env.NODE_ENV !== 'production') {
      console.log('[Dev only]: ', ...args)
    } else {
      console.log('Something is wrong')
    }
  },
  /**
   * Equivalent to console.warn but in dev mode only
   */
  warn: (...args: any[]): void => {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[Dev only]: ', ...args)
    } else {
      console.warn('Something is wrong')
    }
  },
}

export default dev
