import  React from 'react';
import UseFirestore from './../hooks/useFirestore';

const ImageGrid =({setSelectedImg})=>{
    const {docs}=UseFirestore("images");
   // console.log(docs);
   const array =["1","2"];
   //console.log(docs instanceof Array)
   //console.log(array,Array.isArray(array));
   //console.log(!!docs)
   //const di =[...array];
  console.log(docs);
  console.log(docs.length);
    return (
        <div className='img-grid'>
            
            {/* {console.log(docs[0],typeof(docs),Array.isArray(docs))} */}
            
         {docs && docs.map(doc=>{
            return (
              
             <div className="img-wrap" key={doc.id} onClick={()=>setSelectedImg(doc.url)}>
                 
                 <img src={doc.url} alt="pic" />
                 
             </div>
             )
}) }
        </div>
    )
}
export default ImageGrid;