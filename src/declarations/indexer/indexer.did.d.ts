import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Issuer {
  'reputation_module' : string,
  'verified' : boolean,
  'issuer_type' : string,
  'name' : string,
  'description' : string,
}
export type MetadataValue = { 'Int' : bigint } |
  { 'Nat' : bigint } |
  { 'Blob' : Uint8Array | number[] } |
  { 'Text' : string };
export type Result = { 'Ok' : Issuer } |
  { 'Err' : string };
export type Result_1 = { 'Ok' : Array<[Principal, Array<bigint>]> } |
  { 'Err' : string };
export type Result_2 = {
    'Ok' : Array<[Principal, Array<Array<[string, MetadataValue]>>]>
  } |
  { 'Err' : string };
export type Result_3 = { 'Ok' : null } |
  { 'Err' : string };
export interface _SERVICE {
  'addUnverifiedIssuer' : ActorMethod<[Principal], Result>,
  'caller' : ActorMethod<[], Principal>,
  'getIssuer' : ActorMethod<[Principal], Result>,
  'getIssuersBatch' : ActorMethod<
    [[] | [Principal], bigint],
    Array<[Principal, Issuer]>
  >,
  'getPrincipalAchievements' : ActorMethod<[Principal], Result_1>,
  'getPrincipalAchievementsMetadata' : ActorMethod<[Principal], Result_2>,
  'isController' : ActorMethod<[], boolean>,
  'verifyIssuer' : ActorMethod<
    [Principal, string, [string, string, string]],
    Result_3
  >,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
