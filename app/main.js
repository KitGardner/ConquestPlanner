import ConquestTaskController from "./Controllers/ConquestTaskController.js"

//NOTE This should be good to go
class App {
    constructor() {
        this.controllers = {
            ConquestTaskController: new ConquestTaskController()
        }
    }
}

window['app'] = new App()