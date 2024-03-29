import { generateId } from "../utils/GenerateId.js"


export class Jot {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.createdTime = data.createdTime
        this.updatedTime = data.updatedTime
        this.body = data.body
        this.color = data.color

    }
    get GetJotsList() {
        return `
        <h5 style="color: ${this.color}" onclick="app.JotsController.setActiveJot('${this.id}')">${this.name}</h5>
        `
    }
    get GetActiveJot() {
        return `
        <div class="col-3">
            <h4>${this.name}</h4>
            <p>${this.createdTime}</p>
            <p>${this.updatedTime}</p>
            <p>word/characters goes here</p>
         </div>
        <div class="col-8">
            <textarea name="" id="" class="w-100 h-100">${this.body}</textarea>
        </div>
        <div class="col-1">
            <button class="btn border border-dark my-1"><i class="mdi mdi-content-save"></i></button>
            <button class="btn border border-dark my-1"><i class="mdi mdi-delete"></i></button>
        </div>
        
        
        `
    }
}