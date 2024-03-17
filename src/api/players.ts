import type { BrawlStarsApi } from "../client"
import type { Player, BattleList } from "../schemas"

export interface IGetPlayerParams {
  tag: string
}

export interface IPlayerResult extends Player {}
export interface IPlayerBattlelogResult {
  items: BattleList
  paging: Record<string, unknown>
}

export class Players {
  public constructor(private readonly client: BrawlStarsApi) {}

  public async getPlayer(params: IGetPlayerParams): Promise<IPlayerResult> {
    const response = await this.client.call<IPlayerResult>({
      url: "https://api.brawlstars.com",
      path: `/v1/players/%23${params.tag.replace("#", "").replace("%23", "")}`,
    })

    return response
  }

  public async getPlayerBattlelog(params: IGetPlayerParams): Promise<IPlayerBattlelogResult> {
    const response = await this.client.call<IPlayerBattlelogResult>({
      url: "https://api.brawlstars.com",
      path: `/v1/players/%23${params.tag.replace("#", "").replace("%23", "")}/battlelog`,
    })

    return response
  }
}
