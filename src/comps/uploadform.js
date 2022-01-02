import React from 'react';
import { useState } from 'react';
import ProgressBar from './progressBar'
//import {ProgressBar} from './progressBar';
const UploadForm = ()=>{
    const [file,setFile] =useState(null);
    const[error,setError] =useState(null);
    const types =['image/jpeg','image/jpg','image/png']
    const handleChange =e =>{
        let selected =e.target.files[0];
        console.log(selected);
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        }else{
            setFile(null);
            setError("These type of file cannot be uploaded")
        }
    }
    return(
        
            <form >
                <label>
            <input type='file' onChange={handleChange }/>
            <span>+</span>
            </label>
            <div className='output'>
                {error && <div className='error'>{error}</div>}
                {file && <div>{file.name}</div> }
                {file && <ProgressBar file ={file} setFile ={setFile}/>}
            </div>
            
            </form>
        
    )
}
export default UploadForm;