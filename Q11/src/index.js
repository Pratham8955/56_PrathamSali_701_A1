/**
 * Capitalizes the first letter of a string
 * @param {string} str - Input string
 * @returns {string} Capitalized string
 */
function capitalize(str) {
  if (typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Returns a reversed string
 * @param {string} str - Input string
 * @returns {string} Reversed string
 */
function reverse(str) {
  if (typeof str !== "string") return "";
  return str.split("").reverse().join("");
}

/**
 * Truncates a string if it's longer than the max length
 * @param {string} str - Input string
 * @param {number} maxLen - Maximum length
 * @param {string} [ellipsis='...'] - Ellipsis to append
 * @returns {string} Truncated string
 */
function truncate(str, maxLen, ellipsis = "...") {
  if (typeof str !== "string") return "";
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen) + ellipsis;
}

module.exports = {
  capitalize,
  reverse,
  truncate,
};
