





import {
  pagesConventions,
  dynamicComponent,
  Link,
  Image,
  MustAttachToc,
} from "@/appInternalScripts/appPagesConvention"; ;

import * as React from "react" ;

import {
  ChildrenAndOutlineAndExploring ,
  SpclCurrentlyPathDisplay ,
  AsResettibleC ,
} from "@/appInternalScripts/layoutComponents" ;

import {
  useResource,
} from "@/components/useEffectAlt";





export const metadata = {
  title: `StuDK's Audio Pipeline Demo`,
  description: `StuDK's Audio Pipeline Demo`,
}

import { IAudPage, } from "@/components/spcl/IAud";

export default function App() {
  ;
  return (
    <div>
      {/* <studk-card
      children={(
        <IAudPage />
      ) }
      /> */}
      <IAudPage />
    </div>
  ) ;
} ;












