



: being called from scriptfiles
@echo off



set X_CALLINGDIR=%CD%



set X_ROOTDIR=%~dp0\..\..



cd %X_ROOTDIR%

node --import ./scripts/setup-tsnodeimportfixups.mjs .\packages\studk-cli\src\cc\cppGlobApp.ts %*





