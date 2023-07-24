const {
  taskList,
  genId,
  addTask,
  deleteTask,
  toggleTask,
  showList,
} = require("./modules/taskList");
const readline = require("readline");
//console.log(readline)
/*debo crear una funcion menu para seleccionar una opcion, debo usar switch
este switch me genera cada caso , y para preparar cada caso uso el readline  */
/*OJo para usar question debo usar funciones callback o promesas o waiat */

const menu = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
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
        menu.question("Enter Task name: ", (name) => {
          menu.question("Enter Task description: ", (description) => {
            addTask(name, description).then((message) => {
              console.log(message);
            });
            setTimeout(() => {
              selectMenu();
            }, 2200);
          });
        });
        break;

      case "dos":
      case "2":
        if (taskList.length === 0) {
          console.log("Empty task list");
          selectMenu();
        } else {
          console.log(
            "Select the Number of the Task that you want to mark as complete: "
          );
          for (let i = 0; i < taskList.length; i++) {
            console.log(
              `Mark (${i + 1}) if you want to toggle ${taskList[i].name}`
            );
          }
          menu.question("Select Task: ", (number) => {
            async function toggle() {
              const toggleT = await toggleTask(number);
              console.log(toggleT);
            }
            toggle();
            setTimeout(() => {
              selectMenu();
            }, 2200);
          });
        }
        break;

      case "tres":
      case "3":
        if (taskList.length === 0) {
          console.log("Empty task list");
          selectMenu();
        } else {
          console.log(
            "Select the Number of the Task that you want to delete: "
          );
          for (let i = 0; i < taskList.length; i++) {
            console.log(
              `mark (${i + 1}) if you want to delete ${taskList[i].name}`
            );
          }
          menu.question("Select task: ", (number) => {
            deleteTask(number).then((task) => {
              console.log(task);
            });
            setTimeout(() => {
              selectMenu();
            }, 2200);
          });
        }
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
        console.log("invalid value");
        selectMenu();
        break;
    }
  });
}

selectMenu();
