import { useState } from "react";
import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState,setProjectState] = useState({
    selectedProjectId:undefined,
    projects:[],
    tasks:[]
  });
  function handleAddTask(text){
    setProjectState((prevstate)=>{
      const taskId = Math.random();
      const newTask = {
        text:text,
        projectId:prevstate.selectedProjectId,
        id: taskId,
      };
      return{
        ...prevstate,
        tasks: [...prevstate.tasks,newTask],
      };
    });
  }
  function handleDeleteTask(id){
    setProjectState((prevstate)=>{
      return{
        ...prevstate,
        tasks:prevstate.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  }
  function handleSelectProject(id){
    setProjectState((prevstate)=>{
      return{
        ...prevstate,
        selectedProjectId: id,
      };
    });
  }
  function handleStartAddProject(){
    setProjectState((prevstate)=>{
      return{
        ...prevstate,
        selectedProjectId:null,
      };
    });
  }
  function handleAddProject(projectData){
    setProjectState((prevstate)=>{
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return{
        ...prevstate,
        selectedProjectId: undefined, 
        projects: [...prevstate.projects,newProject],
      };
    });
  }
  function handleCancelAddProject(){
    setProjectState((prevstate)=>{
      return{
        ...prevstate,
        selectedProjectId: undefined,
      };
    });
  }
  function handleDeleteProject(){
    setProjectState((prevstate)=>{
      return{
        ...prevstate,
        selectedProjectId: undefined,
        projects:prevstate.projects.filter(
          (project) => project.id !== prevstate.selectedProjectId
        ),
      };
    });
  }
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  // console.log(projectsState);
  let content = <SelectedProject 
  project={selectedProject} 
  onDelete={handleDeleteProject} 
  onAddTask={handleAddTask} 
  onDeleteTask={handleDeleteTask}
  tasks={projectsState.tasks}
  />;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  }
  else if (projectsState.selectedProjectId === undefined) {
    content =  <NoProjectSelected onStartAddProject={handleStartAddProject}/>  
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject} selectedProjectId={projectsState.selectedProjectId}/> 
      {content}
    </main>
  );
}

export default App;
