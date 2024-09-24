









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
} from 'typexpe-commons/src/common_sv.mjs'

import type {
  AllOrNever1,
  ArgsGetOptions ,
  ArgsWithOptions, 
  Extend,
} from 'studk-fwcore/src/util/C1.ts'



;



import { TS, } from "studk-fwcore/src/scripting/TsLib.ts" ;

import {
  parseTsSourceFileContent,
} from "studk-ts-codeanalysis/src/core/TsSourceCodeParsingFrontend.ts" ;

;



;







;

import {
  React ,
  getSpaceSeparatedClassNameList, 
  StudkReactJs,
  describeCallbackAssignedStyleProps,
} from 'studk-ui-fwcore/src/util/ReactJsBased.ts'; ;

import {
  useClientSideOnly ,
  useClientSideOnlyCompute ,
} from "studk-ui-encore/src/ClientSideEditorStateMgmt/ClientSideOnlyComputeInReact.tsx" ;

import {
  useClientSideInitOnlyState ,
  useCsioe ,
  useRevCsioe ,
} from "studk-ui-encore/src/ClientSideEditorStateMgmt/Csioe" ;

import {
  CFaBku ,
} from "studk-ui-fwcore/src/reactjs/helpers/CFa" ;




import {
  pagesConventions,
  dynamicComponent,
  AppLink,
  Image,
  describeHtmlComponent,
  describeHeadlinedWidget,
  Button,
} from "@/appInternalScripts/appPagesConvention"; ;

import {
  ReactJsBasedCustomIntrinsicElement ,
  generateCustomIntrinsicElementName ,
} from "studk-ui-fwcore/src/reactjs/helpers/AsCustomIntrinsicElement" ;

import {
  AccrdListC ,
} from "studk-ui-encore/src/PaginatedUi/Accrd1" ;

const ELCC = (
  // 1 ?
  (function () {
    Object ;

    return (
      (ReactJsBasedCustomIntrinsicElement.definePrivatelyWithRenderFnAndProgrammaticItcBaseClassAlt )("elementdef3422118914-main" , (props: {
        //
        "controlX": string ,
        "controlY": string ,
        "mdlY"    : string ,
      } ) => {
        return (
          <p>
            <code>TCE_C</code> {}
            rendered with {}
            <code>{ JSON.stringify(props) }</code>
          </p>
        ) ;
      } , globalThis.HTMLSpanElement, {
        mdlSpacePropKeyNames: [
          "controlX" ,
          "controlY" ,
          "mdlY" ,
        ] as const ,
        sdr: "open" ,
      } )
    ) ;
  } )()
  // : null
) ;

import {
  TceC, 
  TceCompIRefValue,
} from "studk-ui-encore/src/RichTextComponents/TCE1" ;

// export const EvTceC = (

//   StudkReactJs.describeHtmlComponent((
//     function EvTceCImpl()
//     {
const TceAdvC = (

  StudkReactJs.describeHtmlComponent((
    function TceAdvCImpl({ ...etcProps } : React.ComponentProps<typeof TceC> )
    {
      ;

      const edh = (
        React.useRef<TceCompIRefValue | null >(null)
      ) ;

      return (
        <div
        style={(
          describeCallbackAssignedStyleProps(function (s) {
            s.margin = `0.9ex` ;
          })
        )}
        >
        <nav>
          <Button
          children={ <strong><code>{ `<b>` }</code></strong> }
          onClick={e => {}}
          />
          <Button
          children={ <strong><code>{ `<strong>` }</code></strong> }
          onClick={e => {}}
          />
          <Button
          children={ <em><code>{ `<em>` }</code></em> }
          onClick={e => {}}
          />
          <Button
          children={ <em><code>{ `<i>` }</code></em> }
          onClick={e => {}}
          />
          <Button
          children={ <em><code>{ `<u>` }</code></em> }
          onClick={e => {}}
          />
          <Button
          children={ <strong><code>{ `<del>` }</code></strong> }
          onClick={e => {}}
          />
          <ELCC
          controlX={5 }
          controlY={"1" }
          />
        </nav>
        <div
        style={(
          describeCallbackAssignedStyleProps(function (s) {
            s.maxBlockSize = `30ex` ;
            s.overflowBlock = "auto" ;
            s.overflowInline = "hidden" ;
            s.overflow = "auto" ;
            s.contain = `layout` ;
            s.border = `0.1ex solid currentcolor` ;
          })
        )}
        >
        <TceC
        //
        xRef={edh}
        // valueAsHtml={etcProps.valueAsHtml }
        style={{
          contain: `layout`,
          // border: `0.1ex solid currentcolor` ,
          paddingInline: `0.5ex` ,
          paddingBlock: `0.8ex` ,
          background: `canvas` ,
        }}
        {...etcProps }
        />
        </div>
        </div>
      ) ;
    }
  ))
) ;

export const EvTceC = (

  StudkReactJs.describeHtmlComponent((
    function EvTceCImpl()
    {

      const [cInHtml, setCInHtml] = (
        React.useState<string>(() => (
          `
          <section>

          <p lang="en">
            The value
            is equivalent to <code>2Π/360</code> nominally
            .
          </p>
          <p lang="en">
            The value
            is equivalent to
            <span>(sin<sup>d:n</sup>[0]&nbsp;<span>(2Π/360)<sup>n</sup></span>&nbsp;(n!)<sup>−1</sup>&nbsp;) * x<sup>n</sup></span>
            .
          </p>

          <p lang="en">
            Let's say:
          </p>
          <blockquote >
          <p lang="en">
            The value
            <em>is (de)nominally equivalent</em> in this sense
            .
          </p>
          <p lang="ru">
            Пeннск.
          </p>
          </blockquote>

          .
          <p lang="en">
            If you want a Math img:
          </p>

          <blockquote >
          <p lang="en">
            Here's a Summation Sign:
          </p>
          <figure>
            <img src="${summationSignImgUrl }" alt="">
            <figcaption>
              a summation sign
            </figcaption>
          </figure>
          </blockquote>

          <p lang="en">
            That's it
          </p>

          </section>
          `
        ))
      ) ;

      return (
        <div >
          { (
            [true, true]
            .map((_, i) => StudkReactJs.withExtraSemanticProperties({
              key: i ,
            } , (
              <div
              style={(
                describeCallbackAssignedStyleProps(function (s) {
                })
              )}
              >
              <div
              style={(
                describeCallbackAssignedStyleProps(function (s) {
                  // s.maxBlockSize = `30ex` ;
                  // s.overflowBlock = "auto" ;
                  // s.overflowInline = "hidden" ;
                  // s.overflow = "auto" ;
                  // s.contain = `layout` ;
                })
              )}
              >
              <TceAdvC
              valueAsHtml={cInHtml }
              editable
              onChange={({ newValueInHtml, existingValueInHtml: eV0, }) => (
                // true ||
                setCInHtml(aV0 => (eV0 === aV0 ? newValueInHtml : aV0 ) )
              ) }
              style={{
                contain: `layout`,
                border: `0.1ex solid currentcolor` ,
                paddingInline: `0.5ex` ,
                paddingBlock: `0.8ex` ,
                background: `canvas` ,
              }}
              />
              </div>
              </div>
            )) )
          ) }
          <pre>
            { cInHtml }
          </pre>
        </div>
      ) ;
    }
  ))
) ;

const summationSignImgUrl = (
  `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE0AAACXCAYAAABQrNb5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABWRSURBVHhe7d1njCNFtwbgIuecc84555xhySBEZgUCAQtICJCAP1cCJCQQoP0DAkSWWJagXXIOS8455wxLzhlfP/XtmdufNTNue22PZ69fqWSP7e46/dZJdaq6Z6pKFamHhjD1pNceGkCPtCbQI60J9EhrAj3SmkCPtCbQI60J9EhrAj3SmkCPtCbQI60J9EhrAj3SmkCPtCbQI60J9EhrAj3SmkCPtCYwJOXuv/76K/3555/p77//zn9PO+20acYZZ0xTTz11mmqqqfJnA8Fxjtf8drrppus7tlMYEtI+/fTT9Nlnn6Uvv/wyEzbPPPOk5ZdfPs0yyyz574FAVMc53rEIm2+++dJKK63UUeI6Rtrvv/+ePv744/Too4+md999N33++efpp59+yiQha/75509LLrlkWmGFFdLaa6+dZppppj4Sfvjhh/T+++/nYz/88MM0ceLE9OOPP6ZpppkmzTbbbGmhhRZKG264YVpjjTXSIosskj9vJzpCmi4Q9eCDD6aLL744E+CikRIXyFRXWWWVtOWWW6Z99903LbPMMmn22WfPZL/22mvpgQceSJdddlnWMCaK1DjOb/bZZ5/ctt122zTrrLMOqrGTi2n+p4pJ79uCf//9N1/YFVdcka688sr0xhtvpF9//TV/Fz7MbxBB82jjc889l+add96sgc8++2w+7oYbbsja6fe0ct11102LL754mnnmmbPmOe67775LK664Yta+ILUdaLumMa233347nXfeeenuu+/OvmeDDTbIF+fCvvjii/Tmm2+mxx9/PP3xxx9ZQxCx2WabZVIQ9fzzz6evvvoqm55jV1999bTYYotlAn3u+4ceeigHB1qqrbPOOpMkaAOQ1k5UTbFSJayy/vrrV6oaUtl1110r48aNq1TNs/LPP/9UXnnllcro0aMrVT9WmWuuuSpV7atUTbZSdfK5eV8lt1J19pXjjjuuMmHChEqV3EpVO/P5neeFF16o7LfffpU555yzsvLKK1fGjBmTz90utD3cfPvtt9mXffLJJ1k7jjzyyKwFtIl5Lr300mnnnXdOJ598clpvvfWypjFXrSpfbgsvvHDWvKOPPjqtueaaOWpGauI8yy23XFpiiSWy5goUtI+fc2w70HbSfvnll2x+33//fXbQVU3IaUIEABfK7DbZZJO09dZbZ0J9hhQXjViErLbaatlc+asgDJwHcYsuumhufCOXINAMW9JcxNdff51+++23rCFVE0wzzDDDpG//A36OFtKmzTffPJMWWoYgAQExAkrV7CYd9d+Ye+65c4BAor4MFm1tB9pOGk1BkotBQphdf5BmCBBhnhqinnjiiXT77benDz74oC/y1gJJoq9j9KUVNbKVaDtpTFL+RRMiwf35558nffsfuFCR88UXX0xPPfVUfh/EeuUXq84+XX755TlSIi6+p3nOx5fJ//ytz2pQGL6kEX6jjTbKWbs86rHHHksfffRRHzFev/nmm5y/3Xbbbemuu+7KqUOYG5NGqmOuueaadM8996TXX38952aOM6V6+eWX06uvvprTF/3xmXPMMUfW8nag7clt+KRqapG1RXZvrslp0wgXLbqef/75eZrkwqGamqRqmpJzPH4xTBV5AgutpVkGwSzDuZ1vhx12yAHFlKxdaHtyS5NEThd20003ZY2SoIqGtIL2vffee9kskbPAAgukTTfdNO20005Z2+6999503333ZbKRRnsEE76PrxQpfSdVMfc89thjc+oisLQLHZuw0ybOfPz48TmP4peQQBOZoOi44IILZkJHjhyZSfGZGQFfxmz5NiRz+hDH0jBBZJtttkknnHBCHox2mSZ0jDSRjbMWCRHwzDPPZBKmn3767O8krdttt102ScmstMOF82/KQUzyySefzCbMpzkfwuRuW2yxRU5V1lprrZzztXOyDh0jDWgXzWFOCKQxLlA1gznRLheNjCJoZJSHmLJz8GnSCiasFkfTIk9rNzpK2pSCtqccUyJ6pDWBHmlNoEdaEygVCGJuJ/pJQB0iQ4dG4kg3xRyJsZmJel6jKUpd0nytunDzzTf3lXhMipHmuyCvDLqJNHU5K1977bVXft9IMlyXNDnShAkT0qhRo/oKe7WtLBr5bbtBuyTSZ555Zp6nmlWURV3SaNL999+fDjvssDz9QSIMRBhhjFqryjLRT20D/RT78jn54vvB4DhVZHNVE3wJclmUMk+T6dNOOy1XKhA30CEEMe+TpZtUt4I4fWkGT+Ma4rMiYchSHDDL4EK8538hfl+EYxUHNt5443TUUUfl9dKy8pYKBBZozRkvuuiiXHEwH6wFIcwjTbhNnJV2asvak4sQFXlkMJUSnAQqg0lO81QL0/ywslMQHQGsCPIZXCZ60EEHZfnLEFeKNKNmcm2Fe9y4cbng5zMCBXTGNM0BqfsxxxzTtxDSahAZEYgjh2YCr5mjIlDQUpJSn0PgSy+9lK8hqitgnooolRGkMdHaeW9/KFWERIaLJywBjaSRi84DSCS070yehXSm2gozLcL5aLYLtCjDietHtYRTV15XU7PCZRBpE9n83jXE8l6ch0tR6VUwaBlpASQ4qVFjEtF5Ef7mV5RyllpqqSy0Y1pNXBnoE6GIVHLn+JGjUkJLaauBJy/yt9pqq/xaDw2RxgfE6PIfSjRFEw0QBKlqYgqJhG40gWwV9EsO2qQZeAEAaQqaQR4y7VZSmq/nixteI0DCsssum2v1ZgnIqdU2QGYsqSkwInqoiAuQnQkri9Muvg9xBtl31i24FaY+GBomjQ8wEhyo96qo/UUmf0fI5w8JUk+YToDJshYEkceCjMHlq7kbCmFqNRgaJi2cp5HxnsaJSHKjWuIi1BtNI6yMjfCh8G+BkJ8Z0n6WYClQqiKI2ZEUUXQgORsmLcDB0jaERYivjaZI9D1i+RHEUX9CDyVxQAa+Tpmdm5ERII0rMScdbD7aNGmgU9FRNLI+2Z+2+TtGkwlIfo3wQAJ1Enys9QnmacD9zTwNrkEeaL1hskjTCY3TITO08OF9LXEQfs8IilRyp6EGbY9sgI9bddVVs6bRvkGXAasXMtmYOHFiZezYsZWqP6hUR65SFQZr/9WqBFeqPq0yYsSIyvjx4yvV6NW3MW+4YbI0LRD5G81jhvZZMMkiqn1lbTOV4de04j614YSWkEaNBQUhXMKrCQCIKgKR/JqEkmmYtjhuuBHXMm/Mocqo7efnG2KFvAgkIsyObavsMYkebmiJphVhKztzVUqK0nh/oHFSEZUQEXioU5BG0HLSaBj/hiylGT6u1kxBlFU+R7JIyr91QxpSBi0njX9CHA1SBKRNtKoW4d+AXwv/NhyIazlpIIrKc0zmNYGBLytqnPeIo420LrJw07NuR1tIoy1MlG9Djo18JsOIK8J30hANudIQ81PHd7OPa6st0B7b3EXVgXwW3+fGjOuvvz7f6mPiXJvjdRvaomkB2hLzU3V6k+KBomlonVf1Lv6tW9FW0qDWv6n4Ig45RfhbYEC0uV/ccNGNaDtpTJJvo3EIUbTk3zj/IpDmc4TSMlUGrRujadtJC4iM0hEpiPyM1vU3PzX9YsbWFVRQg+xuQsdIE01pEPI4e86/NpoCTVO/j9+rb3nfTcR1VPdF0F122SUXIvkt/q6WDNrHdO3ivvPOO7NWDhQ8hgodJS38m/s7999//zzJ789nIc66ghkFraR53YSOkkarkCQFsfHE4qzpFo0L+A1z9Bt3tSg3dVv6MSShSbnbszR22223TI4AgSyNJprAI9VGmrgRo5swJKQBDbJRxq09kdTSOCvg7i7ecccd810otK7bMCSkIUjJyGZBfovJ0jYapoDJ35l6Dbq4MYQYEolUNlRtr7766vTWW29lbbIi5AZ+2sVsbZ7pVgwJaY888ki68cYb8z1SomRo2e67754OOOCAPIWqTUW6CR0lzQq2rajMUkWDiUovPA3h0EMPzXfTdeIuuslFx0gzr7T875ZrmhYbA9XQLMaMHDkypxjd6Phr0THSlIZsrVc3s+FP1i//4r8QZiuAdGM4oO2kKfcod7ut2g0ctM0qlfxrzz33zLuq7VDslv0dZdBWKc0Z+S1+zK3YNI2ZSiVsaTrkkEPyDRBytuFCGLRVUrtxPEfjnHPOSU8//XSfScr2aZnHeVnCG25oC2kiIrP0oDg+TGqBQGmFXTmmR56IQOOGg+OvRctJk+0rMNqvduutt+Zo6W9OXmrhuRkSWIsu3ZJaqOspfhpY/ra/Ol8RLSeNlr3zzjvp3HPPzQ8aUdbhr+z/YpZxk0M3wU5Oy4z2mJDd/hLXMRBaTpqOaZjHQbhbBGH8FpOUXig+dsuCCWLkipLtCy+8MD9wxR6UjpGmcyNGACapnC1Shh/zRBcPyeymXIzfVeT0/KKrrroqXXfddTmHrN0NUIuWkUarPOyS8+fPEIYgVYtTTjklR0pzzG6CzYfu9TI7MdeVKyqK1rvbuCWkebyXuSSztETHj+nUXNJDLU2PaFw3TcJZgvzROoTZir3D5OR7Y7v/QJgs0mLlSC5GxREn+zdiKrJuX9RUarspUqqseCysWQriaJz0RxrE59ZLtCeLNKkEzbrllltyxi9k61B0POmkk7Km0bBuyvaj+HnttddmyyAzWClTSUZaPTR9NTpz36cH99IwQQCUqmmXUTO/7AYN419ViO+44458z+qYMWPyDMUWCbMUaxCqLYqgNK4eSt0kW4SfM0uE0S4Pi1OJldmr748cOTLtscce2T90mrCQjQmK5sjSaJf8i0XIHZmjzxHGd1nNt6zoDuO2kEYgC7ijR4/OIdrdKsWOY045FNsJEKXQya/a/oAo7kN0pFXI8n2kFOQz2Cot5LY2USaHbIg0o+iuFL7AU/c8A82I8VkcPw1T5qHqtRiMwPjOq+Z8IZZXTbIZyaiL1uRZWmiVKZDGddAu5MnD3LdlmkSzikmrfpDm1vEDDzwwV17KzIUbIo0Qnrh39tln57oY4eKiFBH5sUaT1yJhLiIauMA4vwFz0UGMJnJHI4vPQD7oGITG8f2B+7AeccYZZ+Ryu30mIc9gKE2aC4intZsiEdIIB4yQXGegTssIA/39LkT0GhrnPSLj73gPcY74eyDYFsFCTj311PwkmNLJN9LqoeoLKlWnXzn44IMr1ZBcmX766fODyR0+XFtVyypVwiqjRo2qVIPDpCsth1IpB7Pk9CMRZCZQNKfh1miV3EwuaRbQCOqaJxXnxw4//PBMGDPQaT1zK37fXxdlzbUWdcQdEI4rmq2/lapUNpBmFlMWdUnztQm4DJrD1aHOfV7n0D7U/i6Er3d8GWLr/abYV+1vbRi0OD2YL+4PpQJBRK0I74iLNhgGO3WJbjNqL6a/i6v3m+Lf8V7klEuKmCynEZQizU9CpaMFShzeFvRHXiNwfPi2RlE65ejh/9A95YdhhB5pTWCKN08lK/NlT3pRfBTMzF4UGNT93DIpIDQSDKZY0kR51Zj4n1LWApTlpU1yMo8Ks9BjwceagLJW2eAyxZKGIPV/K2MKjrRMZSTSJBN1MwK5mioH8mhgGeKmSNKU4ZWtLrjggqxptEtVVmFU2UrR9OGHH85JuzytOqdOe++9d646l9l+P0UGAtM9lWVleMVHRNEkTxo9/fTT04knntj3j70QaIEYifxdGUyRpKnW0jSzGObIX9lDYi+Jep8tqgKB7fgMzQYdOwMUMssYXsOkcbAqodYK46FzUfXQoYqpEriVamuLysud9gD8GdMjq76DKHNMUdLftkrwaXyYqi6fR3bE1UNDpDm5VR0lIpUPjc9AoM+NMFW3ym4dlMr7X1BKzlFV7QSs9iMuBtNUSVpRXOjhyyyiIE1DsOP4v3poKBBYYEWG/99Ewwijc6Hbq+8iF2IWohGTsPllxIgRuQbfbuiXz7rkkkvyQJHBwol7Fuy4DIwdOzYv5VnWA/tNjj/++FwuIvNgKLXGRhCjZle2/8YTG41jwmuU5D58Az+BQOVwZsw8kSi0Ky1b7aF5TJizlga0AgixD8PA6C/OS8b+0ojiZF2NEMES4TIWUYo0Ath+ZG2Ag0UK2yccwpBF/d0+7dGoXmXh7kphtjTU3wj0O8trtgQY7VaZrTtcVGE5eCQUMRBpQSilcC0xwPVQyqdFZk1zONDtt98+q3BRGFoU4dzGPbsdrVAZTb6EP3QeAhoAQUIZvVWNX+XHXDSPE7J57Y80iM/JhGjWU8ZbldI0WkVj+DHmhSDaghAdGmVPL/YMDnshOFTH0ELCBHGRcTNVC8vMqYx51l508e94T/sNZH9l6/6I8BnZwTmilUEp0pzMBUfY5j8Ihwyd24OGNKbhcxFIyKdRSPMbZLsw57LfVoZuz4fv+rsoiIuofYXaz5gaTTGwEOcc6Nw+R5pX54iBdZ56KGWeMmrR76yzzsob9HQSZmDaYcKLhCCRb5AsyswJgUhEF+8X8GogHF+v+Z3moqLpS3MeLS48BjMIiVYLgxm+L2QxH3XueiilaQTny1w0s7M3QiJoZAnL8TM1wko5RMeYIFuQpYkgGfYb52DCoqdztAJko+n2kSBO40cRFmZYBNm4D98jLQIZ4uqhFGkBJ2d6/pmDoEAYn5mmyK695/tESgKBi3FXClOV9DJv30lbWhk9abt8TL7FDRgsg0PG0CoEhTmzlGLfSLaUR756aGhGQACjJ1LJw3RkDxohQ63d9KrgF5m1rFt1QXnG/2KXdHrPdDW5USuawGTAyGgQ5YsGEVG0GYFhjkA+biRIZQHhs+uhIU3TCQ0zSjpDll1CxQIe4WPex6wJLSWQDjBZ/ytAC5MuG+brgSz8qnmlVw95kkAjSzOYBpmsZItBcx2shJbRTr6tHhoiDWF8UfgBWkS44v1NiAlhECk3o1m0gcDSEtMuEdSdxK0gDPQVzbmVflRs+V6DbR7sO2mJchBCXQ9IoVhD2bJ3Q+aJDCZgpJzcflqdISPAkRoxAjJlmuf/siBbsmseKpfzvXO0sjknOL/gw89JdbiTSy+9NBclZQD+Ub47Apkla5AuSdjLbhNr6FlDtMUI0RzkIEzFk//QOTAFkYk5Ipcm8RMeXGLTnwmxY+MCvbaiFRFpicED2m6wWYFX14AwSbm7aCTaSKZptefqDw2RhgwBACE6FBWNUJEE2se/IDjCOIFMrQjnQmhFu2Gg+FsOnt8M6yAn+cjPVRxxxBFZPtv2yxAGDZWGdBzVC8IQTOJbJMEIikx+E5pGC5kwYR3XKeib/6JhfJu0RxAzyOSJxiwbkWuKXY0qQlBiJXwsrUOSSBoupVH8vyCt1Wi/c5kC0SOtCfRIawI90ppAj7Qm0COtCfRIawI90ppAj7Qm0COtCfRIawI90ppAj7Qm0COtYaT0v7Aywrdgi/VIAAAAAElFTkSuQmCC`
) ;














