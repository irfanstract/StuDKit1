


@REM await coreEngn.exec(["-f", "lavfi", "-i", `testsrc2=duration=5.1` , "main.webm"] as const, 50 * 1000 , { } ) ;

ffmpeg -f lavfi -i testsrc2=duration=5.1 main.webm



