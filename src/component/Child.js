import React from 'react'

import "./style.css"
const Child=({data,removeItm})=>{
   
     
    
    




    return(<>
    <h1>
    <h1>child component</h1>
        {data.map((row)=>{
            return(<>
            <div className='child'>

            
            <ul>
                
              <li> {row.id} item:{row.item} price:${row.price}<button onClick={()=>{removeItm(row.id)}}>remove</button></li>
                
            </ul>
            </div>

            </>)

        })  

        }
        
        </h1>
    
    
    
    
    </>)
}
export default Child;