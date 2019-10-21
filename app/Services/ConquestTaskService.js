import ConquestTask from "../Models/ConquestTask.js";
import TaskStep from "../Models/TaskStep.js";

//Private
let _state = {
    ConquestTaskList: []
}

function _checkIfAllStepsComplete(taskIndex) {
    let completed = true;
    let steps = _state.ConquestTaskList[taskIndex].steps;
    for (let i = 0; i < steps.length; i++) {
        if (!steps[i].completed) {
            completed = false;
            break;
        }
    }
    return completed;
}


//Public
export default class ConquestTaskService {
    setTaskCompletion(taskIndex, completed) {
        _state.ConquestTaskList[taskIndex].completed = completed;
        this.saveTasks();
    }
    changeStepComplete(taskIndex, stepIndex, completed) {
        let taskCompleted = false;
        _state.ConquestTaskList[taskIndex].steps[stepIndex].completed = completed;
        this.saveTasks();
        if (completed) {
            taskCompleted = _checkIfAllStepsComplete(taskIndex);
        }

        return taskCompleted;
    }
    changeTaskPriority(newPriority, taskIndex) {
        _state.ConquestTaskList[taskIndex].priority = newPriority;
        this.saveTasks();
    }
    removeStep(taskIndex, stepIndex) {
        _state.ConquestTaskList[taskIndex].steps.splice(stepIndex, 1);
        this.saveTasks();
    }
    addStep(taskIndex, taskStep) {
        _state.ConquestTaskList[taskIndex].steps.push(new TaskStep({ completed: false, stepName: taskStep }));
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
