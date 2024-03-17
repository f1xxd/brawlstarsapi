/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export type PlayerRankingList = PlayerRanking[];

export interface PlayerRanking {
  trophies?: number;
  club?: PlayerRankingClub;
  icon?: PlayerIcon;
  tag?: string;
  name?: string;
  rank?: number;
  nameColor?: string;
}

export interface PlayerIcon {
  id?: number;
}

export interface PlayerRankingClub {
  name?: string;
}

export interface ServiceVersion {
  major?: number;
  minor?: number;
  content?: number;
}

export interface Brawler {
  gadgets?: AccessoryList;
  name?: JsonLocalizedName;
  id?: number;
  starPowers?: StarPowerList;
}

export type StarPowerList = StarPower[];

export interface StarPower {
  name?: JsonLocalizedName;
  id?: number;
}

export type JsonLocalizedName = object;

export type AccessoryList = Accessory[];

export interface Accessory {
  name?: JsonLocalizedName;
  id?: number;
}

export type BattleRegionList = BattleRegion[];

export interface BattleRegion {
  id?: number;
  name?: string;
}

export type ClubRankingList = ClubRanking[];

export interface ClubRanking {
  tag?: string;
  name?: string;
  trophies?: number;
  rank?: number;
  memberCount?: number;
  badgeId?: number;
}

export interface RegisterMatchRequest {
  mode?: "regular" | "powerMatch";
  players?: RegisterMatchRequestPlayers;
  locationId?: number;
  winsRequired?: number;
  gadgetsAllowed?: boolean;
  bannedBrawlers?: BannedBrawlerList;
  timerPreset?: "default" | "longer" | "longest";
}

export type BannedBrawlerList = BannedBrawlerEntry[];

export interface BannedBrawlerEntry {
  id?: number;
  side?: number;
}

export type RegisterMatchRequestPlayers = PlayerEntry[];

export interface PlayerEntry {
  tag?: string;
  side?: number;
}

export interface RegisterMatchResponse {
  id?: string;
}

export type MatchLocationList = MatchLocation[];

export interface MatchLocation {
  id?: number;
  name?: string;
  gameMode?: string;
}

export interface SetEsportsNotificationRequest {
  type?: "hub" | "unknown";
  players?: any;
  ttl?: number;
}

export interface SetEsportsNotificationResponse {
  notification?: SetEsportsNotificationRequest;
  status?: string;
}

export type PowerPlaySeasonList = PowerPlaySeason[];

export interface PowerPlaySeason {
  id?: string;
  startTime?: string;
  endTime?: string;
}

export interface Club {
  tag?: string;
  name?: string;
  description?: string;
  trophies?: number;
  requiredTrophies?: number;
  members?: ClubMemberList;
  type?: "open" | "inviteOnly" | "closed" | "unknown";
  badgeId?: number;
}

export type ClubMemberList = ClubMember[];

export interface ClubMember {
  icon?: PlayerIcon;
  tag?: string;
  name?: string;
  trophies?: number;
  role?: "notMember" | "member" | "president" | "senior" | "vicePresident" | "unknown";
  nameColor?: string;
}

export type ScheduledEvents = ScheduledEvent[];

export interface ScheduledEvent {
  event?: ScheduledEventLocation;
  slotId?: number;
  startTime?: string;
  endTime?: string;
}

export interface ScheduledEventLocation {
  mode?:
    | "soloShowdown"
    | "duoShowdown"
    | "heist"
    | "bounty"
    | "siege"
    | "gemGrab"
    | "brawlBall"
    | "bigGame"
    | "bossFight"
    | "roboRumble"
    | "takedown"
    | "loneStar"
    | "presentPlunder"
    | "hotZone"
    | "superCityRampage"
    | "knockout"
    | "volleyBrawl"
    | "basketBrawl"
    | "holdTheTrophy"
    | "trophyThieves"
    | "duels"
    | "wipeout"
    | "payload"
    | "botDrop"
    | "hunters"
    | "lastStand"
    | "snowtelThieves"
    | "pumpkinPlunder"
    | "trophyEscape"
    | "unknown";
  modifiers?: EventModifierList;
  id?: number;
  map?: JsonLocalizedName;
}

export type EventModifierList = (
  | "unknown"
  | "none"
  | "energyDrink"
  | "angryRobo"
  | "meteorShower"
  | "graveyardShift"
  | "healingMushrooms"
  | "bossFightRockets"
  | "takedownLasers"
  | "takedownChainLightning"
  | "takedownRockets"
  | "waves"
  | "hauntedBall"
  | "superCharge"
  | "fastBrawlers"
  | "showdown+"
  | "peekABoo"
  | "burningBall"
)[];

export type EventModifier = object;

export interface Player {
  club?: PlayerClub;
  "3vs3Victories"?: number;
  isQualifiedFromChampionshipChallenge?: boolean;
  icon?: PlayerIcon;
  tag?: string;
  name?: string;
  trophies?: number;
  expLevel?: number;
  expPoints?: number;
  highestTrophies?: number;
  powerPlayPoints?: number;
  highestPowerPlayPoints?: number;
  soloVictories?: number;
  duoVictories?: number;
  bestRoboRumbleTime?: number;
  bestTimeAsBigBrawler?: number;
  brawlers?: BrawlerStatList;
  nameColor?: string;
}

export type BrawlerStatList = BrawlerStat[];

export interface BrawlerStat {
  gadgets?: AccessoryList;
  starPowers?: StarPowerList;
  id?: number;
  rank?: number;
  trophies?: number;
  highestTrophies?: number;
  power?: number;
  gears?: GearStatList;
  name?: JsonLocalizedName;
}

export type GearStatList = GearStat[];

export interface GearStat {
  name?: JsonLocalizedName;
  id?: number;
  level?: number;
}

export interface PlayerClub {
  tag?: string;
  name?: string;
}

export interface Match {
  teams?: MatchTeamList;
  terminationReason?:
    | "none"
    | "playerDisconnected"
    | "playerNotResponding"
    | "technicalError"
    | "matchTooLong"
    | "other";
  games?: CompletedGameList;
  phase?: "init" | "banHeroes" | "pickHeroes" | "finalPreparation" | "battle" | "matchResult" | "ending";
  initiativeSide?: number;
  round?: number;
  players?: PlayerMatchStatusList;
  state?: "open" | "cancelled" | "completed";
  id?: string;
}

export type PlayerMatchStatusList = PlayerMatchStatus[];

export interface PlayerMatchStatus {
  hasJoined?: boolean;
  isInBattle?: boolean;
  isOnline?: boolean;
  isReady?: boolean;
  brawler?: BrawlerInfo;
  tag?: string;
}

export interface BrawlerInfo {
  power?: number;
  trophies?: number;
  gears?: GearInfoList;
  starPower?: StarPower;
  gadget?: Accessory;
  trophyChange?: number;
  name?: JsonLocalizedName;
  id?: number;
}

export type GearInfoList = GearInfo[];

export interface GearInfo {
  name?: JsonLocalizedName;
  id?: number;
  level?: number;
}

export type CompletedGameList = CompletedGame[];

export interface CompletedGame {
  teams?: CompletedGameTeamList;
  duration?: number;
  location?: MatchLocation;
  replayId?: string;
}

export type CompletedGameTeamList = CompletedGameTeam[];

export interface CompletedGameTeam {
  score?: number;
  isWinner?: boolean;
  siege?: SiegeStats;
  players?: PlayerEntryCompletedGameList;
}

export type PlayerEntryCompletedGameList = PlayerEntryCompletedGame[];

export interface PlayerEntryCompletedGame {
  brawler?: BrawlerInfo;
  statistics?: Stats;
  tag?: string;
  accountId?: string;
}

export interface Stats {
  healingDoneToSelf?: number;
  healingDoneToTeamMates?: number;
  objectivesRecovered?: number;
  objectivesStolen?: number;
  brawlBallShotsOnGoal?: number;
  brawlBallShotsSaved?: number;
  siegeBoltsCollected?: number;
  brawlBallGoalsScored?: number;
  gemGrabGemsCollected?: number;
  gemGrabGemsLost?: number;
  bountyStarsGained?: number;
  bountyStarsLost?: number;
  superUsedCount?: number;
  gadgetUsedCount?: number;
  bountyPickedMiddleStar?: boolean;
  matchEndKillStreak?: number;
  hotZoneInsideZonePercentage?: number;
  healingDone?: number;
  deaths?: number;
  damageDealt?: number;
  kills?: number;
  averageLatency?: number;
  damageReceived?: number;
  totalDamageToSafe?: number;
  totalDamageToPets?: number;
  siegeDamageToRobot?: number;
  maxKillStreak?: number;
}

export interface SiegeStats {
  botDamageToBase?: number;
  botLevelByRound?: any;
}

export type MatchTeamList = MatchTeam[];

export interface MatchTeam {
  bans?: BrawlerInfoList;
  players?: MatchTeamPlayerList;
  side?: number;
}

export type MatchTeamPlayerList = MatchTeamPlayer[];

export interface MatchTeamPlayer {
  causedTermination?: boolean;
  tag?: string;
  isLeader?: boolean;
  brawler?: BrawlerInfo;
}

export type BrawlerInfoList = BrawlerInfo[];

export interface CancelMatchResponse {
  success?: boolean;
}

export type BattleList = Battle[];

export interface Battle {
  event?: Event;
  battleTime?: string;
  battle?: BattleResult;
}

export type BattleResult = object;

export interface Event {
  mode?:
    | "soloShowdown"
    | "duoShowdown"
    | "heist"
    | "bounty"
    | "siege"
    | "gemGrab"
    | "brawlBall"
    | "bigGame"
    | "bossFight"
    | "roboRumble"
    | "takedown"
    | "loneStar"
    | "presentPlunder"
    | "hotZone"
    | "superCityRampage"
    | "knockout"
    | "volleyBrawl"
    | "basketBrawl"
    | "holdTheTrophy"
    | "trophyThieves"
    | "duels"
    | "wipeout"
    | "payload"
    | "botDrop"
    | "hunters"
    | "lastStand"
    | "snowtelThieves"
    | "pumpkinPlunder"
    | "trophyEscape"
    | "unknown";
  id?: number;
  map?: JsonLocalizedName;
}

export type BrawlerList = Brawler[];

export interface ClientError {
  reason?: string;
  message?: string;
  type?: string;
  detail?: object;
}
