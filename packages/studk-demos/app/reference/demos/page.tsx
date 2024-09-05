
import * as React from "react" ;






/* import needs to be pre/repeated preceding the imports of component defs, as work-around to the naive approach the platform takes to bundle CSS */
// console["log"](new Error("l") ) ;
import "@/public/global.css" ;
import "@/appInternalScripts/env" ;








export const metadata = {
  title: 'Demos Of StuDK',
  description: 'Demo Applets Building On StuDK.',
};

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
  Link,
  Image,
} from "@/appInternalScripts/appPagesConvention"; ;

export default function App()
{
  ;

  return (
    pagesConventions.describeArticlePage({
      heading: (
        <span>
          Demos Of StuDK
        </span>
      ) ,
      children: (
        <div>
          <p>
            The packages we're developing here in this monorepo
            are tried out in these demos.
            The packages we're developing here in this monorepo
            are brought into usage in these demos.
            The packages we're developing here in this monorepo
            are tried out in these demos.
          </p>
          <ul>
          <li>
            <Link href="/reference/demos/iaud" >
              { renderPictureCard({
                titleElem: (
                  <p>
                    The StuDK Audio Pipeline Demo App
                  </p>
                ) ,
                contents: (
                  <Image
                  alt="The StuDK Audio Pipeline Demo App"
                  src={iIAudAppScreenshotUrl }
                  width={250}
                  height={250}
                  priority={false}
                  />
                ) ,
              }) }
            </Link>
          </li>
          <li>
            <Link href="/reference/demos/i3d" >
              { renderPictureCard({
                titleElem: (
                  <p>
                    I3D (unfinished)
                  </p>
                ) ,
                contents: (
                  <Image
                  alt={`The I3D Demo App`}
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
            <Link href="/reference/demos/iui" >
              { renderPictureCard({
                titleElem: (
                  <p>
                    StuDK UI Components (unfinished)
                  </p>
                ) ,
                contents: (
                  <Image
                  alt={`The StuDK UI Components Demo App`}
                  src={iStUiDemoAppScreenshot }
                  width={250}
                  height={250}
                  priority={false}
                  />
                ) ,
              }) }
            </Link>
          </li>
          </ul>
          <p>
            This is
            a demo app
            developed to demonstrate various applets building on StuDK.
            The packages carried by this monorepo
            are put into usage in these demos.
            This is
            a demo app
            developed to demonstrate various applets building on StuDK.
            The packages carried by this monorepo
            are put into usage in these demos.
          </p>
          <p>
            <q>
            This is StuDK!
            </q>
          </p>
        </div>
      ) ,
    })
  ) ;
} ;

import iIAudAppScreenshotUrl from "@/components/spcl/IAudAppScreenshot.png" ;

import iI3DDemoAppScreenshot from "@/components/spcl/I3DDemoAppScreenshot.png" ;

import iStUiDemoAppScreenshot from "@/components/spcl/StUiDemoScreenshot.png" ;




;




import JsxLivingroomCornerBallFigure from "@/components/jsxLivingroomCornerBallFigure" ;








