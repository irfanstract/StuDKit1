













declare global
{
  interface CSSStyleDeclaration
  {

    zoom ?: (
      | CSSStyleDeclaration["blockSize"]
      | string
      | number
    ) ;

  }
}










