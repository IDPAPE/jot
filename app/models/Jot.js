

export class Jot {
    constructor(data) {
        this.name = data.name
        this.createdTime = data.createdTime
        this.updatedTime = data.updatedTime
        this.body = data.body

    }
    get GetJotsList() {
        return `
        
        
        
        
        
        `
    }
    get GetActiveJot() {
        return `
        <div class="col-3">
            <h4>Jot Title goes here</h4>
            <p>created d/t goes here</p>
            <p>updated d/t goes here</p>
            <p>word/characters goes here</p>
         </div>
        <div class="col-8">
            <textarea name="" id="" class="w-100 h-100">

            </textarea>
        </div>
        <div class="col-1">
            <button class="btn border border-dark my-1"><i class="mdi mdi-content-save"></i></button>
            <button class="btn border border-dark my-1"><i class="mdi mdi-delete"></i></button>
        </div>
        
        
        `
    }
}