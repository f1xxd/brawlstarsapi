import type { BrawlStarsApi } from "../client"
import type { IBrawlerResponse, IBrawlersResponse, IBrawler } from "../schemas"

export interface IGetBrawlerParams {
  id: number
}

export interface IBrawlerResult extends IBrawler {}
export interface IBrawlersResult extends Array<IBrawler> {}

export class Brawlers {
  public constructor(private readonly client: BrawlStarsApi) {}

  public async getBrawlers(): Promise<IBrawlersResult> {
    const response = await this.client.call<IBrawlersResponse>({
      url: "https://api.brawlapi.com",
      path: "/v1/brawlers",
    })

    return response.list
  }

  public async getBrawler(params: IGetBrawlerParams): Promise<IBrawlerResult> {
    const response = await this.client.call<IBrawlerResponse>({
      url: "https://api.brawlapi.com",
      path: `/v1/brawlers/${params.id}`,
    })

    return response
  }
}
