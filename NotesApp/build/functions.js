import { MeetingNote } from "./models/MeetingNote.js";
import { ShoppingNote } from "./models/ShoppingNote.js";
import { TaskNote } from "./models/TaskNote.js";
import { updateDisplay } from "./systemFunc.js";
import { notes } from "./main.js";
// ---------------------------------------------------יצירת פתק פגישה 
export function createMeetingNote(creatingDiv) {
    // ניקוי מכל הרכיבים הקודמים שהיו בו 
    creatingDiv.innerHTML = "";
    //(location: string,participants: string[],date:Date, title:string, text:string)
    // הגדרת מערך משתתפים לפגישה 
    var participants = [];
    const simpleDiv = document.createElement("div");
    simpleDiv.style.gap = "2vh";
    simpleDiv.style.display = "flex";
    const anotherSimpleDiv = document.createElement("div");
    anotherSimpleDiv.style.gap = "2vh";
    anotherSimpleDiv.style.display = "flex";
    // תאריך פגישה 
    const date = document.createElement("input");
    date.type = "date";
    date.placeholder = "תאריך";
    simpleDiv.appendChild(date);
    // מיקום פגישה
    const location = document.createElement("input");
    location.type = "text";
    location.placeholder = "מיקום";
    simpleDiv.appendChild(location);
    // כותרת פגישה
    const title = document.createElement("input");
    title.type = "text";
    title.placeholder = "שם פגישה";
    simpleDiv.appendChild(title);
    creatingDiv.appendChild(simpleDiv);
    // משתתפים בפגישה
    const participant = document.createElement("input");
    participant.type = "text";
    participant.placeholder = "הזן פרטי משתתף";
    // דיב שיכיל את כל הרשימה 
    const allParticipants = document.createElement("div");
    // הוספת משתתף
    const addParticipant = document.createElement("button");
    addParticipant.textContent = "הוספה";
    addParticipant.style.backgroundColor = "#1f1d1dff";
    addParticipant.style.color = "#ffffffff";
    addParticipant.style.padding = "10px 20px";
    addParticipant.style.fontSize = "2vw";
    addParticipant.addEventListener("click", () => {
        if (participant.value != "") {
            participants.push(participant.value);
            participant.value = "";
            let html = "<ul>";
            for (let i = 0; i < participants.length; i++)
                html += `<li>${participants[i]} </li>`;
            html += "</ul>";
            allParticipants.innerHTML = html;
        }
    });
    anotherSimpleDiv.appendChild(addParticipant);
    anotherSimpleDiv.appendChild(participant);
    creatingDiv.appendChild(anotherSimpleDiv);
    creatingDiv.appendChild(allParticipants);
    //  הערות 
    const additionalNotes = document.createElement("input");
    additionalNotes.type = "text";
    additionalNotes.placeholder = "הערות נוספות";
    additionalNotes.style.width = "60vh";
    additionalNotes.style.height = "10vh";
    creatingDiv.appendChild(additionalNotes);
    //  כפתור שליחה 
    const sendAndCreate = document.createElement("button");
    sendAndCreate.textContent = "הוסף פתק";
    sendAndCreate.style.backgroundColor = "#1f1d1dff";
    sendAndCreate.style.color = "#ffffffff";
    sendAndCreate.style.padding = "10px 20px";
    sendAndCreate.style.fontSize = "2vw";
    sendAndCreate.addEventListener("click", () => {
        if (participants.length != 0 && title.value !== "" && date.value !== "" && location.value !== "") {
            let newTaskNote = new MeetingNote(location.value, participants, new Date(date.value), title.value, additionalNotes.value);
            createNote(newTaskNote);
        }
    });
    creatingDiv.appendChild(sendAndCreate);
}
// ---------------------------------------------------יצירת פתק לקניות  
export function createShoppingNote(creatingDiv) {
    // ניקוי מכל הרכיבים הקודמים שהיו בו 
    creatingDiv.innerHTML = "";
    //constructor(product: number,quantity: number, title:string)
    const simpleDiv = document.createElement("div");
    simpleDiv.style.gap = "10vh";
    simpleDiv.style.display = "flex";
    //  כמות 
    const quantity = document.createElement("input");
    quantity.type = "number";
    quantity.placeholder = "כמות";
    simpleDiv.appendChild(quantity);
    //  שם מוצר
    const product = document.createElement("input");
    product.type = "text";
    product.style.width = "80vh";
    product.placeholder = "שם מוצר";
    simpleDiv.appendChild(product);
    creatingDiv.appendChild(simpleDiv);
    //  הערות 
    const additionalNotes = document.createElement("input");
    additionalNotes.type = "text";
    additionalNotes.placeholder = "הערות נוספות";
    additionalNotes.style.width = "90vh";
    additionalNotes.style.height = "10vh";
    creatingDiv.appendChild(additionalNotes);
    //  כפתור שליחה 
    const sendAndCreate = document.createElement("button");
    sendAndCreate.textContent = "הוסף פתק";
    sendAndCreate.style.backgroundColor = "#1f1d1dff";
    sendAndCreate.style.color = "#ffffffff";
    sendAndCreate.style.padding = "10px 20px";
    sendAndCreate.style.fontSize = "2vw";
    sendAndCreate.addEventListener("click", () => {
        if (product.value !== "" && quantity.value !== "") {
            let newTaskNote = new ShoppingNote(product.value, Number(quantity.value), additionalNotes.value);
            createNote(newTaskNote);
        }
    });
    creatingDiv.appendChild(sendAndCreate);
}
// ---------------------------------------------------יצירת פתק משימה  
export function createTaskNote(creatingDiv) {
    // ניקוי מכל הרכיבים הקודמים שהיו בו 
    creatingDiv.innerHTML = "";
    //constructor(title: string, date:Date,deadline:Date,text:string ) 
    const simpleDiv = document.createElement("div");
    simpleDiv.style.gap = "5vh";
    simpleDiv.style.display = "flex";
    // כותרת משימה
    const title = document.createElement("input");
    title.type = "text";
    title.style.width = "60vh";
    title.placeholder = "שם משימה";
    creatingDiv.appendChild(title);
    // תאריך סיום 
    const endDate = document.createElement("input");
    endDate.type = "date";
    simpleDiv.appendChild(endDate);
    // תווית תאריך סיום
    const end = document.createElement("h2");
    end.innerText = ":הזן תאריך סיום";
    simpleDiv.appendChild(end);
    // תאריך התחלה 
    const startDate = document.createElement("input");
    startDate.type = "date";
    simpleDiv.appendChild(startDate);
    // תווית תאריך התחלה
    const start = document.createElement("h2");
    start.innerText = ":הזן תאריך התחלה";
    simpleDiv.appendChild(start);
    creatingDiv.appendChild(simpleDiv);
    //  הערות 
    const additionalNotes = document.createElement("input");
    additionalNotes.type = "text";
    additionalNotes.placeholder = "הערות נוספות";
    additionalNotes.style.width = "90vh";
    additionalNotes.style.height = "10vh";
    creatingDiv.appendChild(additionalNotes);
    //  כפתור שליחה 
    const sendAndCreate = document.createElement("button");
    sendAndCreate.textContent = "הוסף פתק";
    sendAndCreate.style.backgroundColor = "#1f1d1dff";
    sendAndCreate.style.color = "#ffffffff";
    sendAndCreate.style.padding = "10px 20px";
    sendAndCreate.style.fontSize = "2vw";
    sendAndCreate.addEventListener("click", () => {
        if (title.value !== "" && endDate.value !== "" && startDate.value !== "") {
            let newTaskNote = new TaskNote(title.value, new Date(startDate.value), new Date(endDate.value), additionalNotes.value);
            createNote(newTaskNote);
        }
    });
    creatingDiv.appendChild(sendAndCreate);
}
// ---------------------------- כפתור ליצירת פתק
const createNote = (note) => {
    notes.push(note);
    updateDisplay(notes);
};
