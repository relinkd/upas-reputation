import { createActorContext } from "@ic-reactor/react";
import { idlFactory as moduleIdlFactory } from '../../declarations/reputation_module';

export const {
    ActorProvider: ReputationProvider,
    useActorState: useReputationState,
    useMethod: useReputationMethod,
    useQueryCall: useReputationQueryCall,
    useUpdateCall: useReputationUpdateCall,
  } = createActorContext<any>({
    idlFactory: moduleIdlFactory,
    withDevtools: true,
})