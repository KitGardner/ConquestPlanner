import ConquestTask from "../Models/ConquestTask.js";

//Private
let _state = {
    ConquestTaskList: [
        new ConquestTask()
    ]
}


//Public
export default class ConquestTaskService {
    //TODO  Here is where we handle all of our data manipulation, 
    //given the information you need in the controller, 
    //what methods will be required to support that functionality?
    constructor() {
        console.log("Hello from the service");

    }

    get ConquestTasks() {
        return _state.ConquestTaskList.map(c => new ConquestTask(c));
    }

    //NOTE You will need this code to persist your data into local storage, these methods should not require changing

    //NOTE call saved list everytime you change the list collection in any way
    saveLists() {
        localStorage.setItem('lists', JSON.stringify(_state.lists))
    }

    //NOTE this method will get the lists from local storage at the start of the app
    getLists() {
        let saved = JSON.parse(localStorage.getItem('lists'))
        if (saved) {
            _state.lists = saved;
        }
    }
}
