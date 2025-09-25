import { NoteModel } from "./NoteModel.js";
export class MeetingNote extends NoteModel {
    constructor(location, participants, date, title, text) {
        super(title, text);
        this.location = location;
        this.participants = participants;
        this.date = date;
    }
    display() {
        let html = `<br> :מוזמנים 
         <br> ${this.location} :מיקום , ${this.date.toLocaleDateString()} :תאריך 
         <br> ${this.title} :פגישה חדשה`;
        for (let i = 0; i < this.participants.length; i++)
            html += `<br> ${this.participants[i]}  (${i}`;
        html += `:הערות נוספות <br> ${this.text}`;
        return html;
    }
}
