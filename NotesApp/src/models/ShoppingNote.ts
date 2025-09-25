import { NoteModel } from "./NoteModel.js";

export class ShoppingNote extends NoteModel {
    quantity: number;
    product: string;

    constructor(product: string,quantity: number, text:string) {
     super(text); 
     this.quantity= quantity;
     this.product =product;
    }

    display(): string {
        return ` ${this.product} ${this.quantity} :צריך לקנות <br> הערות: ${this.text}`
    }
}