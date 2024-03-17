import type { BrawlStarsApi } from "../client"
import type { Club, ClubMemberList } from "../schemas"

export interface IGetClubParams {
  tag: string
}

export interface IClubResult extends Club {}
export interface IClubMembersResult {
  items: ClubMemberList
  paging: Record<string, unknown>
}

export class Clubs {
  public constructor(private readonly client: BrawlStarsApi) {}

  public async getClub(params: IGetClubParams): Promise<IClubResult> {
    const response = await this.client.call<IClubResult>({
      url: "https://api.brawlstars.com",
      path: `/v1/clubs/%23${params.tag.replace("#", "").replace("%23", "")}`,
    })

    return response
  }

  public async getClubMembers(params: IGetClubParams): Promise<IClubMembersResult> {
    const response = await this.client.call<IClubMembersResult>({
      url: "https://api.brawlstars.com",
      path: `/v1/clubs/%23${params.tag.replace("#", "").replace("%23", "")}/members`,
    })

    return response
  }
}
