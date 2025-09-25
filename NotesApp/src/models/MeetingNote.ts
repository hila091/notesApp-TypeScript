import { NoteModel } from "./NoteModel.js";

export class MeetingNote  extends NoteModel {
    location:string;
    participants:string [];
    date:Date;

    constructor(location: string,participants: string[],date:Date, title:string, text:string) {
     super(title, text); 
     this.location= location;
     this.participants =participants;
     this.date=date;
    }

    display(): string {
        let html: string =
        `<br> :מוזמנים 
         <br> ${this.location} :מיקום , ${this.date.toLocaleDateString()} :תאריך 
         <br> ${this.title} :פגישה חדשה`

         for(let i=0; i< this.participants.length; i++)
            html +=`<br> ${this.participants[i]}  (${i}`;
        html += `:הערות נוספות <br> ${this.text}`;

        return html;
    }
}