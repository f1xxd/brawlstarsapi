import { BrawlApi } from "client"
import { IGamemodeResponse, IGamemodesResponse, IGamemode } from "schemas"

export interface IGetGamemodeParams {
  id: number
}

export interface IGamemodeResult extends IGamemode {}
export interface IGamemodesResult extends Array<IGamemode> {}

export class Gamemodes {
  public constructor(private readonly client: BrawlApi) {}

  public async getGamemodes(): Promise<IGamemodesResult> {
    const response = await this.client.call<IGamemodesResponse>({
      path: "/gamemodes",
    })

    return response.list
  }

  public async getGamemode(params: IGetGamemodeParams): Promise<IGamemodeResult> {
    const response = await this.client.call<IGamemodeResponse>({
      path: `/gamemodes/${params.id}`,
    })

    return response
  }
}
