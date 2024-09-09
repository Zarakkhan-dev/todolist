import React, { useState, useEffect } from 'react';
import Alltask from '../AllTask/Alltask';

const HomePage = () => {
  const [inputTask, setInput] = useState("");
  const [All_task, setTask] = useState([]);
  const [activetask, Setactivetask] = useState([])
  const [completedTodo,setCompletedtodo] =useState([]);
  const Submission = (e) => {
    e.preventDefault();
    setTask([...All_task, inputTask]);
    setInput(""); 

};
useEffect(()=>{
  console.log(completedTodo)
})
  return (
    <>
      <div className="Interface w-full h-[100vh] bg-[#7469B6]  flex justify-center items-start ">
        <div className="Box mt-10">
          <div className="Input w-full">
            <form onSubmit={Submission} className='w-full'>
              <input 
                type="text" 
                name="" 
                id="" 
                placeholder='What you do now ?'  
                className='outline-none py-3 px-5 rounded w-full' 
                onChange={(e) => setInput(e.target.value)} 
                value={inputTask} 
              />
            </form>
          </div>

          <div className="Section bg-white p-3 mt-5 rounded">
            <div className="Display_of_Task">
                {
                  All_task ===""? "":
                    All_task.map((task)=>{
                        return (
                          <Alltask taskName={task} setCompletedtodo={setCompletedtodo}/>
                        )
                    })
                }
            </div>
          <nav>
            <ul className='flex  gap-4 mt-4 text-white px-3'>
              <li className='bg-[#B5C0D0] py-0 px-4'>{All_task.length} Items</li>
              <li className=' bg-[#B5C0D0] py-0 px-4'>All Task</li>
              <li className='bg-[#B5C0D0] py-0 px-4'>Active</li>
              <li className='bg-[#B5C0D0] py-0 px-4'>Completed</li>  
              <li className='bg-[#B5C0D0] py-0 px-4 cursor-pointer' onClick={()=>setTask("")}>Clear All Task</li>
            </ul>
          </nav>
        </div>
      </div>
      </div>
    </>
  );
};

export default HomePage;
