import type { BrawlStarsApi } from "../client"
import type { IEventsResponse } from "../schemas"

export interface IEventsResult extends IEventsResponse {}

export class Events {
  public constructor(private readonly client: BrawlStarsApi) {}

  public async getEvents(): Promise<IEventsResult> {
    const response = await this.client.call<IEventsResponse>({
      url: "https://api.brawlapi.com",
      path: "/v1/events",
    })

    return response
  }
}
