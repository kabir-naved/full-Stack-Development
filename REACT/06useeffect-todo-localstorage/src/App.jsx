import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [toDo, setToDo] = useState(
    JSON.parse(localStorage.getItem('toDoItems')) ?? []
  );

  let handleToDo = (e) => {
    let userItems = e.target.items.value.trim(); // Remove any leading or trailing spaces
  
    if (!userItems) {
      // If the input is empty or just spaces, do not proceed
      return;
    }
  
    let oldData = [...toDo, { task: userItems, completed: false }];
    setToDo(oldData);
    e.preventDefault();
    e.target.reset();
  };
  

  const delData = (index) => {
    let oldData = [...toDo];
    oldData.splice(index, 1);
    setToDo(oldData);
  };

  const toggleComplete = (index) => {
    let updatedData = [...toDo];
    updatedData[index].completed = !updatedData[index].completed;
    setToDo(updatedData);
  };

  useEffect(() => {
    localStorage.setItem('toDoItems', JSON.stringify(toDo));
  }, [toDo]);

  return (
    <div style={{ backgroundColor: '#212121' }} className='h-screen md:pt-5 '>
      <div className="flex items-center justify-center font-medium">
        <div className="flex flex-grow items-center justify-center h-full text-gray-600">
          {/* Component Start */}
          <div className="max-w-full p-8 bg-white rounded-lg shadow-lg md:w-3/4 h-screen lg:h-[700px] w-full">
            <div className="flex items-center mb-6 justify-center">
              <svg
                className="h-8 w-8 text-indigo-500 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              <h4 className="font-semibold ml-3 text-lg">TO DO LIST</h4>
            </div>

            <form
              action=""
              onSubmit={handleToDo}
              className="flex items-center w-full h-8 px-2 mt-2 mb-2 text-sm font-medium rounded bg-gray-200 hover:bg-gray-100"
            >
              <input
                className="flex-grow h-8 bg-transparent focus:outline-none font-medium rounded"
                type="text"
                placeholder="add a new task"
                name="items"
              />

              <button title="Add items">
                <svg
                  className="w-5 h-5 text-blue-400 fill-current rounded hover:bg-blue-300 active:bg-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </form>

            {/* Todo Item Component */}
            <div className="relative">
              <div>
                {toDo.length >= 1 ? (
                  toDo.map((item, index) => {
                    return (
                      <div key={index}>
                        <button
                          onClick={() => delData(index)}
                          className="absolute right-0 p-1 mt-1 text-red-400 fill-current select-none cursor-pointer hover:bg-red-200 hover:rounded-lg active:bg-red-400 fa fa-trash"
                        >
                          <svg
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.0697 5.23C19.4597 5.07 17.8497 4.95 16.2297 4.86V4.85L16.0097 3.55C15.8597 2.63 15.6397 1.25 13.2997 1.25H10.6797C8.34967 1.25 8.12967 2.57 7.96967 3.54L7.75967 4.82C6.82967 4.88 5.89967 4.94 4.96967 5.03L2.92967 5.23C2.50967 5.27 2.20967 5.64 2.24967 6.05C2.28967 6.46 2.64967 6.76 3.06967 6.72L5.10967 6.52C10.3497 6 15.6297 6.2 20.9297 6.73C20.9597 6.73 20.9797 6.73 21.0097 6.73C21.3897 6.73 21.7197 6.44 21.7597 6.05C21.7897 5.64 21.4897 5.27 21.0697 5.23Z"
                              fill="#292D32"
                            />
                            <path
                              opacity="0.3991"
                              d="M19.2297 8.14C18.9897 7.89 18.6597 7.75 18.3197 7.75H5.67975C5.33975 7.75 4.99975 7.89 4.76975 8.14C4.53975 8.39 4.40975 8.73 4.42975 9.08L5.04975 19.34C5.15975 20.86 5.29975 22.76 8.78975 22.76H15.2097C18.6997 22.76 18.8398 20.87 18.9497 19.34L19.5697 9.09C19.5897 8.73 19.4597 8.39 19.2297 8.14Z"
                              fill="#292D32"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.58008 17C9.58008 16.5858 9.91586 16.25 10.3301 16.25H13.6601C14.0743 16.25 14.4101 16.5858 14.4101 17C14.4101 17.4142 14.0743 17.75 13.6601 17.75H10.3301C9.91586 17.75 9.58008 17.4142 9.58008 17Z"
                              fill="#292D32"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.75 13C8.75 12.5858 9.08579 12.25 9.5 12.25H14.5C14.9142 12.25 15.25 12.5858 15.25 13C15.25 13.4142 14.9142 13.75 14.5 13.75H9.5C9.08579 13.75 8.75 13.4142 8.75 13Z"
                              fill="#292D32"
                            />
                          </svg>
                        </button>

                        <input
                          className="hidden"
                          type="checkbox"
                          id={`task_${index}`}
                          checked={item.completed}
                          onChange={() => toggleComplete(index)}
                        />
                        <label
                          className={`flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100 ${
                            item.completed ? 'line-through text-gray-500' : ''
                          }`}
                          htmlFor={`task_${index}`}
                        >
                          <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full">
                            {item.completed && (
                              <svg
                                className="w-4 h-4 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )}
                          </span>
                          <span className="ml-4 text-sm">{item.task}</span>
                        </label>
                      </div>
                    );
                  })
                ) : (
                  <div className="p-20">
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center hover:text-red-700 cursor-pointer">
                        <svg
                          className=" w-[100px] h-[100px] md:w-20 md:h-15 mx-auto text-gray-800 dark:text-red-400  hover:text-red-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 15v3c0 .5523.44772 1 1 1h16c.5523 0 1-.4477 1-1v-3M3 15V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v9M3 15h18M8 15v4m4-4v4m4-4v4m-5.5061-7.4939L12 10m0 0 1.5061-1.50614M12 10l1.5061 1.5061M12 10l-1.5061-1.50614"
                          />
                        </svg>
                        <h2 className=" relative top-[-12px] text-xl md:text-2xl font-semibold text-gray-500 hover:text-red-500">
                          Your Todo List is Empty
                        </h2>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Todo Item Component End */}
          </div>
          {/* Component End */}
        </div>
      </div>
    </div>
  );
}

export default App;






























////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// import { useEffect, useState } from 'react'
// import './App.css'

// function App() {
//   const [toDo, setToDo] = useState(JSON.parse(localStorage.getItem('toDoItems')) ?? [])

// let handleToDo = (e) => {
//   let userItems = e.target.items.value
//   let oldData = [...toDo, userItems]
//   setToDo(oldData)
//   // console.log(oldData)
//   e.preventDefault()
//   e.target.reset()
// }

// let delData = (index) =>{
//     let oldData = [...toDo]
//     oldData.splice(index,1)
//     setToDo(oldData)
//     // alert(index)
// }

//   useEffect(()=> {
//       localStorage.setItem('toDoItems', JSON.stringify(toDo))
//   },[toDo])
//   return (
//    <div style={{backgroundColor: '#212121'}} className='h-screen md:pt-5 '>
//       <div className="flex items-center justify-center font-medium">
//         <div className="flex flex-grow items-center justify-center h-full text-gray-600">
//             {/* Component Start */}
//             <div className="max-w-full p-8 bg-white rounded-lg shadow-lg md:w-3/4 h-screen lg:h-[700px] w-full">
//                 <div className="flex items-center mb-6 justify-center">
//                     <svg className="h-8 w-8 text-indigo-500 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none"
//                         viewBox="0 0 24 24" stroke="currentColor">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                             d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
//                     </svg>
//                     <h4 className="font-semibold ml-3 text-lg">TO DO LIST</h4>
//                 </div>

//                 <form action='' onSubmit={handleToDo} className="flex items-center w-full h-8 px-2 mt-2 mb-2 text-sm font-medium rounded bg-gray-200 hover:bg-gray-100">

//                     <input className="flex-grow h-8 bg-transparent focus:outline-none font-medium rounded" type="text"
//                         placeholder="add a new task" name='items'/>

//                   <button  title="Add items">
//                     <svg className="w-5 h-5 text-gray-400 fill-current rounded hover:bg-gray-300 active:bg-gray-500"
//                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
//                             d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
//                     </svg>
//                   </button>
//                 </form>

//                   {/* Todo İtem Component  */}
//                 <div className="relative">
//                   <div>
//                       {toDo.length >= 1
//                         ?
//                         toDo.map((items,index) => {
//                           return(
//                             <div>
//                                <button onClick={() => delData(index)}
//                         className="absolute right-0 p-1 mt-1 text-red-400 fill-current select-none cursor-pointer hover:bg-red-200 hover:rounded-lg active:bg-red-400
//                     fa fa-trash">
//                         <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
//                             xmlns="http://www.w3.org/2000/svg">
//                             <path
//                                 d="M21.0697 5.23C19.4597 5.07 17.8497 4.95 16.2297 4.86V4.85L16.0097 3.55C15.8597 2.63 15.6397 1.25 13.2997 1.25H10.6797C8.34967 1.25 8.12967 2.57 7.96967 3.54L7.75967 4.82C6.82967 4.88 5.89967 4.94 4.96967 5.03L2.92967 5.23C2.50967 5.27 2.20967 5.64 2.24967 6.05C2.28967 6.46 2.64967 6.76 3.06967 6.72L5.10967 6.52C10.3497 6 15.6297 6.2 20.9297 6.73C20.9597 6.73 20.9797 6.73 21.0097 6.73C21.3897 6.73 21.7197 6.44 21.7597 6.05C21.7897 5.64 21.4897 5.27 21.0697 5.23Z"
//                                 fill="#292D32" />
//                             <path opacity="0.3991"
//                                 d="M19.2297 8.14C18.9897 7.89 18.6597 7.75 18.3197 7.75H5.67975C5.33975 7.75 4.99975 7.89 4.76975 8.14C4.53975 8.39 4.40975 8.73 4.42975 9.08L5.04975 19.34C5.15975 20.86 5.29975 22.76 8.78975 22.76H15.2097C18.6997 22.76 18.8398 20.87 18.9497 19.34L19.5697 9.09C19.5897 8.73 19.4597 8.39 19.2297 8.14Z"
//                                 fill="#292D32" />
//                             <path fill-rule="evenodd" clip-rule="evenodd"
//                                 d="M9.58008 17C9.58008 16.5858 9.91586 16.25 10.3301 16.25H13.6601C14.0743 16.25 14.4101 16.5858 14.4101 17C14.4101 17.4142 14.0743 17.75 13.6601 17.75H10.3301C9.91586 17.75 9.58008 17.4142 9.58008 17Z"
//                                 fill="#292D32" />
//                             <path fill-rule="evenodd" clip-rule="evenodd"
//                                 d="M8.75 13C8.75 12.5858 9.08579 12.25 9.5 12.25H14.5C14.9142 12.25 15.25 12.5858 15.25 13C15.25 13.4142 14.9142 13.75 14.5 13.75H9.5C9.08579 13.75 8.75 13.4142 8.75 13Z"
//                                 fill="#292D32" />
//                         </svg>
//                     </button>

//                     <input className="hidden" type="checkbox" id="task_1" checked />
//                     <label className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100" for="task_1">
//                         <span
//                             className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full">
//                             <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
//                                 fill="currentColor">
//                                 <path fill-rule="evenodd"
//                                     d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
//                                     clip-rule="evenodd" />
//                             </svg>
//                         </span>
//                         <span className="ml-4 text-sm">{items}</span>
//                     </label>
//                             </div>
//                           )
//                         })
//                         :
//                         <div className='p-20'>
//                               <div className="flex items-center justify-center h-full">
//                               <div className="text-center  hover:text-red-700 cursor-pointer">
//                                   <svg
//                                     className=" w-[100px] h-[100px] md:w-20 md:h-15 mx-auto text-gray-800 dark:text-red-400  hover:text-red-500"
//                                     aria-hidden="true"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                    >
//                                     <path
//                                       stroke="currentColor"
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                       strokeWidth="2"
//                                       d="M3 15v3c0 .5523.44772 1 1 1h16c.5523 0 1-.4477 1-1v-3M3 15V6c0-.55228.44772-1 1-1h16c.5523 0 1 .44772 1 1v9M3 15h18M8 15v4m4-4v4m4-4v4m-5.5061-7.4939L12 10m0 0 1.5061-1.50614M12 10l1.5061 1.5061M12 10l-1.5061-1.50614"
//                                     />
//                                   </svg>
//                                   <h2 className=" text-xl md:text-2xl font-semibold text-gray-600 text-red-500">Your Todo List is Empty</h2>
//                               </div>
//                             </div>
//                         </div>
//                       }
//                   </div>
//                 </div>

//                  {/* Todo İtem Component End */}
//             </div>
//             {/* Component End */}
//         </div>

//     </div>
//    </div>
//   )
// }

// export default App
