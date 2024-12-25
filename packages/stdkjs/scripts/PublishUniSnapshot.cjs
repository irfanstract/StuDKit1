
// @ts-check




const {
  GitSnapshotNaming ,
} = require("studk-util/src/L/GitRefNameGen") ;

const {
  GitCommitRangesCmb,
  GitPushCmb ,
} = require("studk-util/src/L/gitcmb") ;




const {
  execSync,
  execFileSync,
} = require("node:child_process");






const {
  stdkJsBaseDir ,
  stdkUniBaseDir ,
} = require("./BaseDirs.cjs") ;

function publishUniAsStudKitProjDevkitSnapshot()
{
  ;

  const t = Date.now() ;

  const nme = (
    `devkit-${ GitSnapshotNaming.formatGitRefUsableHyphenatedDateTimeStr(t) }-nightly`
  ) ;

  const c = `git push https://github.com/irfanstract/StuDKit1.git ${GitPushCmb.fmtCkoHeadMapToTagnameMapping(nme) } ` ;

  console.warn(publishUniAsStudKitProjDevkitSnapshot.name , {
    t,
    nme,
    c ,
    stdkJsBaseDir ,
    stdkUniBaseDir ,
  }) ;

  if (0) {
    throw new TypeError() ;
  }

  /** fail if there's uncommitted worktree chgs */
  {
    execSync(`git merge HEAD`, {
      cwd: stdkUniBaseDir,
      stdio: ["inherit", "inherit", "inherit"] ,
    } ) ;
  }

  execSync(c, {
    cwd: stdkUniBaseDir,
    stdio: ["inherit", "inherit", "inherit"] ,
  } ) ;

}

/**
 * TODO
 * 
 */
function publishUniAsNStdkProjMainSnapshot()
{
  ;

  const t = Date.now() ;

  const nme = (
    `all-${ GitSnapshotNaming.formatGitRefUsableHyphenatedDateTimeStr(t) }-nightly`
  ) ;

  // TODO
  throw new Error(`TODO`) ;
}








;

// publishAsStudKitProjDevkitSnapshot
if (require.main === module) {

  publishUniAsStudKitProjDevkitSnapshot() ;

}

;







