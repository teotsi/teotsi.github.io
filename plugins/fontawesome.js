import Vue from 'vue'
import {config, library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faDesktop} from "@fortawesome/free-solid-svg-icons/faDesktop";
import {faTools} from "@fortawesome/free-solid-svg-icons/faTools";
import {faCode} from "@fortawesome/free-solid-svg-icons/faCode";
import {faMoon} from "@fortawesome/free-solid-svg-icons/faMoon";
import {faSun} from "@fortawesome/free-solid-svg-icons/faSun";
import {faJsSquare} from "@fortawesome/free-brands-svg-icons/faJsSquare";
import {faVuejs} from "@fortawesome/free-brands-svg-icons/faVuejs";
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact";
import {faBootstrap} from "@fortawesome/free-brands-svg-icons/faBootstrap";
import {faSass} from "@fortawesome/free-brands-svg-icons/faSass";
import {faPython} from "@fortawesome/free-brands-svg-icons/faPython";
import {faNodeJs} from "@fortawesome/free-brands-svg-icons/faNodeJs";
import {faAws} from "@fortawesome/free-brands-svg-icons/faAws";
import {faJava} from "@fortawesome/free-brands-svg-icons/faJava";
import {faAndroid} from "@fortawesome/free-brands-svg-icons/faAndroid";
import {faNetworkWired} from "@fortawesome/free-solid-svg-icons/faNetworkWired";
import {faNpm} from "@fortawesome/free-brands-svg-icons/faNpm";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faDesktop, faTools, faCode, faMoon, faSun)
library.add(faJsSquare, faVuejs, faReact, faBootstrap, faSass, faPython, faNodeJs, faAws, faJava, faAndroid,
  faNetworkWired, faNpm, faGithub, faLinkedin)
// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)
