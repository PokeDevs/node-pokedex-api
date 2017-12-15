const request = require('request-promise-native');

/**
 * Returns an array of Pokémon Egg Groups discovered in the Pokémon World.
 * @method getEggGroups
 * @returns {Promise<Object>} Resolves discovered Pokémon egg groups
 * @example
 * pokedex.getEggGroups()
 *   .then(eggGroups => console.log(eggGroups))
 *   .catch(console.error);
 */
exports.getEggGroups = async function () {
  try {
    let options = {
      uri: `${this.BASE_URL}/egg-groups`,
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
