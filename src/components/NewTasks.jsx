import {useState} from "react"
export default function NewTasks({onAdd}){
  const[EnteredTask,setEnteredTask] = useState('');
  function handleChange(event){
    setEnteredTask(event.target.value);
  }
  function handleClick(){
    if (EnteredTask.trim() === '') {
      return;
    }
    onAdd(EnteredTask);
    setEnteredTask('');
  }
  return(
    <div className="flex item-center gap-4">
      <input onChange={handleChange} value={EnteredTask} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
      <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Tasks</button>
    </div>
  );
}