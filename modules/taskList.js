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
function addTask(name, des) {
  if (!taskList.find((task) => task.name === name)) {
    let task = { id: genId(), name: name, description: des, state: false };
    taskList.push(task);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Added task");
      }, 2000);
    });
  } else {
    return Promise.reject(new Error("Invalid task"));
  }
}

function deleteTask(number) {
  taskList.splice(number - 1, 1);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Delete Task");
    }, 2000);
  });
}

function toggleTask(number) {
  taskList[number - 1].state = !taskList[number - 1].state;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Toggled Task");
    }, 2000);
  });
}

/*creo una funcion para eliminar tarea  */
function showList(arr) {
  if (arr.length === 0) {
    console.log("Empty List");
  } else {
    const taskData = arr.map((task) => ({
      ID: task.id,
      Name: task.name,
      Description: task.description,
      State: task.state,
    }));
    console.table(taskData, ["ID", "Name", "Description", "State"]);
  }
}

const group = {
  taskList: taskList,
  genId: genId,
  addTask: addTask,
  deleteTask: deleteTask,
  toggleTask: toggleTask,
  showList: showList,
};

module.exports = group;
