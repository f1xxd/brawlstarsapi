import createDebug from "debug"
import { fetch } from "undici"

import { Brawlers, Events, Gamemodes, Icons, Maps, Players, Clubs, Rankings } from "./api"

import type { IRequestOptions } from "./types"
import type { IResponse } from "./schemas"

const debug = createDebug("brawlstarsapi")

export interface IBrawlStarsApiOptions {
  /**
   * User-Agent
   * Required by BrawlApi: https://brawlapi.com/#/Authentication?id=authentication
   * 
   * @example "BrawlApplication/1.0.0"
   */
  userAgent: string

  /**
   * JWT Bearer Token
   * Required by BrawlStars API
   * 
   * @example "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxM..."
   */
  token: string
}

export class BrawlStarsApi {
  /** User-Agent */
  private readonly userAgent: string

  /** Token */
  private readonly token: string

  /** Brawlers API
   * 
   * @example https://brawlapi.com/#/endpoints/brawlers
  */
  public readonly brawlers = new Brawlers(this)

  /** Events API
   * 
   * @example https://brawlapi.com/#/endpoints/events
  */
  public readonly events = new Events(this)

  /** Gamemodes API
   * 
   * @example https://brawlapi.com/#/endpoints/gamemodes
  */
  public readonly gamemodes = new Gamemodes(this)

  /** Icons API
   * 
   * @example https://brawlapi.com/#/endpoints/icons
  */
  public readonly icons = new Icons(this)

  /** Maps API
   * 
   * @example https://brawlapi.com/#/endpoints/maps
  */
  public readonly maps = new Maps(this)

  /** Players API
   * 
   * @example https://developer.brawlstars.com/api-docs/index.html#/players
  */
  public readonly players = new Players(this)

  /** Clubs API
   * 
   * @example https://developer.brawlstars.com/api-docs/index.html#/clubs
  */
  public readonly clubs = new Clubs(this)

  /** Rankings API
   * 
   * @example https://developer.brawlstars.com/api-docs/index.html#/rankings
  */
  public readonly rankings = new Rankings(this)

  /**
   * Creates instance of BrawlApi with the provided options
   * 
   * @constructor
   * @param {IBrawlApiOptions} options
   */
  public constructor(options: IBrawlStarsApiOptions) {
    if(!options.userAgent) throw new Error("User-Agent must not be empty")
    if(!options.token) throw new Error("Token must not be empty")

    this.userAgent = options.userAgent
    this.token = options.token
  }

  /** 
   * Call an API endpoint
   * @param {IRequestOptions} options
   * @returns A promise with JSON response
  */
  public async call<T extends IResponse>(options: IRequestOptions): Promise<T> {
    debug("preparing request to %s: %o", options.path, options)

    const endpoint = new URL(options.path, options.url)

    const headers: Record<string, string> = {
      "User-Agent": this.userAgent,
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.token}`,
    }

    const init: RequestInit = {
      headers,
      method: "GET",
    }

    debug("making request to %s (%s): %o", options.path, endpoint, init)

    const response = await fetch(endpoint.href, init)
    const data = await response.json() as T

    debug("got response from %s (%s): %o", options.path, endpoint, data)

    return data
  }
}
