import { IResponse } from "./response"

export interface IMapResponse extends IResponse, IMap {}

export interface IMapsResponse extends IResponse {
  list: IMap[]
}

export interface IMap {
  id: number
  new: boolean
  disabled: boolean
  name: string
  hash: string
  version: number
  link: string
  imageUrl: string
  credit: string | null
  environment: IMapEnvironment
  gameMode: IMapGamemode
  lastActive: number
  dataUpdated: number
}

export interface IMapEnvironment {
  id: number
  name: string
  hash: string
  path: string
  version: number
  imageUrl: string
}

export interface IMapGamemode {
  id: number
  name: string
  hash: string
  version: number
  color: string
  bgColor: string
  link: string
  imageUrl: string
}
