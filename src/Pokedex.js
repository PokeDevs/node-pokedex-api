/**
 * @file pokedex.js
 * @author Sankarsan Kampa
 * @license GPL-3.0
 */

const config = require('../settings/config.json');
const request = require('got');

/**
 * @class Pokedex
 */
class Pokedex {
  /**
   * @constructor
   * @param {Object} [options] The options for Pokedex API library
   * @param {String} [options.userAgent] The User-Agent header for the HTTP request
   * @param {String} [options.version] The version of the Pokedex API
   * @example
   * const Pokedex = require('pokedex-api');
   * const pokedex = new Pokedex({
   *   userAgent: 'BastionDiscordBot (https://bastionbot.org, v6.3.2)',
   *   version: 'v1'
   * });
   */
  constructor (options) {
    if (options) {
      if (options.version && config.versions.includes(options.version)) {
        this.version = options.version;
      }
      if (options.userAgent) {
        this.USER_AGENT = options.userAgent;
      }
      if (options.auth) {
        this.AUTH = options.auth;
      }
    }

    if (this.version) {
      this.BASE_URL = `${config.baseURL}/${this.version}`;
    }
    else {
      this.BASE_URL = config.baseURL;
    }

    this.makeRequest = async function(path) {
      try {
        let options = {
          headers: {
            'User-Agent': this.USER_AGENT,
            'Auth': this.AUTH
          },
          json: true
        };

        let response = await request(`${this.BASE_URL}${path}`, options);
        return response.body;
      }
      catch (e) {
        throw e;
      }
    };

    /**
     * Returns an array of Pokémon Categories discovered in the Pokémon World.
     * @method getCategories
     * @returns {Promise<Array>} Resolves discovered Pokémon categories
     * @example
     * pokedex.getCategories()
     *   .then(categories => console.log(categories))
     *   .catch(console.error);
     */
    this.getCategories = async function() {
      let path = '/categories';
      return await this.makeRequest(path);
    };

    /**
     * Returns an array of Pokémon Egg Groups discovered in the Pokémon World.
     * @method getEggGroups
     * @returns {Promise<Array>} Resolves discovered Pokémon egg groups
     * @example
     * pokedex.getEggGroups()
     *   .then(eggGroups => console.log(eggGroups))
     *   .catch(console.error);
     */
    this.getEggGroups = async function() {
      let path = '/egg-groups';
      return await this.makeRequest(path);
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
    this.getEvolutionStone = async function(slug) {
      let path = `/evolution-stone/${slug}`;
      return await this.makeRequest(path);
    };

    /**
     * Returns an array of Pokémon Evolution Stone names discovered in the Pokémon world.
     * @method getEvolutionStones
     * @returns {Promise<Array>} Resolves discovered Pokémon evolution stones
     * @example
     * pokedex.getEvolutionStones()
     *   .then(evolutionStones => console.log(evolutionStones))
     *   .catch(console.error);
     */
    this.getEvolutionStones = async function() {
      let path = '/evolution-stone';
      return await this.makeRequest(path);
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
    this.getLeague = async function(slug) {
      let path = `/league/${slug}`;
      return await this.makeRequest(path);
    };

    /**
     * Returns an array of Pokémon League names known to us.
     * @method getEvolutionStones
     * @returns {Promise<Array>} Resolves discovered Pokémon leagues
     * @example
     * pokedex.getLeagues()
     *   .then(leagues => console.log(leagues))
     *   .catch(console.error);
     */
    this.getLeagues = async function() {
      let path = '/league';
      return await this.makeRequest(path);
    };

    /**
     * Returns an array of Pokémon objects containing all the forms of the Pokémon specified the name.
     * @method getPokemonByNumber
     * @param {String} name The name of the Pokémon
     * @returns {Promise<Array>} Resolves information about the specified Pokémon
     * @example
     * // It's best practice to use encodeURIComponent() to encode the name
     * // string so the API server doesn't respond with 404.
     * pokedex.getPokemonByName(encodeURIComponent('Pikachu'))
     *   .then(pokemon => console.log(pokemon))
     *   .catch(console.error);
     */
    this.getPokemonByName = async function(name) {
      let path = `/pokemon/${name}`;
      return await this.makeRequest(path);
    };

    /**
     * Returns an array of Pokémon objects containing all the forms of the Pokémon specified the Pokédex number.
     * @method getPokemonByNumber
     * @param {Number} number The Pokédex number of the Pokémon
     * @returns {Promise<Array>} Resolves information about the specified Pokémon
     * @example
     * pokedex.getPokemonByNumber(658)
     *   .then(pokemon => console.log(pokemon))
     *   .catch(console.error);
     */
    this.getPokemonByNumber = async function(number) {
      let path = `/pokemon/${number}`;
      return await this.makeRequest(path);
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
    this.getPokemonCounts = async function() {
      let path = '/pokemon/counts';
      return await this.makeRequest(path);
    };

    /**
     * Returns an array of Pokémon Types discovered in the Pokémon World.
     * @method getTypes
     * @returns {Promise<Array>} Resolves discovered Pokémon types
     * @example
     * pokedex.getTypes()
     *   .then(types => console.log(types))
     *   .catch(console.error);
     */
    this.getTypes = async function() {
      let path = '/types';
      return await this.makeRequest(path);
    };
  }
}

module.exports = Pokedex;
