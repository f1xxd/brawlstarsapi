import { IResponse } from "./response"

export interface IEventsResponse extends IResponse {
  active: IEvent[]
  upcoming: IEvent[]
}

export interface IEvent {
  slot: IEventSlot
  predicted: boolean
  startTime: string
  endTime: string
  reward: number
  map: IEventMap
  modifier: string | unknown
}

export interface IEventSlot {
  id: number
  name: string
  emoji: string
  hash: string
  listAlone: boolean
  hideable: boolean
  hideForSlot: number
  background: string | unknown
}

export interface IEventMap {
  id: number
  new: boolean
  disabled: boolean
  name: string
  hash: string
  version: number
  link: string
  imageUrl: string
  credit: string | unknown
  environment: IEventMapEnvironment
  gameMode: IEventMapGamemode
  lastActive: number
  dataUpdated: number
  stats: IEventMapStats[]
  teamStats: unknown[]
}

export interface IEventMapEnvironment {
  id: number
  name: string
  hash: string
  path: string
  version: number
  imageUrl: string
}

export interface IEventMapGamemode {
  id: number
  name: string
  hash: string
  version: number
  color: string
  bgColor: string
  link: string
  imageUrl: string
}

export interface IEventMapStats {
  brawler: number
  winRate: number
  useRate: number
}
