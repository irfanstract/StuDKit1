



import * as React from "react" ;

import * as ReactDOM from "react-dom" ;



function Foo2() {
  {

    const compId = (
      React.useId()
    ) ;

    const e = (
      <div>
        <p>[Component ID: <code>{ compId }</code> ]</p>
        <p> Dynamic Component </p>
        <p> Static Component </p>
        <React.Suspense
        children={(
          //
          <p> Suspended Static Component </p>
        )}
        />
      </div>
    );

    React.useMemo(() => ({ value: 5, }) , [] );

    React.useEffect(() => {
      Object() ;
      Object() ;
    } , [] );

    return (
      <React.StrictMode
      children={e}
      />
    ) ;
  }
}




/**
 * ensures that
 * the transpiler or bundler do not elide those `import`s ({@link React}, {@link ReactDOM})
 * 
 */
void [React, ReactDOM] ;

import * as ReactDOMServer from "react-dom/server" ;





if (require.main === module) {
  setTimeout(async () => await runSsrDemo() , 1000 );
}

const runSsrDemo = (

  async function () {

    process.stdout.write((
      ReactDOMServer.renderToString(<Foo2 />)
    ) + "\r\n") ;
  
    process.stdout.write((
      ReactDOMServer.renderToStaticMarkup(<Foo2 />)
    ) + "\r\n") ;
  
  }
) ;

export {
  runSsrDemo ,
} ;











