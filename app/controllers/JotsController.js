import { AppState } from "../AppState.js";
import { Jot } from "../models/Jot.js";
import { jotsService } from "../services/JotsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";


export class JotsController {

    constructor() {
        console.log('JotsController loaded');
        this.drawActiveJot()
        this.drawJotList()
    }

    drawActiveJot() {
        let jot = AppState.activeJot
        let activeJotContent = ''
        if (jot == null) {
            return
        } else {
            setHTML('active-jot', AppState.activeJot.GetActiveJot)
        }

    }

    drawJotList() {
        console.log('drawing jots list')
        let jotsList = AppState.jots
        let jotsListHTML = ''
        jotsList.forEach(jot => { jotsListHTML += jot.GetJotsList });
        console.log('updated jots list html:', jotsListHTML)
        setHTML('jots-list', jotsListHTML)
    }

    setActiveJot(id) {
        console.log('setting jot with id', id, 'as active')
    }

    createNewJot() {
        console.log(`creating new jot`)
        event.preventDefault()
        const form = event.target
        console.log('event.targe:', form)
        const newJotData = getFormData(form)
        console.log('the form output:', newJotData)
        jotsService.createNewJot(newJotData)
        this.drawJotList()
    }
}