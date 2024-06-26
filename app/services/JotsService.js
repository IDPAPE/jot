import { AppState } from "../AppState.js"
import { Jot } from "../models/Jot.js"
import { loadState, saveState } from "../utils/Store.js"

class JotsService {

    createNewJot(newJotData) {
        let newJot = new Jot(newJotData)
        console.log('new jot!', newJot)
        AppState.jots.push(newJot)
        AppState.jotCount++
        this.saveJots()
    }

    deleteJot(id) {
        let foundJot = AppState.jots.findIndex(jot => jot.id == id)
        console.log('found jot with index', foundJot)
        AppState.jots.splice(foundJot, 1)
        console.log(AppState.jots)
        AppState.jotCount--
        this.saveJots()

    }

    setActiveJot(id) {
        let foundJot = AppState.jots.find(jot => jot.id == id)
        // console.log('setting active jot in the service', jot)
        AppState.activeJot = foundJot
        // console.log(AppState.activeJot)
        this.saveJots()
    }

    updateBody(bodyText) {
        // console.log(bodyText)
        let changedJot = AppState.jots.find(jot => jot.id == AppState.activeJot.id)
        // console.log('changing the body of', changedJot)
        changedJot.body = bodyText.text
        changedJot.updatedTime = new Date()
        // console.log('new body:', changedJot)
        this.saveJots()
    }

    saveJots() {
        saveState('jots', AppState.jots)
    }

    loadJots() {
        const localStorageJots = loadState('jots', [Jot])
        AppState.jots = localStorageJots
        AppState.jotCount = AppState.jots.length
    }
}



export const jotsService = new JotsService()