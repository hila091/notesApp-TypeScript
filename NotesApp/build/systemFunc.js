import { MeetingNote } from "./models/MeetingNote.js";
import { ShoppingNote } from "./models/ShoppingNote.js";
import { TaskNote } from "./models/TaskNote.js";
//-----------------------------------------------------
import { createMeetingNote, createShoppingNote, createTaskNote } from "./functions.js";
// פונקציות ליצירת העמוד 
// פונקציה ליצירת כל הפתקים 
export function updateDisplay(notes) {
    const noteDiv = document.getElementById("mainDisplayDiv");
    noteDiv.innerHTML = "";
    for (let i = 0; i < notes.length; i++) {
        let note = document.createElement("div");
        note.style.padding = "10px";
        note.style.textAlign = "center";
        note.style.display = "flex";
        note.style.flexDirection = "column";
        if (notes[i] instanceof MeetingNote) {
            note.style.border = "2px solid #28c7a4ff";
            note.style.backgroundColor = "#80c2c0ff";
            note.style.color = "#060329ff";
        }
        if (notes[i] instanceof TaskNote) {
            note.style.border = "2px solid #c72828ff";
            note.style.backgroundColor = "#c28080ff";
            note.style.color = "#290303ff";
        }
        if (notes[i] instanceof ShoppingNote) {
            note.style.border = "2px solid #cfa83dff";
            note.style.backgroundColor = "#bec280ff";
            note.style.color = "#292203ff";
        }
        note.innerHTML = notes[i].display();
        const removeNote = document.createElement("button");
        removeNote.textContent = "הסרה";
        removeNote.style.backgroundColor = "#ffffffff";
        removeNote.style.color = "#000000ff";
        removeNote.style.padding = "2px";
        removeNote.style.fontSize = "2vw";
        removeNote.id = notes[i].note_id.toString();
        removeNote.addEventListener("click", () => {
            let noteID = Number(removeNote.id);
            let index;
            for (let k = 0; k < notes.length; k++)
                if (notes[i].note_id = noteID) {
                    notes.splice(i, 1);
                    break;
                }
            updateDisplay(notes);
        });
        note.appendChild(removeNote);
        noteDiv.appendChild(note);
    }
}
// return HTMLElement or HTMLDivElement
export function noteSelecting() {
    const mainDiv = document.createElement("div");
    const title = document.createElement("h1");
    title.innerHTML = "- צור פתק חדש -";
    title.style.fontSize = "3vw";
    title.style.textAlign = "center";
    title.style.backgroundColor = "#73566dff";
    mainDiv.appendChild(title);
    const containBtns = document.createElement("div");
    containBtns.style.display = "flex";
    containBtns.style.margin = "5vh";
    containBtns.style.gap = "5vh";
    containBtns.style.justifyContent = "center";
    //  דיב של היצירת פתק שלא רואים בהתחלה עד שלא לוחצים על אחד מהכפתורים
    var creatingDiv = document.createElement("div");
    creatingDiv.style.backgroundColor = "#73566dff";
    creatingDiv.style.display = "flex";
    creatingDiv.style.margin = "5vh";
    creatingDiv.style.gap = "2vh";
    creatingDiv.style.flexDirection = "column";
    creatingDiv.style.alignItems = "flex-end";
    creatingDiv.style.padding = "20px";
    // כפתורי בחירה לסוג הפתק
    //-------------------------------------------------------meetingNoteBTN
    const meetingNoteBTN = document.createElement("button");
    meetingNoteBTN.textContent = "פגישה חדשה";
    meetingNoteBTN.style.backgroundColor = "#80c2c0ff";
    meetingNoteBTN.style.color = "#060329ff";
    meetingNoteBTN.style.padding = "10px 20px";
    meetingNoteBTN.style.fontSize = "2vw";
    meetingNoteBTN.addEventListener("click", () => createMeetingNote(creatingDiv));
    //--------------------------------------------------------shoppingNoteBTN
    const shoppingNoteBTN = document.createElement("button");
    shoppingNoteBTN.textContent = "קנייה חדשה";
    shoppingNoteBTN.style.backgroundColor = "#cfa83dff";
    shoppingNoteBTN.style.color = "#292203ff";
    shoppingNoteBTN.style.padding = "10px 20px";
    shoppingNoteBTN.style.fontSize = "2vw";
    shoppingNoteBTN.addEventListener("click", () => createShoppingNote(creatingDiv));
    //-------------------------------------------------------taskNoteBTN
    const taskNoteBTN = document.createElement("button");
    taskNoteBTN.textContent = "משימה חדשה";
    taskNoteBTN.style.backgroundColor = "#ad5050ff";
    taskNoteBTN.style.color = "#290303ff";
    taskNoteBTN.style.padding = "10px 20px";
    taskNoteBTN.style.fontSize = "2vw";
    taskNoteBTN.addEventListener("click", () => createTaskNote(creatingDiv));
    containBtns.appendChild(taskNoteBTN);
    containBtns.appendChild(shoppingNoteBTN);
    containBtns.appendChild(meetingNoteBTN);
    mainDiv.appendChild(containBtns);
    // ---------------------------------------------------
    mainDiv.appendChild(creatingDiv);
    return mainDiv;
}
