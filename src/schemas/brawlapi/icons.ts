import type { IResponse } from "./response"

export interface IIconsResponse extends IResponse {
  player: Record<string, IIconsPlayer>
  club: Record<string, IIconsClub>
}

export interface IIconsPlayer {
  id: number
  name: string
  name2: string
  imageUrl: string
  imageUrl2: string
  brawler: number | null
  requiredTotalTrophies: number
  sortOrder: number
  isReward: boolean
  isAvailableForOffers: boolean
}

export interface IIconsClub {
  id: number
  imageUrl: string
}
