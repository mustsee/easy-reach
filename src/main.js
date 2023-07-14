import './assets/main.css'

import EditIcon from './assets/icons/Edit.vue'
import EmailIcon from './assets/icons/Email.vue'
import EmailLightIcon from './assets/icons/EmailLight.vue'
import WhatsAppIcon from './assets/icons/WhatsApp.vue'
import CancelIcon from './assets/icons/Cancel.vue'
import ThumbsDownIcon from './assets/icons/ThumbsDown.vue'
import ThumbsUpIcon from './assets/icons/ThumbsUp.vue'
import SentIcon from './assets/icons/Sent.vue'
import LeftTriangleIcon from './assets/icons/LeftTriangle.vue'
import RightTriangleIcon from './assets/icons/RightTriangle.vue'
import RefreshIcon from './assets/icons/Refresh.vue'
import GuestsIcon from './assets/icons/Guests.vue'
import ProgressionIcon from './assets/icons/Progression.vue'
import LoadIcon from './assets/icons/Load.vue'
import ArrowDownIcon from './assets/icons/ArrowDown.vue'

import Vue3Toasity from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { firebaseApp } from './firebase/setup'

const app = createApp(App)

// Load icons globally
app
  .component('EditIcon', EditIcon)
  .component('EmailIcon', EmailIcon)
  .component('EmailLightIcon', EmailLightIcon)
  .component('WhatsAppIcon', WhatsAppIcon)
  .component('CancelIcon', CancelIcon)
  .component('ThumbsDownIcon', ThumbsDownIcon)
  .component('ThumbsUpIcon', ThumbsUpIcon)
  .component('SentIcon', SentIcon)
  .component('LeftTriangleIcon', LeftTriangleIcon)
  .component('RightTriangleIcon', RightTriangleIcon)
  .component('RefreshIcon', RefreshIcon)
  .component('GuestsIcon', GuestsIcon)
  .component('ProgressionIcon', ProgressionIcon)
  .component('LoadIcon', LoadIcon)
  .component('ArrowDownIcon', ArrowDownIcon)

app.use(Vue3Toasity, {
  autoClose: 3000,
  transition: 'slide',
  hideProgressBar: true
})

app.use(createPinia())
app.use(router)

app.mount('#app')
