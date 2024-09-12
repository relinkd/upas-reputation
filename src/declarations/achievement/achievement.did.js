export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'Ok' : IDL.Bool, 'Err' : IDL.Text });
  const Result_1 = IDL.Variant({ 'Ok' : IDL.Text, 'Err' : IDL.Text });
  const AchievementMetadata = IDL.Record({
    'achievement_name' : IDL.Text,
    'achievement_description' : IDL.Text,
  });
  const Result_2 = IDL.Variant({ 'Ok' : IDL.Nat8, 'Err' : IDL.Text });
  const Result_3 = IDL.Variant({
    'Ok' : AchievementMetadata,
    'Err' : IDL.Text,
  });
  return IDL.Service({
    'caller' : IDL.Func([], [IDL.Principal], ['query']),
    'checkAchievementEligibility' : IDL.Func(
        [IDL.Principal, IDL.Vec(IDL.Nat8)],
        [Result],
        [],
      ),
    'generateHashToIdentityWallet' : IDL.Func(
        [IDL.Principal, IDL.Vec(IDL.Nat8)],
        [Result_1],
        [],
      ),
    'getAchievementMetadata' : IDL.Func([], [AchievementMetadata], ['query']),
    'getPrincipalToAchievementStatusValue' : IDL.Func(
        [IDL.Principal],
        [Result_2],
        ['query'],
      ),
    'getPrincipalToHashValue' : IDL.Func(
        [IDL.Principal],
        [Result_1],
        ['query'],
      ),
    'isController' : IDL.Func([], [IDL.Bool], ['query']),
    'receiveAchievementFromIdentityWallet' : IDL.Func(
        [IDL.Vec(IDL.Nat8)],
        [Result_1],
        [],
      ),
    'receiveAchievementFromIdentityWalletWithHash' : IDL.Func(
        [IDL.Principal],
        [Result_1],
        [],
      ),
    'updateAchivementMetadata' : IDL.Func(
        [AchievementMetadata],
        [Result_3],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
