









/**
 * 
 * re-exports of
 * most the main/top-level exports of package `react-dom`
 * excluding ones which'd expose the React Runtime
 * 
 * attempt to
 * reduce the number shown by the NextJS log output when(ever) recompiling
 * 
 * arguably
 * the same reason why
 * the Official React Dev'er Team
 * wants to
 * get rid of `ReactDOM.render` and `ReactDOM.hydrate` and
 * get those all down into `react-dom/client`
 * 
 */
export {
  createPortal ,
  version ,
} from "react-dom" ;

export type {
  ReactPortal ,
} from "react" ;

export type {
  Root ,
} from "react-dom/client" ;






