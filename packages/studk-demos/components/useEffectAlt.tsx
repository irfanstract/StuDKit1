/* a strange directive */
"use client" ;





import * as React from "react" ;

export function closeResource<T extends { close(): void ; }>(x: T) {
  x.close() ;
}

export function useResource<T extends Parameters<typeof closeResource>[0] & {}>(realloc: () => T, dp: React.DependencyList ) {
  const [exposedRes , setExposedRes] = (React.useState<T >()) ;

  React.useEffect(() => {
    const res = realloc() ;
    setExposedRes(() => res) ;
    return () => {
      closeResource(res) ;
    } ;
  }, dp ) ;

  return exposedRes ;
}






