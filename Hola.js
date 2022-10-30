import React,{useState} from 'react'


export default function Hola() {
    
    const[count,setCount]=useState(0)
    let res=count
    const submitHandle=()=>{
        setCount(res=count+8)
        console.log(res);
    }
  return (
    <div>
        <form action="/">
            <div className="form-group files color">
                <label className='lab mx-1'>Cultural Events like dance</label>
                <input type="file" className="hidden" onSubmit={submitHandle} onClickc={handleNull}/>
            </div>              
            <div className="form-group files color">
                <label className='lab mx-1'>Cultural Events like dance</label>
                <input type="file" className="hidden" multiple={false} style={{cursor:"pointer"}}/>
            </div>              
            <div className="form-group files color">
                <label className='lab mx-1'>Cultural Events like dance</label>
                <input type="file" className="hidden" multiple={false} style={{cursor:"pointer"}}/>
            </div>
        </form>
    </div>
  )
}
