import type { BrawlStarsApi } from "../client"
import type { PlayerRankingList, ClubRankingList, PowerPlaySeasonList } from "../schemas"

export interface IGetPlayersRankingListParams {
  countryCode: string
  before?: string
  after?: string
  limit?: number
}

export interface IGetClubsRankingListParams {
  countryCode: string
  before?: string
  after?: string
  limit?: number
}

export interface IGetBrawlersRankingListParams {
  countryCode: string
  brawlerId: number
  before?: string
  after?: string
  limit?: number
}

export interface IGetPowerPlaySeasonsListParams {
  countryCode: string
  before?: string
  after?: string
  limit?: number
}

export interface IGetPowerPlayRankingListParams {
  countryCode: string
  seasonId: number
  before?: string
  after?: string
  limit?: number
}

export interface IPlayersRankingListResult extends PlayerRankingList {}
export interface IClubsRankingListResult extends ClubRankingList {}
export interface IBrawlersRankingListResult extends PlayerRankingList {}
export interface IPowerPlaySeasonsListResult extends PowerPlaySeasonList {}
export interface IPowerPlayRankingListResult extends PlayerRankingList {}

export class Rankings {
  public constructor(private readonly client: BrawlStarsApi) {}

  public async getPlayersRankingList(params: IGetPlayersRankingListParams): Promise<IPlayersRankingListResult> {
    const response = await this.client.call<IPlayersRankingListResult>({
      url: "https://api.brawlstars.com",
      path: `/v1/rankings/${params.countryCode}/players`,
    })

    return response
  }

  public async getClubsRankingList(params: IGetClubsRankingListParams): Promise<IClubsRankingListResult> {
    const response = await this.client.call<IClubsRankingListResult>({
      url: "https://api.brawlstars.com",
      path: `/v1/rankings/${params.countryCode}/clubs`,
    })

    return response
  }

  public async getBrawlersRankingList(params: IGetBrawlersRankingListParams): Promise<IBrawlersRankingListResult> {
    const response = await this.client.call<IBrawlersRankingListResult>({
      url: "https://api.brawlstars.com",
      path: `/v1/rankings/${params.countryCode}/brawlers/${params.brawlerId}`,
    })

    return response
  }

  public async getPowerPlaySeasonsList(params: IGetPowerPlaySeasonsListParams): Promise<IPowerPlaySeasonsListResult> {
    const response = await this.client.call<IPowerPlaySeasonsListResult>({
      url: "https://api.brawlstars.com",
      path: `/v1/rankings/${params.countryCode}/powerplay/seasons`,
    })

    return response
  }
  
  public async getPowerPlayRankingList(params: IGetPowerPlayRankingListParams): Promise<IPowerPlayRankingListResult> {
    const response = await this.client.call<IPowerPlayRankingListResult>({
      url: "https://api.brawlstars.com",
      path: `/v1/rankings/${params.countryCode}/powerplay/seasons/${params.seasonId}`,
    })

    return response
  }
}
