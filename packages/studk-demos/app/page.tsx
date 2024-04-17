
import * as React from "react" ;







export const metadata = {
  title: 'StuDK',
  description: 'StuDK. (App Generated by Next.js)',
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
          <p>
            This is
            a demo app
            developed to demonstrate what can be done with StuDK.
            The packages we're developing here in this monorepo
            are tried out in these demos.
            This is
            a demo app
            developed to showcase various applets building on StuDK.
            The packages we're developing here in this monorepo
            are brought into usage in these demos.
          </p>
          <p>
            This is
            a demo app
            developed to demonstrate what can be done with StuDK.
            The packages we're developing here in this monorepo
            are tried out in these demos.
            This is
            a demo app
            developed to showcase various applets building on StuDK.
            The packages we're developing here in this monorepo
            are brought into usage in these demos.
          </p>
          <ul>
          <li>
            <Link href="/iaud" >
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
            <Link href="/i3d" >
              { renderPictureCard({
                titleElem: (
                  <p>
                    I3D (unfinished)
                  </p>
                ) ,
                contents: (
                  <Image
                  alt="The I3D Demo App"
                  src={iI3DDemoAppScreenshot }
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




import dynamicComponent from "next/dynamic";

import Link from "next/link";

import Image from "next/image";




import JsxLivingroomCornerBallFigure from "@/components/jsxLivingroomCornerBallFigure" ;








