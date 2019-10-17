import ConquestTaskService from "../Services/ConquestTaskService.js";

//Private
let _conquestTaskService = new ConquestTaskService();

//TODO Don't forget to render to the screen after every data change.
function _drawConquestTasks() {
    let tasks = _conquestTaskService.ConquestTasks;
    let template = "";

    tasks.forEach((task, i) => {
        template += task.getTemplate(i);
    })

    document.getElementById("taskList").innerHTML = template;
}


//Public
export default class ConquestTaskController {
    constructor() {
        //NOTE: When the app first starts we want to pull any potential data out of memory
        //_listService.getLists();
        //NOTE: After updating the store, we can automatically call to draw the lists.
        //_drawLists();
        console.log("Hello from the controller");
        _drawConquestTasks();
    }



    //TODO: Your app will need the ability to create, and delete both lists and listItems
}