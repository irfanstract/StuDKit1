




console["error"](`nothing to run.`) ;

{
  /** exit the app via {@link process.exit}, which needs to be delayed for security reasons */
  setTimeout(() => {
    process.exit(1) ;
  } , 0 ) ;
}



