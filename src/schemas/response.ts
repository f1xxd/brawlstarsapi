// https://brawlapi.com/#/Errors?id=what-status-codes-can-the-api-return
export enum ResponseCode {
  OK = 200,
  Forbidden = 403,
}

// biome-ignore lint/complexity/noBannedTypes: <explanation>
export interface IResponse {}
