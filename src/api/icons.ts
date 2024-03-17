import type { BrawlStarsApi } from "../client"
import type { IIconsResponse } from "../schemas"

export interface IIconsResult extends IIconsResponse {}

export class Icons {
  public constructor(private readonly client: BrawlStarsApi) {}

  public async getIcons(): Promise<IIconsResult> {
    const response = await this.client.call<IIconsResponse>({
      url: "https://api.brawlapi.com",
      path: "/v1/icons",
    })

    return response
  }
}
