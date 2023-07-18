const readline = require("readline");
//console.log(readline)
/*debo crear una funcion menu para seleccionar una opcion, debo usar switch
este switch me genera cada caso , y para preparar cada caso uso el readline  */
/*OJo para usar question debo usar funciones callback o promesas o waiat */

const menu = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
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
function addTask() {
  menu.question(" enter task name: ", (name) => {
    menu.question("enter task description: ", (description) => {
      let id = genId();
      let indice = taskList.find((t) => t.id === id);
      if (!indice) {
        task = { id: id, name: name, description: description, state: false };
        taskList.push(task);
      }
      console.log(" added task");
      selectMenu();
    });
  });
}

function deleteTask() {
  if (taskList.length == 0) {
    console.log("Empty task list");
    selectMenu();
  } else {
    console.log(" select the number of the task to delete");
    for (let i = 0; i < taskList.length; i++) {
      console.log(`${i + 1}. task name: ${taskList[i].name}`);
    }
    menu.question("select the task that you want to delete: ", (number) => {
      taskList.splice(number-1, 1);
      console.log("task deleted");
      selectMenu();
    });
  }
}

function toggleTask() {
  if (taskList.length == 0) {
    console.log("Empty task list");
    selectMenu();
  } else {
    console.log(" select the number of the task to mark");
    for (let i = 0; i < taskList.length; i++) {
      console.log(`${i+1}. task name: ${taskList[i].name}`);
    }
    menu.question(
      "select the task that you want to mark as complete: ",
      (number) => {
        taskList[number-1].state = !taskList[number-1].state;
        
        console.log("task completed");
        selectMenu();
      }
    );
  }
 
}

/*creo una funcion para eliminar tarea  */
function showList(arr) {
  arr.map((item) => {
    console.log(item);
  });
}

function selectMenu() {
  console.log("Menu to creat tasks:");
  console.log("1. Select to add task");
  console.log("2. Select to toggle task");
  console.log("3. Select to delete task");
  console.log("4. Show the tasks list");
  console.log("5. Exit");
  menu.question("selecciona una opcion: ", (opcion) => {
    let mensaje;
    switch (opcion.toLowerCase().replace(" ", "")) {
      case "uno":
      case "1":
        addTask();
        break;

      case "dos":
      case "2":
        toggleTask();
        break;

      case "tres":
      case "3":
        deleteTask();
        break;
      
      case "cuatro":
      case "4":
        showList(taskList);
        selectMenu();
        break;
      case "exit":
      case "5":
        menu.close();
        break;
      default:
        console.log("invalid value")
        selectMenu();
        break;
    }
  });
}

selectMenu();
