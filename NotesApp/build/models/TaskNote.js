import { NoteModel } from "./NoteModel.js";
export class TaskNote extends NoteModel {
    constructor(title, date, deadline, text) {
        super(title, text);
        this.date = date;
        this.deadline = deadline;
    }
    display() {
        return ` ${this.date.toLocaleDateString()} :עד תאריך ${this.deadline.toLocaleDateString()} :יש לבצע מתאריך <br> ${this.text} :משימה חדשה ${this.title}`;
    }
}
