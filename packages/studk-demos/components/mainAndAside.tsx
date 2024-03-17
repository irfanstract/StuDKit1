
import * as React from "react" ;

// import Link from "next/link" ;










export const MainAndNavAndFinaleC = (({ main: mainComp, nav1 = <div />, finale = <div />, }) => {
  ;
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      // backgroundColor: "black",
      // color: "white",
      overflowBlock: "auto",
      minBlockSize: `100vh`,
    }}>
      <SCD
      style={{
        order: 1 ,
        flex: "1 1 auto",
        // backgroundColor: "white",
        // color: "black",
      }}
      >
          { mainComp }
      </SCD>
      <SCD style={{ order: 0, position: "sticky", insetBlockStart: 0, backgroundColor: "inherit", fontSize: `80%`, }} >
          { nav1 }
      </SCD>
      <SCD style={{ order: 2 , position: "sticky", insetBlockEnd: 0, backgroundColor: "inherit", fontSize: `80%`, }}>
          { finale }
      </SCD>
    </div>
  ) ;
}) satisfies (
  React.FC<{ main: React.ReactNode ; nav1?: React.ReactElement ; finale?: React.ReactElement ; }>
) ;

export const SCD = (({ style, ...props }) => {
  return (
     <SingleChildDiv {...props} style={{ border: `0.05em solid black`, ...style } } />
  ) ;
}) satisfies React.FC<JSX.IntrinsicElements["div"] > ;




export const SingleChildDiv = (({ style, ...props }) => {
  return (
     <div {...props} style={{ display: "grid", grid: "a", ...style } } />
  ) ;
}) satisfies React.FC<JSX.IntrinsicElements["div"] > ;






