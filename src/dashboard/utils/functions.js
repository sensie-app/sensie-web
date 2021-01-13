import IMG from '../constants/images'

/**
   * handle large name
   * @param {string} name
   * @param {number} large
   */
export const handleLargeName = (name, large) => name && name.length > large ? name.substr(0, large) + '...' : name

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
