/**
 * @typedef {Object} Menu
 * @property {number} index
 * @property {string} name
 * @property {string} value
 */

/**
 * @typedef {Object} Affirmation
 * @property {string} title
 * @property {number} value
 */

/**
 * @typedef {Object} affirmations
 * @property {Menu} stateFilter
 * @property {array} topicFilter
 * @property {Affirmation} affirmation
 */

/**
 * @typedef {Object} INITIAL_STATE_FILTERS
 * @property {Menu} globalDateFilter
 * @property {affirmations} affirmations
 */

/**
 * @typedef {Object} userList
 * @property {string} showList
 */

/**
 * @typedef {Object} INITIAL_STATE_SHOW
 * @property {userList} userList
 */

/**
 * @typedef {Object} TOPICS
 * @param {string} id
 * @param {string} name
 * @param {string} description
 */

/**
 * @typedef {Array.TOPICS} INITIAL_STATE_TOPICS
 */
