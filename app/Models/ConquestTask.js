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
        <input type="text" placeholder="step name"></input>
        <button>Add Step</button>
        <button class="btn btn-danger">Remove Task</button>
        </div>
        </div>`

        return template

    }
    getSteps(index) {
        let template = "<ul>";
        this.steps.forEach(step => {
            template += `
                <li>${step}</li>
            `
        });

        template += "</ul>"
        return template;
    }


}