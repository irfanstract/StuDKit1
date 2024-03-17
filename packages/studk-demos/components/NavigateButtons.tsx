
"use client" ;







import * as React from "react" ;





export const NavigateBackButton = () => {
  return (
    <button
    children="Back"
    onClick={() => history.back() }
    />
  ) ;
} ;

export const NavigateForwardButton = () => {
  return (
    <button
    children="->>"
    onClick={() => history.forward() }
    />
  ) ;
} ;





