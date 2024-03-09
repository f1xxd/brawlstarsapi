import createDebug from "debug"
import { fetch } from "undici"

import { IRequestOptions } from "types"
import { IResponse } from "schemas"

const debug = createDebug("brawlapi")

export interface IBrawlApiOptions {
  /**
   * User-Agent
   * Required by BrawlApi: https://brawlapi.com/#/Authentication?id=authentication
   * 
   * @example "BrawlApplication/1.0.0"
   */
  userAgent: string
}

export class BrawlApi {
  /** User-Agent */
  public userAgent: string

  /**
   * Creates instance of BrawlApi with the provided options
   * 
   * @constructor
   * @param {IBrawlApiOptions} options
   */
  public constructor(options: IBrawlApiOptions) {
    if(!options.userAgent) throw new Error("User-Agent must not be empty")

    this.userAgent = options.userAgent
  }

  /** 
   * Call an API endpoint
   * @param {IRequestOptions} options
   * @returns A promise with JSON response
  */
  public async call<T extends IResponse>(options: IRequestOptions): Promise<T> {
    debug("preparing request to %s: %o", options.path, options)

    const endpoint = new URL(options.path, "https://api.brawlapi.com/v1")

    const headers: Record<string, string> = {
      "User-Agent": this.userAgent,
      "Content-Type": "application/json",
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
