









{
  console["log"]({ nodeVer: [process.version, process.execPath ], }) ;

  void (async () => {
    const { app, } = (await import("electron") ) ;
    app.exit() ;
  })() ;
}








