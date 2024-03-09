import { IResponse } from "./response"

export interface IGamemodeResponse extends IResponse, IGamemode {}

export interface IGamemodesResponse extends IResponse {
  list: IGamemode[]
}

export interface IGamemode {
  id: number
  scId: number
  name: string
  hash: string
  scHash: string
  disabled: boolean
  color: string
  bgColor: string
  version: number
  title: string
  tutorial: string
  description: string
  shortDescription: string
  sort1: number
  sort2: number
  link: string
  imageUrl: string
  imageUrl2: string
  lastActive: number
}
