export default class ConquestTask {
    constructor(data = {}) {
        this.taskName = data.taskName || "Task";
        this.priority = data.priority || "Low";
        this.steps = data.steps || ["step"];
        console.log("Task Created");
    }

    getTemplate(index) {
        let template = `<div class="col-4">
            <div class="border">
            
            <h1>${this.taskName}</h1>
            <h3>${this.priority}</h3>
            <h3>Steps to Complete</h3>
            
        `;

        template += this.getSteps(index);

        template += `
        <form onsubmit="app.controllers.ConquestTaskController.addStep(event, ${index})">
            <input type="text" placeholder="step name" name="taskStep"></input>        
            <button type="submit">Add Step</button>
        </form>
        <button class="btn btn-danger" onclick="app.controllers.ConquestTaskController.removeTask(${index})">Remove Task</button>
        </div>
        </div>`

        return template

    }
    getSteps(index) {
        let template = "<ul>";
        this.steps.forEach((step, stepIndex) => {
            template += `
                <li>${step}<span onclick="app.controllers.ConquestTaskController.removeStep(${index}, ${stepIndex})">X</span></li>
            `
        });

        template += "</ul>"
        return template;
    }


}