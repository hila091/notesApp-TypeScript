import { NoteModel } from "./NoteModel.js";

export class TaskNote extends NoteModel {
    date: Date;
    deadline:Date;

    constructor(title: string, date:Date,deadline:Date,text:string ) {
     super(title, text); 
     this.date= date;
     this.deadline =deadline;
    }

    display(): string {
        return  ` ${this.date.toLocaleDateString()} :עד תאריך ${this.deadline.toLocaleDateString()} :יש לבצע מתאריך <br> ${this.text} :משימה חדשה ${this.title}`
    }
}