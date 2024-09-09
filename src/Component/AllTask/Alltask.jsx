import React, { useState } from 'react'

const Alltask = ({setCompletedtodo,taskName}) => {

    const [check,setCheck] = useState ("");
    const handler =(e)=>{
      if(check ===""){
        setCheck("check");
        alert(e)
        setCompletedtodo((previousValue)=>{
          return [
            ...previousValue,
            e

          ]
        })
      }
      else{
        
        setCheck("");
      }
    }
  return (
   <>
   <section className="All-task-section flex gap-3 text-2xl items-center mb-2  ">
  <div className={`radioButton  ${check ==="check"?"active-radio-button":""}`} onClick={()=>handler(taskName)}>
  {check ==="check"?  <Checkbox/> :""}
    </div>
    <div className={`Task-name  text-[#6420AA] ${check ==="checked"? "task-done-mark":""}`} >
        {taskName}
    </div>

   </section>
   </>
  )
}

export default Alltask


const Checkbox= ()=>{
  return(
    <>
 <div className="tic relative flex justify-center   p-3">
      <div className="line-1  w-3 h-1 bg-white rotate-[-45deg] rounded  absolute top-[10px] left-[7px]"></div>
      <div className="line-2 w-2 h-1 bg-white rotate-45 absolute top-[12px] right-[12px] rounded"></div>
    </div>
    </>
  )
}