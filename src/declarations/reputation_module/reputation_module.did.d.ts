import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface AchievementMetadata {
  'achievement_name' : string,
  'achievement_description' : string,
}
export interface ReputationModuleMetadata {
  'issuer_name' : string,
  'issuer_description' : string,
  'total_issued' : bigint,
  'achievement_collection' : Principal,
}
export type Result = { 'Ok' : string } |
  { 'Err' : string };
export type Result_1 = { 'Ok' : AchievementMetadata } |
  { 'Err' : string };
export type Result_2 = { 'Ok' : boolean } |
  { 'Err' : string };
export type Result_3 = { 'Ok' : null } |
  { 'Err' : string };
export type Result_4 = { 'Ok' : ReputationModuleMetadata } |
  { 'Err' : string };
export interface Standard { 'url' : string, 'name' : string }
export interface _SERVICE {
  'caller' : ActorMethod<[], Principal>,
  'changePermissionCanister' : ActorMethod<[Principal, boolean], Result>,
  'getAchievementMetadata' : ActorMethod<[Principal], Result_1>,
  'getPrincipalAchievementSumStatus' : ActorMethod<
    [Principal, Principal],
    boolean
  >,
  'getReputationModuleMetadata' : ActorMethod<[], ReputationModuleMetadata>,
  'getSupportedStandards' : ActorMethod<[], Array<Standard>>,
  'isCanisterAllowed' : ActorMethod<[Principal], Result_2>,
  'isController' : ActorMethod<[], boolean>,
  'issueAchievementToIdentityWallet' : ActorMethod<[Principal], Result>,
  'setSupportedStandards' : ActorMethod<[Array<Standard>], Result_3>,
  'updateReputationModuleMetadata' : ActorMethod<
    [ReputationModuleMetadata],
    Result_4
  >,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
