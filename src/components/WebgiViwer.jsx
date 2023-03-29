import React, { useRef,useCallback, useEffect } from "react"
import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    BloomPlugin,
    GammaCorrectionPlugin,
    CanvasSnipperPlugin,
    addBasePlugins,
    
} from "webgi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const WebgiViwer = () => {
 const canvasRef=   useRef(null);

 const setupViewer= useCallback(async ()=>{ // Initialize the viewer
 const viewer = new ViewerApp({
     canvas: canvasRef.current,
 })

 // Add some plugins
 const manager = await viewer.addPlugin(AssetManagerPlugin)

 const camera=viewer.scene.activeCamera;
 const position =camera.position;
 const target=camera.target;



 

 // Add plugins individually.
 await viewer.addPlugin(GBufferPlugin)
 await viewer.addPlugin(new ProgressivePlugin(32))
 await viewer.addPlugin(new TonemapPlugin(true))
 await viewer.addPlugin(GammaCorrectionPlugin)
 await viewer.addPlugin(SSRPlugin)
 await viewer.addPlugin(SSAOPlugin)
 // await viewer.addPlugin(DiamondPlugin)
 // await viewer.addPlugin(FrameFadePlugin)
 // await viewer.addPlugin(GLTFAnimationPlugin)
 // await viewer.addPlugin(GroundPlugin)
 await viewer.addPlugin(BloomPlugin)
 // await viewer.addPlugin(TemporalAAPlugin)
 // await viewer.addPlugin(AnisotropyPlugin)




 // This must be called once after all plugins are added.
 viewer.renderer.refreshPipeline()

 await manager.addFromPath("scene-black.glb")

 viewer.scene.activeCamera.setCameraOptions({controlsEnabled:false});

 window.scroll(0,0);

 let needsUpdate=true;

 viewer.addEventListener("preFrame",()=>{
    if(needsUpdate){

        camera.positionTargetUpdated(true);
        needsUpdate=false;
        
    }
 })

 viewer.getPlugin(TonemapPlugin).config.clipBackground =true;

 // Load an environment map if not set in the glb file
 // await viewer.scene.setEnvironment(
 //     await manager.importer!.importSinglePath<ITexture>(
 //         "./assets/environment.hdr"
 //     )
 // );



},[]);
 

useEffect(()=>{
    setupViewer();
},[])

   

  return (
    <div id='webgi-canvas-container'>
        <canvas id='webgi-canvas' ref={canvasRef} />
        
    </div>
  )
}

export default WebgiViwer