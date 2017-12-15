const request = require('request-promise-native');

/**
 * Returns an array of Pokémon Evolution Stone names discovered in the Pokémon world.
 * @method getEvolutionStones
 * @returns {Promise<Object>} Resolves discovered Pokémon evolution stones
 * @example
 * pokedex.getEvolutionStones()
 *   .then(evolutionStones => console.log(evolutionStones))
 *   .catch(console.error);
 */
exports.getEvolutionStones = async function () {
  try {
    let options = {
      uri: `${this.BASE_URL}/evolution-stone`,
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
 * Returns a Evolution Stone object containing the details about the evolution stone.
 * @method getEvolutionStone
 * @param {String} slug The string used to identify this evolution stone.
 * @returns {Promise<Object>} Resolves the specified Pokémon evolution stone
 * @example
 * pokedex.getEvolutionStone(slug)
 *   .then(evolutionStone => console.log(evolutionStone))
 *   .catch(console.error);
 */
exports.getEvolutionStone = async function (slug) {
  try {
    let options = {
      uri: `${this.BASE_URL}/evolution-stone/${slug}`,
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
