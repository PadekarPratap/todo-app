import React, { useState } from "react";
import { createContext } from "react";
import { Toaster } from "react-hot-toast";
import TaskModal from "./components/TaskModal";
import TodoContent from "./components/TodoContent";
import TodoFilters from "./components/TodoFilters";
import TodoHeader from "./components/TodoHeader";
import TodoInputTask from "./components/TodoInputTask";

export const AppContext = createContext();

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const TOASTER_STYLES ={
    style:{
      fontSize: '1.2rem'
    }
  }
  
  return (
    <>
    <AppContext.Provider value={{ isOpen, setIsOpen }}>
      <div>
        <div className="container mx-auto px-4">
          <div className="max-w-[50rem] mx-auto my-[2.5rem] shadow-2xl p-8 bg-white">
            <TodoHeader />
            <TodoInputTask />
            <TodoFilters />
            <TaskModal />
            <TodoContent />
          </div>
        </div>
      </div>
    </AppContext.Provider>
    <Toaster position="bottom-right" toastOptions={TOASTER_STYLES} />
    </>
  );
};

export default App;
