export const idlFactory = ({ IDL }) => {
  const Issuer = IDL.Record({
    'reputation_module' : IDL.Text,
    'verified' : IDL.Bool,
    'issuer_type' : IDL.Text,
    'name' : IDL.Text,
    'description' : IDL.Text,
  });
  const Result = IDL.Variant({ 'Ok' : Issuer, 'Err' : IDL.Text });
  const Result_1 = IDL.Variant({
    'Ok' : IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Vec(IDL.Nat))),
    'Err' : IDL.Text,
  });
  const MetadataValue = IDL.Variant({
    'Int' : IDL.Int,
    'Nat' : IDL.Nat,
    'Blob' : IDL.Vec(IDL.Nat8),
    'Text' : IDL.Text,
  });
  const Result_2 = IDL.Variant({
    'Ok' : IDL.Vec(
      IDL.Tuple(
        IDL.Principal,
        IDL.Vec(IDL.Vec(IDL.Tuple(IDL.Text, MetadataValue))),
      )
    ),
    'Err' : IDL.Text,
  });
  const Result_3 = IDL.Variant({ 'Ok' : IDL.Null, 'Err' : IDL.Text });
  return IDL.Service({
    'addUnverifiedIssuer' : IDL.Func([IDL.Principal], [Result], []),
    'caller' : IDL.Func([], [IDL.Principal], ['query']),
    'getIssuer' : IDL.Func([IDL.Principal], [Result], ['query']),
    'getIssuersBatch' : IDL.Func(
        [IDL.Opt(IDL.Principal), IDL.Nat64],
        [IDL.Vec(IDL.Tuple(IDL.Principal, Issuer))],
        ['query'],
      ),
    'getPrincipalAchievements' : IDL.Func([IDL.Principal], [Result_1], []),
    'getPrincipalAchievementsMetadata' : IDL.Func(
        [IDL.Principal],
        [Result_2],
        [],
      ),
    'isController' : IDL.Func([], [IDL.Bool], ['query']),
    'verifyIssuer' : IDL.Func(
        [IDL.Principal, IDL.Text, IDL.Tuple(IDL.Text, IDL.Text, IDL.Text)],
        [Result_3],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
