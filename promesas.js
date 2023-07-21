const { v4: uuidv4 } = require("uuid");

let tasks = [];
function genId() {
  let index = uuidv4();
  return index;
}
function addTask(name,des){
    if (!tasks.find((task) => task.name === name)) {
        let task = { id: genId(), name: name, description: des, state: false };
        tasks.push(task);}
}
function addTask(name, des) {
  if (!tasks.find((task) => task.name === name)) {
    let task = { id: genId(), name: name, description: des, state: false };
    tasks.push(task);
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

addTask("task1")
  .then((tasks) => {
    console.log(tasks);
  })
  .catch((err) => {
    console.log(err);
  });

async function task2() {
  const message = await addTask("task2", "des2");
  console.log(message);
}
task2();
/* addTask("task2")
  .then((tasks) => {
    console.log(tasks);
  })
  .catch((err) => {
    console.log(err);
  }); */

/* console.table({
  name: tasks.name,
  description: tasks.description,
  state: tasks.state,
}); */
// cuando intente agregar una nueva tarea con el mismo nombre me va salir el error
// crear una promesa usando AddTask
//const task1=addTask("Task1","Des1");

//console.log(tasks);

//resolver togglet ask con async y await

/* async function toggle(){
    const toggleTask=await 
} */
