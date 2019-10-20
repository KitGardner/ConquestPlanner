import ConquestTask from "../Models/ConquestTask.js";

//Private
let _state = {
    ConquestTaskList: []
}


//Public
export default class ConquestTaskService {
    removeStep(taskIndex, stepIndex) {
        _state.ConquestTaskList[taskIndex].steps.splice(stepIndex, 1);
        this.saveTasks();
    }
    addStep(taskIndex, taskStep) {
        _state.ConquestTaskList[taskIndex].steps.push(taskStep);
        this.saveTasks();
    }
    removeTask(index) {
        _state.ConquestTaskList.splice(index, 1);
        this.saveTasks();
    }
    addTask(taskData) {
        _state.ConquestTaskList.push(new ConquestTask({
            taskName: taskData.taskName.value,
            priority: taskData.priority.value,
            steps: []
        }));

        this.saveTasks();
    }
    //TODO  Here is where we handle all of our data manipulation, 
    //given the information you need in the controller, 
    //what methods will be required to support that functionality?
    constructor() {
        console.log("Hello from the service");
        this.getTasks();

    }

    get ConquestTasks() {
        return _state.ConquestTaskList.map(c => new ConquestTask(c));
    }

    //NOTE You will need this code to persist your data into local storage, these methods should not require changing

    //NOTE call saved list everytime you change the list collection in any way
    saveTasks() {
        localStorage.setItem('conquestTasks', JSON.stringify(_state.ConquestTaskList))
    }

    //NOTE this method will get the lists from local storage at the start of the app
    getTasks() {
        let saved = JSON.parse(localStorage.getItem('conquestTasks'))
        if (saved) {
            _state.ConquestTaskList = saved;
        }
    }
}
