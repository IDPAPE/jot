import { ExamplesController } from "./controllers/ExamplesController.js";
import { HomeController } from "./controllers/HomeController.js";
import { JotsController } from "./controllers/JotsController.js";
import { Router } from "./utils/Router.js";

export const router = new Router([
  {
    path: '',
    controllers: [JotsController],
    view: 'app/views/JotsView.html'
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])