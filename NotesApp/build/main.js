import { noteSelecting } from "./systemFunc.js";
const rootDiv = document.getElementById("root");
rootDiv.style.display = "flex";
rootDiv.style.flexDirection = "column"; // אם רוצים שמסודר אנכית
rootDiv.style.justifyContent = "center";
rootDiv.appendChild(noteSelecting());
// מערך פתקים מרכזי
export const notes = [];
// לוח הפתקים
const noteDiv = document.createElement("div");
noteDiv.id = "mainDisplayDiv";
noteDiv.style.display = "flex";
noteDiv.style.flexDirection = "column";
noteDiv.style.paddingRight = "10vw";
noteDiv.style.paddingLeft = "10vw";
rootDiv.appendChild(noteDiv);
