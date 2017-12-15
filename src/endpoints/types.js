/**
 * @file types.js
 * @author Sankarsan Kampa
 * @license GPL-3.0
 */

const request = require('request-promise-native');

/**
 * Returns an array of Pokémon Types discovered in the Pokémon World.
 * @method getTypes
 * @returns {Promise<Object>} Resolves discovered Pokémon types
 * @example
 * pokedex.getTypes()
 *   .then(types => console.log(types))
 *   .catch(console.error);
 */
exports.getTypes = async function () {
  try {
    let options = {
      uri: `${this.BASE_URL}/types`,
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
