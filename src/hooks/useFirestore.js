import { projecFirestore } from "../firebase/config";
import { collection ,query, onSnapshot, orderBy} from 'firebase/firestore';

import { useState , useEffect } from "react";

const UseFirestore =(collections)=>{
    const [docs,setdocs] =useState([]);
    useEffect(()=>{
        const snapshots = query(collection(projecFirestore,collections),orderBy("createdAt",'desc'));
             
            
            const unsub =  onSnapshot(snapshots,(snapshot)=>{
                let documents =[];

                    snapshot.forEach((doc)=>{
                        documents.push({...doc.data(), id: doc.id})
                        
    
                    });
                    setdocs(documents);
                    
        // const fun =  ()=>{
            
        //         })
                
                
               
                
    
            
            
                })
                return () => unsub();
        //fun();
        
    },[collections])
    return { docs };
}
export default UseFirestore;