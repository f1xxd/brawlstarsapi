import { IResponse } from "./response"

export interface IBrawlerResponse extends IResponse, IBrawler {}

export interface IBrawlersResponse extends IResponse {
  list: IBrawler[]
}

export interface IBrawler {
  id: number
  avatarId: number
  name: string
  hash: string
  path: string
  fankit: string
  released: boolean
  version: number
  link: string
  imageUrl?: string
  imageUrl2?: string
  imageUrl3?: string
  class: IBrawlerClass
  rarity: IBrawlerRarity
  unlock?: string
  description: string
  descriptionHtml: string
  starPowers: IBrawlerStarPower[]
  gadget: IBrawlerGadget[]
  videos: unknown[]
}

export interface IBrawlerClass {
  id: number
  name: string
}

export interface IBrawlerRarity {
  id: number
  name: string
  color: string
}

export interface IBrawlerStarPower {
  id: number
  name: string
  path: string
  version: number
  description: string
  descriptionHtml: string
  imageUrl: string
  released: boolean
}

export interface IBrawlerGadget {
  id: number
  name: string
  path: string
  version: number
  description: string
  descriptionHtml: string
  imageUrl: string
  released: boolean
}
