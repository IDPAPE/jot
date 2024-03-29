import { AppState } from "../AppState.js"
import { Jot } from "../models/Jot.js"


class JotsService {

    createNewJot(newJotData) {
        let newJot = new Jot(newJotData)
        console.log('new jot!', newJot)
        AppState.jots.push(newJot)

    }
}



export const jotsService = new JotsService()