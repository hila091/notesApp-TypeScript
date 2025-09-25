import { NoteModel } from "./NoteModel.js";
export class ShoppingNote extends NoteModel {
    constructor(product, quantity, text) {
        super(text);
        this.quantity = quantity;
        this.product = product;
    }
    display() {
        return ` ${this.product} ${this.quantity} :צריך לקנות <br> הערות: ${this.text}`;
    }
}
