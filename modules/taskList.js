const { v4: uuidv4 } = require("uuid");
/*primero debo crear una funcion que permita crear una lista de tareas 
cada tarea contienen un indicador, descirpcion y un estado   */


/*1.creo un array donde ira la lista de tareas  */
let taskList = [];
/*creo funcion para generar id */
function genId() {
  let index = uuidv4();
  return index;
}

/*creo una funcion que permita añadir tareas  */
function addTask(name,description) {
  let id=genId();
  let indice = taskList.find((t) => t.id === id);
  if (!indice) {
    task={id:id,name:name,description:description,state:false}
    taskList.push(task);
  }
  console.log("Added Task");
}

function deleteTask(number) {
  
    taskList.splice(number-1, 1);
    console.log("Deleted Task");
  
}

function toggleTask(number) {
    taskList[number-1].state = !taskList[number-1].state;
    console.log("Toggled Task");
  
}

/*creo una funcion para eliminar tarea  */
function showList(arr) {
  if(arr.length === 0){
    console.log("Empty List")
  }else{
    arr.map((item) => {
      console.log(item);
    });

  }
}

const group={
  taskList:taskList,
  genId:genId,
  addTask:addTask,
  deleteTask:deleteTask,
  toggleTask:toggleTask,
  showList:showList,
}

module.exports=group;
