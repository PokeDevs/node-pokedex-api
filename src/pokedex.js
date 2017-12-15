/**
 * @file pokedex.js
 * @author Sankarsan Kampa
 * @license GPL-3.0
 */

const config = require('../settings/config.json');
const { getCategories } = require('./endpoints/categories');
const { getEggGroups } = require('./endpoints/egg-groups');
const { getEvolutionStone, getEvolutionStones } = require('./endpoints/evolution-stone');
const { getLeagues, getLeague } = require('./endpoints/league');
const { getPokemonByNumber, getPokemonCounts } = require('./endpoints/pokemon');
const { getTypes } = require('./endpoints/types');

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

    /* /categories */
    this.getCategories = getCategories;
    /* /egg-groups */
    this.getEggGroups = getEggGroups;
    /* /evolution-stone */
    this.getEvolutionStone = getEvolutionStone;
    this.getEvolutionStones = getEvolutionStones;
    /* /league */
    this.getLeague = getLeague;
    this.getLeagues = getLeagues;
    /* /pokemon */
    this.getPokemonByNumber = getPokemonByNumber;
    this.getPokemonCounts = getPokemonCounts;
    /* /types */
    this.getTypes = getTypes;
  }
}

module.exports = Pokedex;
