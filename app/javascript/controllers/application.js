import { Application } from "@hotwired/stimulus"
import { React } from "react"
import { ReactDom } from "react-dom"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }
