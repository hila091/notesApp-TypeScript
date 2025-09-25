export class NoteModel {
    /*
    אני רוצה לאפשר 2 בנאים
    אז את החלק שמכניסים טקסט אני צריכה לעשות כאופציונלי
    */
    constructor(title, text) {
        this.note_id = NoteModel.startID++;
        this.title = title;
        this.text = text !== null && text !== void 0 ? text : ""; // אז במקרה שלא מכניסים טקסט לפתק כמו ברשימת קניות אז צריך שיהיה מחרוזת ריקה
    }
}
NoteModel.startID = -1; // כדי שהאיבר הראשון יהיה 0 
