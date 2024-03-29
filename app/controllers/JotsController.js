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

    drawJotTitle() {
        setHTML('jots-title', `Your Jots (${AppState.jotCount})`)
    }

    drawActiveJot() {
        let jot = AppState.activeJot
        let activeJotContent = ''

        if (jot == null) {
            return
        } else {
            // console.log('its not null!')
            console.log('drawing active jot', jot)
            // console.log('appstate.activeJot:', AppState.activeJot)
            setHTML('active-jot', AppState.activeJot.GetActiveJot)
        }
    }

    drawJotList() {
        console.log('drawing jots list')
        let jotsList = AppState.jots
        let jotsListHTML = ''
        jotsList.forEach(jot => { jotsListHTML += jot.GetJotsList });
        // console.log('updated jots list html:', jotsListHTML)
        setHTML('jots-list', jotsListHTML)
    }

    setActiveJot(id) {
        console.log('setting jot with id', id, 'as active')
        // console.log(activeJot)
        console.log('jots before service', AppState.jots)
        jotsService.setActiveJot(id)
        this.drawActiveJot()
    }

    createNewJot() {
        // console.log(`creating new jot`)
        event.preventDefault()
        const form = event.target
        // console.log('event.targe:', form)
        const newJotData = getFormData(form)
        // console.log('the form output:', newJotData)
        jotsService.createNewJot(newJotData)
        // @ts-ignore
        form.reset()
        this.drawJotList()
        this.drawJotTitle()
    }

    deleteJot(id) {
        console.log('deleting jot with id', id)
        jotsService.deleteJot(id)
        AppState.activeJot = null
        this.drawActiveJot()
        this.drawJotList()
        this.drawJotTitle()
    }

    updateBody() {
        event.preventDefault()
        let textAreaContent = event.target
        // console.log('save body function', textAreaContent)
        let newBody = getFormData(textAreaContent)
        jotsService.updateBody(newBody)
    }
}