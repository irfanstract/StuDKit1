











/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * 
 * "client components" can still be rendered server-side so
 * lets expect having `"use client"` wherever possible
 * 
 * */
"use client" ;






import {
  util,
} from 'typexpe-commons/src/common_sv.mjs';

import {
  random,
} from "lodash-es" ;

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore/src/util/C1.ts'; ;






import {
  React ,
  toComponentMountKey,
  ReactSetStateActionHelpers,
} from 'studk-ui-fwcore/src/util/ReactJsBased.ts'; ;


/**
 * *use a provider-associated state -
 * when the provider changes, the state will reset*.
 * 
 */
const useProvideredState = (

  function <S extends {}, SProvider extends {}, const CS = SProvider >(...a : (
    ArgsWithOptions<(
      [
        getPerProviderDefaultState: (prov: SProvider) => S ,
        expectedProvider: SProvider,
        getProviderId: (...a: NoInfer<[prov: S]>) => CS,
      ]
    ), {}>
  ) )
  {
    ;
    const [
      getPerProviderDefaultState,
      newProvdr,
      getProviderId,
    ] = a ;

    ;
    const [lastSdvb, setDrvblState] = (
      React.useState<S>((
        getPerProviderDefaultState(newProvdr)
      ))
    ) ;

    /**
     * avoid staleness (ie the two come from different providers).
     * 
     * since
     * {@link lastSdvb} (from parameter or `useState`/`useReducer`) and {@link newProvdr}
     * are technically two *independent* variables,
     * updating {@link newProvdr} means we need to manually (re)set {@link lastSdvb}.
     * see https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
     * for how to properly do that.
     * 
     */
    if ((
      getProviderId(getPerProviderDefaultState(newProvdr) )
      !== getProviderId(lastSdvb)
    ) ) {
      setDrvblState(getPerProviderDefaultState(newProvdr))
    }

    return [lastSdvb, setDrvblState] as const ;
  }

) ;

export {
  useProvideredState as useAutoresettingProvideredState ,
} ;

;





;
















