import { AppState } from "../AppState.js"
import { generateId } from "../utils/GenerateId.js"


export class Jot {
    constructor(data) {
        this.id = generateId()
        this.name = data.name
        this.createdTime = data.createdTime == undefined ? new Date() : new Date(data.createdTime)
        this.updatedTime = data.updatedTime == undefined ? new Date() : new Date(data.updatedTime)
        this.body = data.body || ''
        this.color = data.color

    }
    get GetJotsList() {
        return `
        <h5 style="color: ${this.color}" onclick="app.JotsController.setActiveJot('${this.id}')">${this.name} <hr class="m-1" /></h5>
        `
    }
    get GetActiveJot() {
        return `
        <div class="col-lg-2 col-12">
            <h4 class="mt-2 style="color: ${this.color}">${this.name}<hr /></h4>
            <p>${this.GetCreatedTime}</p>
            <p>${this.GetUpdatedTime}</p>
            <p>word/characters goes here</p>
        </div>
        <div class="col-lg-10 col-12">
        <form onsubmit="app.JotsController.updateBody()" id="jot-body">
            <textarea name="text" id="jot-body" class="jot-body mt-3">${this.body}</textarea>
            <button type="submit" class="btn border border-dark my-1"><i class="mdi mdi-content-save"></i></button>
            <button type="button" class="btn border border-dark my-1" onclick="app.JotsController.deleteJot('${this.id}')"><i class="mdi mdi-delete"></i></button>
        </div>
        `
    }
    get GetCreatedTime() {
        return `${this.createdTime.toLocaleDateString()}, ${this.createdTime.toLocaleTimeString()}`
    }

    get GetUpdatedTime() {
        return `${this.updatedTime.toLocaleDateString()}, ${this.updatedTime.toLocaleTimeString()}`
    }
}