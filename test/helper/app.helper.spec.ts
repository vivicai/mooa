import { hashCode } from '../../src/helper/app.helper'

const AppHelper = require('../../src/helper/app.helper')

test('should be able to find app name', () => {
  let apps = [{ name: 'app1' }, { name: 'help' }]
  let findApp = AppHelper.find(apps, (app: any) => {
    return app.name === 'help'
  })
  expect(findApp.name).toBe('help')
})

test('should be unable to find app name', () => {
  let apps = [{ name: 'app1' }, { name: 'help' }]
  let isFind = AppHelper.find(apps, (app: any) => {
    return app.name === 'help1'
  })
  expect(isFind).toBe(null)
})

test('should be able to call console log', () => {
  global.console.log = jest.fn()
  Object.defineProperty(window, 'mooa', () => {
    return true
  })

  AppHelper.mooaLog('hello', 'world')
  // expect(global.console.log).toHaveBeenCalled()
})

test('should get hash code', () => {
  let hash = hashCode('hello, world')
  expect(hash).toBe('543394210')
})

test('should not get hash code', () => {
  let hash = hashCode('')
  expect(hash).toBe('0')
})
