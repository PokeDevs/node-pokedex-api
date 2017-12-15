/**
 * @file pokemon.js
 * @author Sankarsan Kampa
 * @license GPL-3.0
 */

const request = require('request-promise-native');

/**
 * Returns an array of Pokémon objects containing all the forms of the Pokémon specified the Pokédex number.
 * @method getPokemonByNumber
 * @param {Number} number The Pokédex number of the Pokémon
 * @returns {Promise<Object>} Resolves information about the specified Pokémon
 * @example
 * pokedex.getPokemonByNumber(658)
 *   .then(pokemon => console.log(pokemon))
 *   .catch(console.error);
 */
exports.getPokemonByNumber = async function (number) {
  try {
    let options = {
      uri: `${this.BASE_URL}/pokemon/${number}`,
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

/**
 * Returns a Pokémon Counts object containing the number of Pokémon in each generation and the total number of Pokémon in the Pokémon World.
 * @method getPokemonCounts
 * @returns {Promise<Object>} Resolves the number of Pokémon in each generatrion and in total
 * @example
 * pokedex.getPokemonCounts()
 *   .then(counts => console.log(counts))
 *   .catch(console.error);
 */
exports.getPokemonCounts = async function () {
  try {
    let options = {
      uri: `${this.BASE_URL}/pokemon/counts`,
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
