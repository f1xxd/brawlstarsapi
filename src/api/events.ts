import type { BrawlApi } from "client"
import type { IEventsResponse } from "schemas"

export interface IEventsResult extends IEventsResponse {}

export class Events {
  public constructor(private readonly client: BrawlApi) {}

  public async getEvents(): Promise<IEventsResult> {
    const response = await this.client.call<IEventsResponse>({
      path: "/events",
    })

    return response
  }
}
