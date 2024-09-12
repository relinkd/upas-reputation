import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface AchievementMetadata {
  'achievement_name' : string,
  'achievement_description' : string,
}
export type Result = { 'Ok' : boolean } |
  { 'Err' : string };
export type Result_1 = { 'Ok' : string } |
  { 'Err' : string };
export type Result_2 = { 'Ok' : number } |
  { 'Err' : string };
export type Result_3 = { 'Ok' : AchievementMetadata } |
  { 'Err' : string };
export interface _SERVICE {
  'caller' : ActorMethod<[], Principal>,
  'checkAchievementEligibility' : ActorMethod<
    [Principal, Uint8Array | number[]],
    Result
  >,
  'generateHashToIdentityWallet' : ActorMethod<
    [Principal, Uint8Array | number[]],
    Result_1
  >,
  'getAchievementMetadata' : ActorMethod<[], AchievementMetadata>,
  'getPrincipalToAchievementStatusValue' : ActorMethod<[Principal], Result_2>,
  'getPrincipalToHashValue' : ActorMethod<[Principal], Result_1>,
  'isController' : ActorMethod<[], boolean>,
  'receiveAchievementFromIdentityWallet' : ActorMethod<
    [Uint8Array | number[]],
    Result_1
  >,
  'receiveAchievementFromIdentityWalletWithHash' : ActorMethod<
    [Principal],
    Result_1
  >,
  'updateAchivementMetadata' : ActorMethod<[AchievementMetadata], Result_3>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
