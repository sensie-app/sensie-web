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
