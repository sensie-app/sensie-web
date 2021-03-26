import IMG from '../constants/images'
const moment = require('moment')

/**
   * handle large name
   * @param {string} name
   * @param {number} large
   */
// export const handleLargeName = (name, large) => name && name.length > large ? name.substr(0, large) + '...' : name
export const handleLargeName = (name, large) => name

/**
   * handleArrTopics
   * @returns {Array}
   */
export const handleArrTopics = topics => topics.map(item => item.topic)

/**
   * handleDefaultPicture
   * @returns {string} img
   */
export const handleDefaultPictureUser = gender => gender === 'Male' ? IMG.avatarMale : IMG.avatarFemale

/**
   * handleFlow
   * @returns {number} total sensies
   */
export const handleFlow = data => {
  const totalSensies = data.length
  if (totalSensies === 0) return 'NO_SENSIES'
  const sensies = data.filter(value => value.result === 1)
  const flow = totalSensies > 0 ? sensies.length / totalSensies : 0
  return (flow * 100).toFixed(0)
}

/**
   * handleFlow
   * @returns {number} total sensies
   */
export const handleBlock = data => {
  const totalSensies = data.length
  const sensies = data.filter(value => value.result === 0)
  const block = totalSensies > 0 ? sensies.length / totalSensies : 0
  return (block * 100).toFixed(0)
}

/**
   * handleEngagement
   * @param {array} arrDates
   * @param {number} totalSensies
   * @returns {number} total sensies
   */
export const handleEngagement = (arrDate, totalSensies) => {
  const days = moment(arrDate[1]).diff(moment(arrDate[0]), 'days')
  return (totalSensies / (days + 1) * 100).toFixed(0)
}

export const handleAwareness = (scores) => {
  if (scores.length === 0) return 'NO_AWARENESS'
  const sortedScores = scores.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
  const latest = sortedScores.length > 0 ? sortedScores[0].score : 0
  return latest
}
