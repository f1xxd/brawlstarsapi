import type { BrawlApi } from "../client"
import type { IIconsResponse } from "../schemas"

export interface IIconsResult extends IIconsResponse {}

export class Icons {
  public constructor(private readonly client: BrawlApi) {}

  public async getIcons(): Promise<IIconsResult> {
    const response = await this.client.call<IIconsResponse>({
      path: "/v1/icons",
    })

    return response
  }
}
