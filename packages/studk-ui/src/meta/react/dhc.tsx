



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






import * as React from "react" ;

import {
  describeComponent,
} from 'studk-ui-fwcore/src/ReactComponentDef.tsx'; ;

import {
  withExtraSemanticProperties ,
  asHidden ,
} from 'studk-ui-fwcore/src/react-dom/helpers/WithAddedSemanticProperties.tsx'; ;

import {
  describeHtmlComponent,
  getSpaceSeparatedClassNameList,
} from 'studk-ui-fwcore/src/ReactHtmComponentDef.tsx';

import {
  getFromClassNameProp ,
} from 'studk-ui-fwcore/src/util/ReactJsBased';

;






/**
 * {@link describeHeadlinedArticle }
 * 
 * this abstraction
 * is meant as work-around to issues described in the intro of {@link describeArticleImpl}.
 * 
 */
export function describeHeadlinedArticle(...[{ heading: headingArg, children, ...prps }] : [{
  heading: React.ReactElement,
  children: React.ReactElement | React.ReactElement[] ,
} & DhaCommonProps ])
{
  return (
    describeArticleImpl({
      heading: headingArg ,
      children ,
      restProps: prps ,
    })
  ) ;
}

/**
 * {@link describeArticle }
 * 
 * this abstraction
 * is meant as work-around to issues described in the intro of {@link describeArticleImpl}.
 * 
 */
export function describeArticle(...[{ heading: headingArg = null, children, ...prps }] : [{
  heading?: React.ReactElement | null,
  children: React.ReactElement | React.ReactElement[] ,
} & DhaCommonProps ])
{
  return (
    describeArticleImpl({
      heading: headingArg ,
      children ,
      restProps: prps ,
    })
  ) ;
}

interface DhaCommonProps extends Pick<JSX.IntrinsicElements["div"] , "style" >
{}

/**
 * {@link describeArticleImpl }
 * 
 * bases on discussions
 * https://css-tricks.com/document-outline-dilemma/ and
 * https://github.com/whatwg/html/issues/83 and https://github.com/whatwg/html/pull/3499 
 * .
 * this forcing us to resort to {@link XHC } ;
 * in future
 * we may eventually
 * acquire automatic means for *automatically assigning h-level(s) properly for these "heading"s* .
 * 
 */
function describeArticleImpl(...[props] : [{
  heading: React.ReactElement | null,
  children: React.ReactElement | React.ReactElement[] ,
  classNameProp?: string ,
  restProps: DhaCommonProps ,
  efnd ?: EFND ,
} ])
{

  const {
    heading: headingArg = null ,
    children,
    classNameProp = ``,
    efnd = EFND.getInstance() ,

    restProps: prps,
  } = props;

  return (
    withExtraSemanticProperties({
      classNames: (
        getFromClassNameProp(classNameProp )
      ) ,
    } , (
      efnd.asFullSecElemJsx((

        <section className={`studk-ui-dhc-sec `} {...prps}>
          { (headingArg !== null) && (
            <XHC children={headingArg } />
          ) }
          <div>
            { children }
          </div>
        </section>

      ))
    ))
  ) ;

}
namespace describeArticleImpl { ; }

namespace describeArticleImpl
{

}

class EFND {
  //

  static getInstance() {
    return new EFND() ;
  }

  traverser = DhcSpecificTraverser.getInstance() ;

  /**
   * `true` IOIF
   * the {@link Element}
   * maps to complete fragment returned by {@link describeArticleImpl}
   * .
   * 
   */
  isFullSecElemPeer(e: HTMLElement | SVGElement)
  : boolean
  {
    return e.matches(`.studk-ui-dhc-sectionboundary`) ;
  }

  asFullSecElemJsx(...[e] : [React.ReactElement] )
  : React.ReactElement
  {
    return (

      withExtraSemanticProperties({
        classNames: ["studk-ui-dhc-sectionboundary"] ,
      } , e )
    ) ;
  }

  getPrecedingBuiltInHeaTagsExcluding(...[self] : [self: Element] )
  {
    return (
      this.traverser.getPrecedingBuiltInHeaTagsExcluding(self)
    ) ;
  }

  private constructor()
  {}

}

class DhcSpecificTraverser {
  //

  static getInstance() {
    return new DhcSpecificTraverser() ;
  }

  iterableSelfAndDescendants(...[self] : [self: Element] )
  : Iterable<Element>
  {
    const this1 = this ;
    return (

      util.reiterable(function* () {

        yield self ;

        for (const child of Array.from(self.children ) ) {
          yield* this1.iterableSelfAndDescendants(child) ;
        }

      })
    ) ;
  }

  getPrecedingStartTagsExcluding(...[self] : [self: Element] )
  {

    const allEs = (
      Array.from(this.iterableSelfAndDescendants((
        // TODO
        self.getRootNode() as Element
      )))
    ) ;

    return (
      allEs.slice(0, (

        allEs.length - (
          Math.max(0, allEs.toReversed().indexOf(self) ) + 1
        )
      ) )
    ) ;
  }

  getPrecedingBuiltInHeaTagsExcluding(...[self] : [self: Element] )
  {
    return (
      this.getPrecedingStartTagsExcluding(self)
      .filter(e => e.matches(`h1, h2, h3, h4, h5, h6`) )
    ) ;
  }

  private constructor()
  {}

}

export function describeWorksheet(...[{ heading, children, style = {}, ...prps }] : [{
  heading?: never,
  children: React.ReactElement | React.ReactElement[] ,
} & Pick<JSX.IntrinsicElements["div"] , "style" > ])
{
  return (
    <section
    style={{
      overflow: "auto",
      ...style,
    }}
    {...prps}
    >
      <div>
        { children }
      </div>
    </section>
  ) ;
}

/**
 * {@link XHC }
 * 
 * bases on discussions
 * https://css-tricks.com/document-outline-dilemma/ and
 * https://github.com/whatwg/html/issues/83 and https://github.com/whatwg/html/pull/3499 
 * .
 * this forcing us to resort to regular `<p>` (this time with `<strong>`) or `<b>` ;
 * in future
 * we may eventually
 * acquire automatic means for *automatically assigning h-level(s) properly for these "heading"s* .
 * 
 */
const XHC = (

  // TODO
  describeHtmlComponent((
    function XHCRend({ children: c, } : { children: React.ReactNode & {} ; } )
    {

      const [ResolvedC, setResolvedC] = (
        React.useState<(React.ElementType<(
          JSX.IntrinsicElements["div" | "body" | "section" | "p" | "span" ]
        )> ) | null >(null )
      ) ;

      const C = (
        ResolvedC ??
        SimpleBoldenedParagraphC
      ) ;

      return (
        //
        <C children={c } />
      ) ;
    }
  ))
) ;

export { XHC, } ;

/**
 * is component `<p><b>{ children }</b></p>`.
 * 
 */
const SimpleBoldenedParagraphC = (

  // TODO
  describeHtmlComponent(function SimpleBoldenedParagraphCRend({ children: c, } : { children: React.ReactNode & {} ; } ) {
    return (
      //
      <p children={<b children={c} /> } />
    ) ;
  })
) ;

;





export {
  /** @deprecated */
  describeComponent ,
} ;









