import $ from 'jquery'
import { GenerateApp } from "./generateApp"

class App {
    static init() {
        console.log('init....')
        let app = new GenerateApp()
    }
}

App.init()