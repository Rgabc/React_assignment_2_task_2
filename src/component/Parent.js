import React,{useState,useEffect} from 'react'
import Child from './Child';
import "./style.css"

const Parent=()=>{
const[item,setItem]=useState();
const[price,setPrice]=useState();
const[data,setData]=useState([])
  
const submitHandler=(e)=>{
    e.preventDefault()
    const dataObj={
        id:data.length+1,
        item,
        price,
    }
   
    setData((data)=>[...data,dataObj]);
    setItem("")
    setPrice("")
    

 
}
const removeItm=(id)=>{
   const a=data.filter((row)=>{ return row.id!==id})
   setData(a)

    
}



    return(<>
    <div className='parent'><h1><b>Parent component</b></h1>
    <form onSubmit={submitHandler}>
        <input type='text' placeholder='item' onChange={(e)=>{setItem(e.target.value)}} value={item} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type='number' placeholder='price'  onChange={(e)=>{setPrice(e.target.value)}} value={price} />
        <button>
            Add Item
        </button>
    </form>
    <Child data={data} removeItm={removeItm}  />
    </div>
   
    
   
    
    
    </>)
}
export default Parent