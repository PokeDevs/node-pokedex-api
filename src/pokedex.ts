/**
 * @author iamtraction
 * @license MIT
 */
import { fetch } from "undici";

export interface PokedexOptions {
    /** The API key for Pokédex API, if you have one. */
    authorization?: string;
    /** A custom User-Agent header used while making request to the Pokédex API. */
    useragent?: string;
}

export interface EvolutionStone {
    name: string
    aka: string;
    slug: string;
    effects: string[];
    sprite: string;
}
export interface EvolutionStoneList {
    [name: string]: string;
}
export interface Pokemon {
    number: number;
    name: string;
    codename?: string;
    gen: number;
    species: string;
    types: string[],
    abilities: {
        name: string;
        description: string;
        hidden: boolean;
    }[];
    height: string;
    weight: string;
    mega: boolean | {
        stone: string;
        sprite: string;
    };
    baseStats: {
        hp: number;
        attack: number;
        defense: number;
        spAtk: number;
        spDef: number;
        speed: number;
    };
    training: {
        evYield: string;
        catchRate: string;
        baseFriendship: string;
        baseExp: string;
        growthRate: string;
    };
    breeding: {
        gender: string;
        eggGroups: string[];
        eggCycles: string;
    };
    sprite: string;
}
export interface PokemonList {
    [number: string]: string;
}

export class Pokedex {
    private url: string;
    private authorization: string;
    private useragent: string;

    constructor(options: PokedexOptions = {}) {
        this.url =  "https://ex.traction.one/pokedex";
        this.authorization = options?.authorization;
        this.useragent = options?.useragent || "pokedex.js";
    }

    private request = async <R>(path: string = "/"): Promise<R> => {
        const res = await fetch(this.url + path, {
            headers: {
                "authorization": this.authorization,
                "user-agent": this.useragent,
            },
        });
        const body = await res.json();

        if (res.status >= 400 && res.status < 600) {
            throw body;
        }

        return body as R;
    };

    /** Get the details of the specified evolution stone. */
    public getEvolutionStone = async (name: string): Promise<EvolutionStone> => {
        return await this.request("/evolution/stones/" + name);
    };

    /** Get the details of the specified Pokémon and its forms. */
    public getPokemon = async (slug: number | string): Promise<Pokemon[]> => {
        return await this.request("/pokemon/" + slug);
    };

    /** Get a list of all the evolution stones. */
    public listEvolutionStones = async (): Promise<EvolutionStoneList> => {
        return await this.request("/evolution/stones");
    };

    /** Get a list of all the discovered Pokémon. */
    public listPokemon = async (): Promise<PokemonList> => {
        return await this.request("/pokemon");
    };
}
