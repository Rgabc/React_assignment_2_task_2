import React,{useState,useEffect} from 'react'
import Child from './Child';

const Parent=()=>{
const[item,setItem]=useState();
const[price,setPrice]=useState();
const[data,setData]=useState([])
// console.log(item,price)
// console.log(data)//array
const itemData=(value)=>{
    console.log(value)
    //if i use (setData(value)) then its goes to ultimate loop

   

}

   
const submitHandler=(e)=>{
    e.preventDefault()
    const dataObj={
        item,
        price,
    }
   
    setData([...data,dataObj]);
    setItem("")
    setPrice("")
    

 
}



    return(<>
    <form onSubmit={submitHandler}>
        <input type='text' placeholder='item' onChange={(e)=>{setItem(e.target.value)}} value={item} /><br/>
        <input type='number' placeholder='price'  onChange={(e)=>{setPrice(e.target.value)}} value={price} />
        <button>
            Add Item
        </button>
    </form>
    
    <Child data={data} itemData={itemData} />
    
    
    </>)
}
export default Parent