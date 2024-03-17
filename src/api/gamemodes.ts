import type { BrawlStarsApi } from "../client"
import type { IGamemodeResponse, IGamemodesResponse, IGamemode } from "../schemas"

export interface IGetGamemodeParams {
  id: number
}

export interface IGamemodeResult extends IGamemode {}
export interface IGamemodesResult extends Array<IGamemode> {}

export class Gamemodes {
  public constructor(private readonly client: BrawlStarsApi) {}

  public async getGamemodes(): Promise<IGamemodesResult> {
    const response = await this.client.call<IGamemodesResponse>({
      url: "https://api.brawlapi.com",
      path: "/v1/gamemodes",
    })

    return response.list
  }

  public async getGamemode(params: IGetGamemodeParams): Promise<IGamemodeResult> {
    const response = await this.client.call<IGamemodeResponse>({
      url: "https://api.brawlapi.com",
      path: `/v1/gamemodes/${params.id}`,
    })

    return response
  }
}
