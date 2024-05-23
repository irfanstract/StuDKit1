





/* 
 * https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components  
 * https://stackoverflow.com/q/77592173  
 * https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered  
 * 
 * "client components" can still be rendered server-side so
 * lets expect having `"use client"` wherever possible
 * 
 * */
"use client" ;






;

import {
  util ,
  random ,
  mkArray ,
  ArgsWithOptions ,
  ArgsGetOptions ,
  allocateKeyInternedObjectPool ,
  TIMEOUT, 
} from "../stdSampleDescription.tsx" ;

import {
  OGPD ,
  IGPD ,
  ST_EXP ,
  CBZ ,
  BEXPON ,
} from "./util-ugp-musicalmathfncs.tsx" ;








;

import {
  describePwCoefsBy ,
  CREATE_PW ,
  describePw1 ,
  SCHEDULED_CLOSEABLE ,
  GRAPH_LOGICAL ,
  createReverbOnDestNode, 
  ANODECONNECTTWOWITHRESLVEDCREATEDMULTI,
  ANODECONNECTTWOWITHRESLVEDCREATED,
} from "./util-ugp-livepipenodes.tsx" ;

import {
  describeWpwBasedMuso ,
  describeWOnDestNodeDispatchBasedMuso,
} from "../stdSampleDescription.tsx" ;

;




const gpPw = (
  describePw1(ctx => (
    CREATE_PW(ctx, (
      describePwCoefsBy(() => {
        const d = (
          util.range(1, 2048)
          .map((i): number => {
            ;

            C :
            {
              if (1)
              { break C ; }

              if (IGPD(i) < (24 + 6) ) {
                return 0 ;
              }
            }
            
            if (IGPD(i) === 0 ) {
              return 2 ** -12.7708 ;
            }
      
            if (IGPD(i) === 12 ) {
              return 2 ** 6.07195 ;
            }
            if (IGPD(i) === 18 ) {
              return 2 ** 6.52008 ;
            }
            
            if (IGPD(i) === 24 ) {
              return 2 ** 4.395 ;
            }
            if (IGPD(i) === (24 + 3) ) {
              return 2 ** 1.1608 ;
            }
            if (IGPD(i) === (24 + 6) ) {
              return 2 ** 3.608 ;
            }
            if (IGPD(i) === (24 + 9) ) {
              return 2 ** 2.908 ;
            }
            
            if (IGPD(i) === 36 ) {
              return 2 ** 3.50 ;
            }
            if (IGPD(i) === (36 + 4.5) ) {
              return 2 ** 1.881608 ;
            }
            if (IGPD(i) === (36 + 6) ) {
              return 2 ** 3.081608 ;
            }

            if (1)
            {
              return 2 ** -7 ;
            }
      
            return 0 ;
          } )
          .map(v => ((2 ** -5.502) * v) )
        ) ;
      
        return [d, d.map(v => 0 )] as const ;
      })
    ))
  ))
) ;

const gpAccPw = (
  describePw1(ctx => (
    CREATE_PW(ctx, (
      describePwCoefsBy(() => {
        const d = (
          util.range(1, 2048)
          .map((i): number => {
            ;
            
            if (IGPD(i) === 12 ) {
              return 2 ** 2.17195 ;
            }
            if (IGPD(i) === 18 ) {
              return 2 ** 5.52008 ;
            }
            
            if (IGPD(i) === 24 ) {
              return 2 ** 2.395 ;
            }
            if (IGPD(i) === (24 + 3) ) {
              return 2 ** 2.1608 ;
            }
            if (IGPD(i) === (24 + 6) ) {
              return 2 ** 0.0608 ;
            }
            if (IGPD(i) === (24 + 9) ) {
              return 2 ** 3.89208 ;
            }
            
            if (IGPD(i) === 36 ) {
              return 2 ** 2.050 ;
            }
            if (IGPD(i) === (36 + 4.5) ) {
              return 2 ** 2.39208 ;
            }
            if (IGPD(i) === (36 + 6) ) {
              return 2 ** 0.081608 ;
            }
            if (IGPD(i) === (36 + 9) ) {
              return 2 ** 2.519208 ;
            }
            
            if (IGPD(i) === 48 ) {
              return 2 ** -2 ;
            }
            if (IGPD(i) === (48 + 4.5) ) {
              return 2 ** 0.51608 ;
            }
            if (IGPD(i) === (48 + 6) ) {
              return 2 ** 1.1608 ;
            }
            if (IGPD(i) === (48 + 9) ) {
              return 2 ** 0.530495 ;
            }
            
            if (IGPD(i) === (60 + 4.5) ) {
              return 2 ** -5.0881608 ;
            }
      
            return 0 ;
          } )
          .map(v => ((2 ** -4.502) * v) )
        ) ;
      
        return [d, d.map(v => 0 )] as const ;
      })
    ))
  ))
) ;

const bassKeysCaseFndtlPw = (
  describePw1(ctx => (
    CREATE_PW(ctx, describePwCoefsBy(() => {
      const c = [
        2 ** -3.5 ,
        2 ** -0.3 ,
        2 ** 1.435 ,
        2 ** -2.4 ,
        0,
        2 ** -3.22 ,
      ] as const ;
      return [c, c] as const ;
    }) )
  ) )
) ;

const lwrWwFndtlPw = (
  describePw1(ctx => (
    CREATE_PW(ctx, describePwCoefsBy(() => {
      const d = (
        util.range(1, 2048)
        .map((i): number => {
          ;

          if (i === 1 ) { return 2 ** -5.0917 ; }

          if (i === 2 ) { return 2 ** 0.9697 ; }
          if (i === 3 ) { return 2 ** -0.9595517 ; }
          if (1) { return 0 ; }

          if (i === 4 ) { return 2 ** -4.4 ; }
          if (i === 6 ) { return 2 ** -5.2 ; }
          
          return 0 ;
        } )
        .map(v => ((2 ** -0.25 ) * v) )
      ) ;
      return [d, d] as const ;
    }) )
  ) )
) ;

const wwFndtlPw = (
  describePw1(ctx => (
    CREATE_PW(ctx, describePwCoefsBy(() => {
      const d = (
        util.range(1, 2048)
        .map((i): number => {
          ;

          if (i === 1 ) { return 2 ** -5.0917 ; }

          if (i === 2 ) { return 2 ** 0.9697 ; }
          if (1) { return 0 ; }
          if (i === 3 ) { return 2 ** -0.9595517 ; }
          if (1) { return 0 ; }

          return 0 ;
        } )
        .map(v => ((2 ** -0.75 ) * v) )
      ) ;
      return [d, d] as const ;
    }) )
  ) )
) ;

const commonCaseFndtlPw = (
  describePw1(ctx => (
    CREATE_PW(ctx, describePwCoefsBy(() => {
      const d = (
        util.range(1, 4300)
        .map((i): number => {
          ;

          if (i === 1 ) { return 2 ** -1.417 ; }
          if (1) { return 0 ; }

          if (i === 2 ) { return 2 ** -1.697 ; }
          if (0) { return 0 ; }
          if (i === 3 ) { return 2 ** -5.1517 ; }
          
          if (IGPD(i) === (24 + 0) ) { return 2 ** -7.697 ; }
          if (IGPD(i) === (24 + 6) ) { return 2 ** -7.697 ; }

          if (IGPD(i) === (36 + 0) ) { return 2 ** -5.697 ; }
          if (IGPD(i) === (36 + 6) ) { return 2 ** -5.697 ; }

          if (IGPD(i) === (48 + 0) ) { return 2 ** -5.697 ; }
          if (IGPD(i) === (48 + 6) ) { return 2 ** -7.697 ; }
          
          if (IGPD(i) === (60 + 0) ) { return 2 ** -5.697 ; }
          if (IGPD(i) === (60 + 6) ) { return 2 ** -7.697 ; }
          
          return 0 ;
        } )
        .map(v => ((2 ** 4.5 ) * v) )
      ) ;
      return [d, d] as const ;
    }) )
  ) )
) ;

// TODO
export default (
  describeWOnDestNodeDispatchBasedMuso({
    handlePEvImpl: (e) =>
    {
      const {
        cf ,
        context: ctx ,
        nd1 ,
      } = e ;

      ;
      
      const cgn = new GainNode(ctx, { gain: 2 ** -5.456, } ) ;
      cgn.connect(nd1) ;

      const mp = new BiquadFilterNode(ctx, { type: "lowshelf", frequency: 2250, gain: 0 ? (2 ** -3.9 ) : 1 } ) ;
      mp.connect(cgn);
      
      const {
        //
        srcNd10 ,
        srcNd2 ,
      } = (function () {
        ;

        const fltNdEnd = mp ;
        
        const fg = new GainNode(ctx, {
          gain: (
            // 1
            // 0
            // (2 ** -1)
            (2 ** -2.5)
          ) ,
        } ) ;
        fg.connect(fltNdEnd) ;
  
        const fltNd4 = new GainNode(ctx, {} ) ;
        fltNd4.connect(fg) ;
        fltNd4.gain.setValueAtTime(2 ** -3.8, 0 ) ;
        if (cf < BEXPON(4) )
        {
          fltNd4.gain.setTargetAtTime(2 ** 1.370, ctx.currentTime, 0.00195 ) ;
          fltNd4.gain.setTargetAtTime(2 ** 0, ctx.currentTime + 0.05, 0.195 ) ;
          fltNd4.gain.setTargetAtTime(2 ** 0, ctx.currentTime + 0.15, 0.0995 ) ;
        }
        else {
          ;
          fltNd4.gain.setTargetAtTime(2 ** -1.5, ctx.currentTime, 0.00195 ) ;
        }
        fltNd4.gain.setTargetAtTime(2 ** -2, ctx.currentTime + 0.20, 0.0995 ) ;
        fltNd4.gain.setTargetAtTime(2 ** -3.8, ctx.currentTime + 0.25, 1.956395 ) ;
        fltNd4.gain.setTargetAtTime(2 ** -3.8, ctx.currentTime + 0.925, 1.056395 ) ;
  
        const fltNd5 = (
          0 ?
          createReverbOnDestNode(fltNd4, { dl: 0.03, gn: 2 ** -2, })
          : fltNd4
        ) ;
  
        const fltNd9 = new GainNode(ctx, { gain: 2 ** -1.95, } ) ;
        fltNd9.connect(fltNd5);
  
        const fltNd19 = new BiquadFilterNode(ctx, { type: "notch", frequency: cf, gain: 1, } ) ;
        fltNd19.connect(fltNd9);
  
        const fltNd6 = new BiquadFilterNode(ctx, { type: "lowshelf", frequency: cf, gain: 2 ** 1.5 , } ) ;
        fltNd6.connect(fltNd19);
  
        const fltNdStart = (
          // fltNd6
          fltNd9
        ) ;
  
        const wveTableNdEnd = fltNdStart ;
  
        const srcNd2 = (() => {
          ;
          const nd2 = new OscillatorNode(ctx, { periodicWave: (
            gpPw.getForCtx(ctx)
          ) } ) ;
          nd2.connect(wveTableNdEnd) ;
          nd2.frequency.setValueAtTime(cf, 0 ) ;
    
          nd2.start(ctx.currentTime) ;
          return nd2 ;
        })() ;
  
        const nd10 = new GainNode(ctx, { gain: 2 ** -3 } ) ;
        nd10.connect(wveTableNdEnd) ;
        
        const srcNd10 = (() => {
          ;
          const nd2 = new OscillatorNode(ctx, { type: "square" } ) ;
          nd2.connect(nd10) ;
          nd2.frequency.setValueAtTime(cf, 0 ) ;
    
          nd2.start(ctx.currentTime) ;
          return nd2 ;
        })() ;

        return {
          srcNd10 ,
          srcNd2 ,
        } ;
      })() ;

      const aPw = (
        (cf < BEXPON(4) ) ?
        bassKeysCaseFndtlPw.getForCtx(ctx)
        :
        commonCaseFndtlPw.getForCtx(ctx)
      ) ;

      const s11 = GRAPH_LOGICAL(function () {
        ;

        const fltNdEnd = new GainNode(ctx) ;

        ANODECONNECTTWOWITHRESLVEDCREATED({ dest: mp, src: fltNdEnd, }, ctx => (
          new GainNode(ctx, { gain: (
            // 1
            // 0
            1
          ) } )
        ) )

        const postG2 = new GainNode(ctx, { gain: (
          (2 ** -0.55 )
        ) } ) ;
        postG2.connect(fltNdEnd) ;
  
        const fltNd4 = new GainNode(ctx, {} ) ;
        fltNd4.connect(postG2) ;
        fltNd4.gain.setValueAtTime(2 ** -7.8, 0 ) ;
        fltNd4.gain.setTargetAtTime(2 ** 1.5, ctx.currentTime, 0.00290 ) ;
        fltNd4.gain.setTargetAtTime(2 ** -7.8, ctx.currentTime + 0.00931, (55 / cf) * 2.7765 ) ;
  
        const fltNdStart = fltNd4 ;
        
        const srcNd11 = new OscillatorNode(ctx, { periodicWave: aPw, } ) ;
        srcNd11.connect(fltNdStart) ;
        srcNd11.frequency.setValueAtTime(cf, 0 ) ;
        srcNd11.start(ctx.currentTime ) ;
  
        return SCHEDULED_CLOSEABLE({
          closeAt: (t: number) => {
            {
              srcNd11.stop(t + 0.5 ) ;
            }
          } ,
        }) ;
      }) ;
      
      const sC19A = GRAPH_LOGICAL(function () {
        ;

        // const fltNdEnd = mp ;
        
        // const postG = new GainNode(ctx, { gain: (
        //   // 1
        //   // 0
        //   1
        // ) } ) ;
        // postG.connect(fltNdEnd) ;

        // const postG2 = new GainNode(ctx, { gain: (
        //   1
        // ) } ) ;
        // postG2.connect(postG) ;
  
        // const fltNd4 = new GainNode(ctx, {} ) ;
        // fltNd4.connect(postG2) ;
        // fltNd4.gain.setValueAtTime(2 ** -7.8, 0 ) ;
        // fltNd4.gain.setTargetAtTime(2 ** 2.99190, ctx.currentTime, 0.00290 ) ;
        // fltNd4.gain.setTargetAtTime(2 ** -7.8, ctx.currentTime + 0.00800, 0.5495 ) ;
        // fltNd4.gain.setTargetAtTime(2 ** -7.8, ctx.currentTime + 0.091, 0.095 ) ;
        // fltNd4.gain.setTargetAtTime(2 ** -7.8, ctx.currentTime + 0.31, 0.085 ) ;
  
        // const fltNdStart = fltNd4 ;

        const fltNdEnd = new GainNode(ctx, {} ) ;

        const postG2 = (
          ANODECONNECTTWOWITHRESLVEDCREATED({ src: fltNdEnd, dest: mp }, ctx => {
            ;
            return (
              new GainNode(ctx, { gain: (
                // 1
                // 0
                1
              ) } )
            ) ;  
          } )
        ) ;

        const fltNdStart = new GainNode(ctx, {} ) ;
        
        const {
          // fltNd4 ,
          // postG2 ,
        } = (
          ANODECONNECTTWOWITHRESLVEDCREATEDMULTI({ src: fltNdStart, dest: fltNdEnd, }, ctx => {
            ;
            
            const postG2 = new GainNode(ctx, { gain: (
              (2 ** 0)
            ) } ) ;
      
            const fltNd4 = new GainNode(ctx, {} ) ;
            fltNd4.gain.setValueAtTime(2 ** -7.8, 0 ) ;
            fltNd4.gain.setTargetAtTime(2 ** 4.39299190, ctx.currentTime + 0 , 0.00290 ) ;
            fltNd4.gain.setTargetAtTime(2 ** 1.99190, ctx.currentTime + 0.02790, 0.00290 ) ;
            fltNd4.gain.setTargetAtTime(2 ** -7.8, ctx.currentTime + 0.02800, (55 / cf) * 1.525495 ) ;
      
            return {
              postG2 ,
              fltNd4 ,
            } as const ;
          } , ({
            fltNd4 ,
            postG2 ,
          }) => [
            fltNd4 ,
            postG2 ,
          ] )
        ) ;
        
        const tg = new GainNode(ctx, { gain: 2 ** -0.5 } ) ;
        tg.connect(fltNdStart) ;
        const srcNd11 = new OscillatorNode(ctx, { periodicWave: (
          (cf < BEXPON(3 + 12 + 2.5) ) ?
          lwrWwFndtlPw.getForCtx(ctx)
          : wwFndtlPw.getForCtx(ctx)
        ) } ) ;
        srcNd11.connect(tg) ;
        srcNd11.frequency.setValueAtTime(cf, 0 ) ;
        srcNd11.start(ctx.currentTime ) ;
  
        return SCHEDULED_CLOSEABLE({
          closeAt: (t: number) => {
            srcNd11.stop(t) ;
          } ,
        }) ;
      }) ;
      
      const sC19C = GRAPH_LOGICAL(function () {
        ;

        const fltNdEnd = new GainNode(ctx, {} ) ;

        const postG2 = (
          ANODECONNECTTWOWITHRESLVEDCREATED({ src: fltNdEnd, dest: mp }, ctx => {
            ;
            return (
              new GainNode(ctx, { gain: (
                // 1
                // 0
                1
              ) } )
            ) ;  
          } )
        ) ;

        const postG = new GainNode(ctx, { gain: (
          // 1
          // 0
          // (2 ** -1.5)
          (2 ** -1.5)
        ) } ) ;
        postG.connect(fltNdEnd) ;
  
        const fltNd4 = new GainNode(ctx, {} ) ;
        fltNd4.connect(postG) ;
        fltNd4.gain.setValueAtTime(2 ** -7.8, 0 ) ;
        void ((): void => {
          ;
          const c2 = 0.29590 ;
          if (cf < BEXPON(3.5) )
          {
            ;
            fltNd4.gain.setTargetAtTime(2 ** 1.9190, ctx.currentTime, 0.00290 ) ;
            fltNd4.gain.setTargetAtTime(2 ** 1.219, ctx.currentTime + 0.025, 0.00590 ) ;
            fltNd4.gain.setTargetAtTime(2 ** -2.0, ctx.currentTime + 0.05, c2 ) ;
            return ;
          }
          if (cf < BEXPON(3 + 10.5) )
          {
            ;
            fltNd4.gain.setTargetAtTime(2 ** 0.8190, ctx.currentTime, 0.00290 ) ;
            fltNd4.gain.setTargetAtTime(2 ** -5.0, ctx.currentTime + 0.05, c2 ) ;
            return ;
          }
          if (cf < BEXPON(3 + 12 + 0.5) )
          {
            ;
            fltNd4.gain.setTargetAtTime(2 ** -1.1190, ctx.currentTime, 0.00290 ) ;
            fltNd4.gain.setTargetAtTime(2 ** -5.0, ctx.currentTime + 0.05, c2 ) ;
            return ;
          }
          if (cf < BEXPON(3 + 12 + 2.5) )
          {
            ;
            fltNd4.gain.setTargetAtTime(2 ** -2.29190, ctx.currentTime, 0.00290 ) ;
            fltNd4.gain.setTargetAtTime(2 ** -5.0, ctx.currentTime + 0.05, c2 ) ;
            return ;
          }
          if (cf < BEXPON(3 + 12 + 5.5) )
          {
            ;
            fltNd4.gain.setTargetAtTime(2 ** -4.8190, ctx.currentTime, 0.00290 ) ;
            fltNd4.gain.setTargetAtTime(2 ** -5.0, ctx.currentTime + 0.05, c2 ) ;
            return ;
          }
          {
            ;
            fltNd4.gain.setTargetAtTime(0, ctx.currentTime, 0.00290 ) ;
            return ;
          }
        })() ;
        fltNd4.gain.setTargetAtTime(2 ** -7.8, ctx.currentTime + 0.10, 1.195 ) ;
        fltNd4.gain.setTargetAtTime(2 ** -7.8, ctx.currentTime + 0.11, 0.4395 ) ;
        fltNd4.gain.setTargetAtTime(2 ** -7.8, ctx.currentTime + 0.265, 0.257085 ) ;
  
        const fltNdStart = fltNd4 ;
        
        const srcNd19A = new OscillatorNode(ctx, { periodicWave: (
          gpAccPw.getForCtx(ctx)
        ), } ) ;
        srcNd19A.connect(fltNdStart) ;
        srcNd19A.frequency.setValueAtTime(cf, 0 ) ;
        srcNd19A.start(ctx.currentTime ) ;
  
        return SCHEDULED_CLOSEABLE({
          closeAt: (t: number) => {
            srcNd19A.stop(t) ;
          } ,
        }) ;
      }) ;


      return SCHEDULED_CLOSEABLE({
        closeAt: (t: number) => {
          {
            cgn.gain.setValueAtTime(0, t) ;
            srcNd2.stop(t + 0.5 ) ;
            srcNd10.stop(t + 0.5 ) ;
            s11.closeAt(t + 0.5 ) ;
            sC19A.closeAt(t + 0.5 ) ;
            sC19C.closeAt(t + 0.5 ) ;
          }
        } ,
      }) ;
    } ,
  })
) ;









