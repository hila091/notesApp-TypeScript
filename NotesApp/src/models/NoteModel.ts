export abstract class NoteModel {
    note_id :number;
    static startID : number = -1; // כדי שהאיבר הראשון יהיה 0 
    title: string; 
    text? : string;

    constructor(title: string, text: string);
    constructor(title: string);

    /* 
    אני רוצה לאפשר 2 בנאים 
    אז את החלק שמכניסים טקסט אני צריכה לעשות כאופציונלי
    */
    constructor(title:string, text?:string) {
        this.note_id = NoteModel.startID++;
        this.title = title;
        this.text = text??"";// אז במקרה שלא מכניסים טקסט לפתק כמו ברשימת קניות אז צריך שיהיה מחרוזת ריקה
    }
    abstract display():string;

}