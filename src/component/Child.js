import React,{useState} from 'react'


const Child=(props)=>{
    const[id,setId]=useState();
    // const[data1,setData]=useState()
    console.log(props.data)

    
        const value=props.data.filter((row)=>{
            if(id){ 
                            console.log(id)
                            return id!==row.item
                            
                
                        }
                       })
                       console.log(value)
     props.itemData(value)
     
    
    




    return(<>
    <h1>
        {props.data.map((row)=>{
            return(<>
            <h1>
                item:{row.item} price:{row.price}<button onClick={()=>{setId(row.item)}}>remove</button>
                
            </h1>
            </>)

        })  

        }
        
        </h1>
    
    
    
    
    </>)
}
export default Child;