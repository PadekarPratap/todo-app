import React, { useState } from "react";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { AppContext } from "../App";
import { addTask } from "../reducers/tasksSlice";
import { toast } from "react-hot-toast";

const TodoInputTask = () => {
  const [task, setTask] = useState('')
  const {setIsOpen, setType} = useContext(AppContext)

  const dispatch = useDispatch()

  const createTask = () =>{
      if(task){
        dispatch(addTask({
          taskName: task,
          description: "",
          isPriority: false,
          tags: [],
          isCompleted: false,
          time: new Date().toLocaleString(),
          id: crypto.randomUUID()
        }))
        toast.success("Task has been added successfully!")
        setTask("")
      }else{
        toast.error("Task field is empty")
      }
  }

  const createDetailedTask = () =>{
    setIsOpen(true)
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-6 mt-8">
        <input
          type="text"
          className="flex-grow border-2 rounded-lg border-teal-600 text-2xl px-4 focus:outline-4  focus:outline-teal-300 py-2 font-mono"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <div className="self-center space-x-4">
          <button onClick={createTask}>Create Task</button>
          <button onClick={createDetailedTask} className="sm:hidden">Create Detailed Task</button>
        </div>
      </div>
      <div className="text-center mt-8 hidden sm:block">
        <button onClick={createDetailedTask}>Create Detailed Task</button>
      </div>
    </div>
  );
};

export default TodoInputTask;
