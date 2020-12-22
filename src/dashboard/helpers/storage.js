/**
 * @module storage
 */

export const storageService = {
  storeJSONValue,
  getJSONValue,
  storeValue,
  getValue,
  removeValue
}

/**
 * storeJSONValue
 * @param {string} key
 * @param {undefined} value
 * @param {string} store (localStorage || sessionStorage)
 */
function storeJSONValue (key, value, store = localStorage) {
  try {
    const jsonValue = JSON.stringify(value)
    store.setItem(key, jsonValue)
    return true
  } catch (error) {
    console.log('storeJSON', error)
    return false
  }
}

/**
 * getJSONValue
 * @param {string} key
 * @param {string} store (localStorage || sessionStorage)
 */
function getJSONValue (key, store = localStorage) {
  try {
    const value = store.getItem(key)
    return JSON.parse(value)
  } catch (error) {
    console.log('storeJSON', error)
    return false
  }
}

/**
 * storeValue
 * @param {string} key
 * @param {undefined} value
 * @param {string} store (localStorage || sessionStorage)
 */
function storeValue (key, value, store = localStorage) {
  try {
    store.setItem(key, value)
    return true
  } catch (error) {
    console.log('storeValue', error)
    return false
  }
}

/**
 * getValue
 * @param {string} key
 * @param {string} store (localStorage || sessionStorage)
 */
function getValue (key, store = localStorage) {
  try {
    const value = store.getItem(key)
    return value
  } catch (error) {
    console.log('getValue', error)
    return false
  }
}

/**
 * removeValue
 * @param {string} key
 * @param {string} store (localStorage || sessionStorage)
 */
function removeValue (key, store = localStorage) {
  try {
    store.removeItem(key)
    return true
  } catch (error) {
    console.log('removeValue', error)
    return false
  }
}
