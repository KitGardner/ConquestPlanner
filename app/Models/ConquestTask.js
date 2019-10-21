export default class ConquestTask {
    constructor(data = {}) {
        this.taskName = data.taskName || "Task";
        this.priority = data.priority || "Low";
        this.steps = data.steps || [];
        this.completed = data.completed || false;
    }

    getTemplate(index) {
        let template = `<div class="col-4">
            <div class="border">
            
            <h1>${this.taskName}
                <input type="checkbox" onchange="app.controllers.ConquestTaskController.setTaskCompletion(${index}, this.checked)" ${this.completed ? "Checked" : ""}/>
            </h1>
            <form onsubmit="app.controllers.ConquestTaskController.changeTaskPriority(event, ${index})">
                <select name="priority" value="${this.priority}">
                    <option ${this.priority == "Low" ? "Selected" : ""}>Low</option>
                    <option ${this.priority == "Average" ? "Selected" : ""}>Average</option>
                    <option ${this.priority == "High" ? "Selected" : ""}>High</option>
                    <option ${this.priority == "Critical" ? "Selected" : ""}>Critical</option>
                </select>
                <button type="submit">Change Priority</button>
            </form>
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
                <li>
                <input type="checkbox" onchange="app.controllers.ConquestTaskController.changeStepComplete(${index}, ${stepIndex}, this)" ${step.completed ? "checked" : ""}>
                ${step.stepName}
                <span onclick="app.controllers.ConquestTaskController.removeStep(${index}, ${stepIndex})">X</span>
                </li>
            `
        });

        template += "</ul>"
        return template;
    }


}