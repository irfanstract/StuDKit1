





@REM @echo off





set _PBD=%~dp0..\..
set _P2_BASEDIR=%_PBD:\=/%

: failed to work

: see also https://github.com/nodejs/node/issues/26521 ;
set NODE_OPTIONS="--import %_P2_BASEDIR%/scripts/AllNeededPreRunSetups.mjs %NODE_OPTIONS%"




echo %NODE_OPTIONS%

node %_P2_BASEDIR%\dist\PublishSnapshot.mts




: TBD
@REM set _WD=?????
@REM 
@REM cd %_P2_BASEDIR%
@REM 
@REM node --import %_P2_BASEDIR%/scripts/AllNeededPreRunSetups.mjs %_P2_BASEDIR%/scripts/exp/PublishSnapshotOf.mts %_WD%








