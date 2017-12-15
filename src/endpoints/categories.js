/**
 * @file categories.js
 * @author Sankarsan Kampa
 * @license GPL-3.0
 */

const request = require('request-promise-native');

/**
 * Returns an array of Pokémon Categories discovered in the Pokémon World.
 * @method getCategories
 * @returns {Promise<Object>} Resolves discovered Pokémon categories
 * @example
 * pokedex.getCategories()
 *   .then(categories => console.log(categories))
 *   .catch(console.error);
 */
exports.getCategories = async function() {
  try {
    let options = {
      uri: `${this.BASE_URL}/categories`,
      headers: {
        'User-Agent': this.USER_AGENT,
        'Auth': this.AUTH
      },
      json: true
    };

    let response = await request(options);
    return response;
  }
  catch (e) {
    throw e;
  }
};
