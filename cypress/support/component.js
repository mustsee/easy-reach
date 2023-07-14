// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '../../src/App.vue';

const app = createApp(App);
app.use(createPinia());

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Import global styles
import '@/assets/main.css'
import EditIcon from '../../src/assets/icons/Edit.vue'
import EmailIcon from '../../src/assets/icons/Email.vue'
import EmailLightIcon from '../../src/assets/icons/EmailLight.vue'
import WhatsAppIcon from '../../src/assets/icons/WhatsApp.vue'
import CancelIcon from '../../src/assets/icons/Cancel.vue'
import ThumbsDownIcon from '../../src/assets/icons/ThumbsDown.vue'
import ThumbsUpIcon from '../../src/assets/icons/ThumbsUp.vue'
import SentIcon from '../../src/assets/icons/Sent.vue'
import LeftTriangleIcon from '../../src/assets/icons/LeftTriangle.vue'
import RightTriangleIcon from '../../src/assets/icons/RightTriangle.vue'
import RefreshIcon from '../../src/assets/icons/Refresh.vue'
import GuestsIcon from '../../src/assets/icons/Guests.vue'
import ProgressionIcon from '../../src/assets/icons/Progression.vue'
import LoadIcon from '../../src/assets/icons/Load.vue'
import ArrowDownIcon from '../../src/assets/icons/ArrowDown.vue'

import { mount } from 'cypress/vue'

Cypress.Commands.add('mount', mount)

Cypress.Commands.add('mount', (component, options = {}) => {
  // Setup options object
  options.global = options.global || {}
  options.global.components = options.global.components || {}

  // Register global components
  options.global.components['EditIcon'] = EditIcon
  options.global.components['EmailIcon'] = EmailIcon
  options.global.components['EmailLightIcon'] = EmailLightIcon
  options.global.components['WhatsAppIcon'] = WhatsAppIcon
  options.global.components['CancelIcon'] = CancelIcon
  options.global.components['ThumbsDownIcon'] = ThumbsDownIcon
  options.global.components['ThumbsUpIcon'] = ThumbsUpIcon
  options.global.components['SentIcon'] = SentIcon
  options.global.components['LeftTriangleIcon'] = LeftTriangleIcon
  options.global.components['RightTriangleIcon'] = RightTriangleIcon
  options.global.components['RefreshIcon'] = RefreshIcon
  options.global.components['GuestsIcon'] = GuestsIcon
  options.global.components['ProgressionIcon'] = ProgressionIcon
  options.global.components['LoadIcon'] = LoadIcon
  options.global.components['ArrowDownIcon'] = ArrowDownIcon

  return mount(component, options)
})

// Example use:
// cy.mount(MyComponent)