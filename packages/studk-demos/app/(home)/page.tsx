
import * as React from "react" ;






/* import needs to be pre/repeated preceding the imports of component defs, as work-around to the naive approach the platform takes to bundle CSS */
// console["log"](new Error("l") ) ;
import "@/public/global1.scss" ;
import "@/appInternalScripts/env" ;








export const metadata = {
  title: 'StuDK',
  description: 'StuDK.',
}

function renderPictureCard(...[{ titleElem, contents, }] : [{ titleElem: React.ReactElement | string, contents: React.ReactElement | null, }])
{
  ;

  return (
    <studk-card style={{ }} >
      { titleElem }
      { contents }
    </studk-card>
  ) ;
}

// import type { JSX as JSX0 , } from "react"; ;
// import type { JSX, } from "react/jsx-runtime"; ;

import {
  pagesConventions,
  dynamicComponent,
  Image ,
  Link ,
} from "@/appInternalScripts/appPagesConvention"; ;

export default function App()
{
  ;

  return (
    pagesConventions.describeArticlePage({
      heading: (
        <span>
          This is StuDK
        </span>
      ) ,
      children: (
        <div>
          <p>
            This is
            a demo app
            developed to demonstrate what can be done with StuDK.
            The packages we're developing here in this monorepo
            are tried out in these demos.
          </p>
          <ul>
          <li>
            <Link href="/reference/demos" >
              { renderPictureCard({
                titleElem: (
                  <p>
                    Demo Applets Using StuDK
                  </p>
                ) ,
                contents: (
                  <Image
                  alt="Demo Applets Using StuDK"
                  src={iI3DDemoAppScreenshot }
                  width={250}
                  height={250}
                  priority={false}
                  />
                ) ,
              }) }
            </Link>
          </li>
          <li>
            <Link href="/reference" >
              StuDK Reference Directory
            </Link>
          </li>
          </ul>
          <p>
            <q>
            This is StuDK
            </q>
            , we said it.
          </p>
        </div>
      ) ,
    })
  ) ;
} ;

import iIAudAppScreenshotUrl from "@/components/spcl/IAudAppScreenshot.png" ;

import iI3DDemoAppScreenshot from "@/components/spcl/I3DDemoAppScreenshot.png" ;




;




import JsxLivingroomCornerBallFigure from "@/components/jsxLivingroomCornerBallFigure" ;








