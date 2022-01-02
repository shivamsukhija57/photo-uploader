import { useEffect,useState } from 'react';
import { projectStorage,projecFirestore,timestamp } from '../firebase/config';
import { ref, uploadBytesResumable,getDownloadURL  } from "firebase/storage";
import { collection, addDoc,serverTimestamp } from "firebase/firestore";
const UseStorage = (file) =>{
    const [progress,setProgress]=useState(0);
    const [error,setError] =useState(null);
    const [url,setUrl] =useState(null);
    useEffect (() =>{
        //references
     
        const storageRef =ref(projectStorage,file.name);
        const  docref =collection(projecFirestore,"images");
        uploadBytesResumable(storageRef, file).on('state_changed',
     (snapshot) => {
       // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
       let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
       console.log('Upload is ' + progress + '% done');
       setProgress(progress);
    //    switch (snapshot.state) {
    //      case 'paused':
    //        console.log('Upload is paused');
    //        break;
    //      case 'running':
    //        console.log('Upload is running');
    //        break;
    //    }
     }, 
     (error) => {
         setError(error);
       // A full list of error codes is available at
       // https://firebase.google.com/docs/storage/web/handle-errors
       switch (error.code) {
         case 'storage/unauthorized':
           // User doesn't have permission to access the object
           break;
         case 'storage/canceled':
           // User canceled the upload
           break;
   
         // ...
   
         case 'storage/unknown':
           // Unknown error occurred, inspect error.serverResponse
           break;
       }
     }, 
     () => {
       // Upload completed successfully, now we can get the download URL
       getDownloadURL(uploadBytesResumable(storageRef, file).snapshot.ref).then((url) => {
         console.log('File available at', url);
         const createdAt =serverTimestamp();
         addDoc((docref),{
            url,
            createdAt
     
        });
         setUrl(url);
         

       });
      
       
     }
   );

    },[file]);
    return {progress,url,error};
}
export default UseStorage;
