import React from "react";
import UseStorage from "../hooks/useStorage";
import { useState,useEffect } from "react";
//import { projecFirestore, projectStorage } from "../firebase/config";


const ProgressBar = ({file,setFile})=>{
    const {url,progress} =UseStorage(file);
useEffect(()=>{
    console.log(progress,url);
   if(url){
       setFile(null);


   }
},[url,setFile])
    return(
        <div className="progress-bar" style={{width:progress+"%"}}>
        
        </div>
    )
}
export default ProgressBar;
