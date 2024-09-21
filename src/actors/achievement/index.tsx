import { createActorContext } from "@ic-reactor/react";
import { idlFactory } from '../../declarations/achievement';

export const {
    ActorProvider: AchievementProvider,
    useActorState: useAchievementState,
    useMethod: useAchievementMethod,
    useQueryCall: useAchievementQueryCall,
    useUpdateCall: useAchievementUpdateCall,
  } = createActorContext<any>({
    idlFactory,
    withDevtools: true,
  })