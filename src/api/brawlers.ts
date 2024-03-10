import type { BrawlApi } from "client"
import type { IBrawlerResponse, IBrawlersResponse, IBrawler } from "schemas"

export interface IGetBrawlerParams {
  id: number
}

export interface IBrawlerResult extends IBrawler {}
export interface IBrawlersResult extends Array<IBrawler> {}

export class Brawlers {
  public constructor(private readonly client: BrawlApi) {}

  public async getBrawlers(): Promise<IBrawlersResult> {
    const response = await this.client.call<IBrawlersResponse>({
      path: "/brawlers",
    })

    return response.list
  }

  public async getBrawler(params: IGetBrawlerParams): Promise<IBrawlerResult> {
    const response = await this.client.call<IBrawlerResponse>({
      path: `/brawlers/${params.id}`,
    })

    return response
  }
}
