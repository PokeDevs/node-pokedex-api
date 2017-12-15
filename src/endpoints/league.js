const request = require('request-promise-native');

/**
 * Returns an array of Pokémon League names known to us.
 * @method getEvolutionStones
 * @returns {Promise<Object>} Resolves discovered Pokémon leagues
 * @example
 * pokedex.getLeagues()
 *   .then(leagues => console.log(leagues))
 *   .catch(console.error);
 */
exports.getLeagues = async function () {
  try {
    let options = {
      uri: `${this.BASE_URL}/league`,
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
 * Returns a Pokémon League object containing the details about the league.
 * @method getLeague
 * @param {String} slug The string used to identify this Pokémon leauge.
 * @returns {Promise<Object>} Resolves the specified Pokémon league
 * @example
 * pokedex.getLeague(slug)
 *   .then(league => console.log(league))
 *   .catch(console.error);
 */
exports.getLeague = async function (slug) {
  try {
    let options = {
      uri: `${this.BASE_URL}/league/${slug}`,
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
