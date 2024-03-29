import { Jot } from './models/Jot.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {Jot} */
  activeJot = null

  jots = [
    new Jot({
      name: 'exampleJot',
      createdTime: Date(),
      updatedTime: Date(),
      body: 'Note text goes here',
      color: '#000000'


    })
  ]




  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())