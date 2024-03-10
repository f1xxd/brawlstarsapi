import type { BrawlApi } from "../client"
import type { IMapResponse, IMapsResponse, IMap } from "../schemas"

export interface IGetMapParams {
  id: number
}

export interface IMapResult extends IMap {}
export interface IMapsResult extends Array<IMap> {}

export class Maps {
  public constructor(private readonly client: BrawlApi) {}

  public async getMaps(): Promise<IMapsResult> {
    const response = await this.client.call<IMapsResponse>({
      path: "/v1/maps",
    })

    return response.list
  }

  public async getMap(params: IGetMapParams): Promise<IMapResult> {
    const response = await this.client.call<IMapResponse>({
      path: `/v1/maps/${params.id}`,
    })

    return response
  }
}
