import { TEST } from '../constants/test.constants'

export const testAction = data => {
  return {
    type: TEST,
    payload: data
  }
}
