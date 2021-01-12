import PACKS from '../constants/packs.constants'

const { PACKS_LIST } = PACKS

export const setPacksAction = data => {
  return {
    type: PACKS_LIST,
    payload: data
  }
}
