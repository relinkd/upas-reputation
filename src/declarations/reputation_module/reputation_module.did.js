export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'Ok' : IDL.Text, 'Err' : IDL.Text });
  const AchievementMetadata = IDL.Record({
    'achievement_name' : IDL.Text,
    'achievement_description' : IDL.Text,
  });
  const Result_1 = IDL.Variant({
    'Ok' : AchievementMetadata,
    'Err' : IDL.Text,
  });
  const ReputationModuleMetadata = IDL.Record({
    'issuer_name' : IDL.Text,
    'issuer_description' : IDL.Text,
    'total_issued' : IDL.Nat,
    'achievement_collection' : IDL.Principal,
  });
  const Standard = IDL.Record({ 'url' : IDL.Text, 'name' : IDL.Text });
  const Result_2 = IDL.Variant({ 'Ok' : IDL.Bool, 'Err' : IDL.Text });
  const Result_3 = IDL.Variant({ 'Ok' : IDL.Null, 'Err' : IDL.Text });
  const Result_4 = IDL.Variant({
    'Ok' : ReputationModuleMetadata,
    'Err' : IDL.Text,
  });
  return IDL.Service({
    'caller' : IDL.Func([], [IDL.Principal], ['query']),
    'changePermissionCanister' : IDL.Func(
        [IDL.Principal, IDL.Bool],
        [Result],
        [],
      ),
    'getAchievementMetadata' : IDL.Func([IDL.Principal], [Result_1], ['query']),
    'getPrincipalAchievementSumStatus' : IDL.Func(
        [IDL.Principal, IDL.Principal],
        [IDL.Bool],
        ['query'],
      ),
    'getReputationModuleMetadata' : IDL.Func(
        [],
        [ReputationModuleMetadata],
        ['query'],
      ),
    'getSupportedStandards' : IDL.Func([], [IDL.Vec(Standard)], ['query']),
    'isCanisterAllowed' : IDL.Func([IDL.Principal], [Result_2], ['query']),
    'isController' : IDL.Func([], [IDL.Bool], ['query']),
    'issueAchievementToIdentityWallet' : IDL.Func(
        [IDL.Principal],
        [Result],
        [],
      ),
    'setSupportedStandards' : IDL.Func([IDL.Vec(Standard)], [Result_3], []),
    'updateReputationModuleMetadata' : IDL.Func(
        [ReputationModuleMetadata],
        [Result_4],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
