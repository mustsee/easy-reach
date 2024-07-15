import { defineStore } from 'pinia'

export const useMessagesStore = defineStore('messages', {
  state: () => ({
    customMessages: [],
    messages: [
      {
        custom: false,
        messageType: 'defaultWelcomeMessage',
        name: 'Default welcome message',
        variables: ['guestFirstName', 'senderName', 'dayOfWeek'],
        text: `Hi --guestFirstName--, this is --senderName-- from the Princes Street Hostel, I hope you are well and thanks again for booking with us. Could you please let us know what time you will be arriving on --dayOfWeek--?\nPlease bear in mind we are at the very top of our building and there are a quite a few steps to reach reception level. See you soon!`
      },
      {
        custom: false,
        messageType: 'withArrivalTime',
        name: 'With arrival time',
        variables: ['guestFirstName', 'senderName', 'dayOfWeek', 'checkinTime'],
        text: `Hi --guestFirstName--, this is --senderName-- from the Princes Street Hostel, I hope you are well and thanks again for booking with us. We look forward to welcoming you on --dayOfWeek-- --checkinTime--.\nPlease bear in mind we are at the very top of our building and there are a quite a few steps to reach reception level. See you soon!`
      },
      {
        custom: false,
        messageType: 'earlyCheckin',
        name: 'Early Checkin',
        variables: ['guestFirstName', 'senderName', 'dayOfWeek', 'checkinTime'],
        text: `Hi --guestFirstName--, this is --senderName-- from the Princes Street Hostel, I hope you are well and thanks again for booking with us. We look forward to welcoming you on --dayOfWeek-- --checkinTime--.\nOur official check-in time is at 3pm, however you are very welcome to leave your luggage here at reception, then you are free to explore Edinburgh!\nPlease bear in mind we are at the very top of our building and there are a quite a few steps to reach reception level. See you soon!`
      },
      {
        custom: false,
        messageType: 'lateCheckin',
        name: 'Late Checkin',
        variables: ['guestFirstName', 'senderName', 'roomNumber'],
        text: `Hello --guestFirstName--, this is --senderName-- from the Princes Street Hostel.\nAs you are checking in at a time when the reception will be closed, I have put your key in an envelope with your name on it, next to the check out box which is located directly on your right as you walk through the front door.\nThe door code to enter the hostel is 3578. Your room number is --roomNumber--. Turn to your left as you walk in, go down the corridor and there you will find signs to your room.\nThere are bathrooms and showers on your floor as well as next to reception if yours are busy in the morning.\nAnd please switch off any lights you switch on.\nThere is no one at reception just now (although staff is on site in case of emergency) until tomorrow morning 8.00am so just pop by to say hi!`
      },
      {
        custom: false,
        messageType: 'emailMessage',
        name: 'Email Message',
        variables: ['guestFirstName', 'senderName', 'dayOfWeek'],
        text: `Hi --guestFirstName--, this is --senderName--, I hope you are well and thanks again for booking with us.\nCould you please let us know what time you will be arriving --dayOfWeek-- and also if you have a WhatsApp number? Our WhatsApp number is +44 7553 137828.\nPlease bear in mind we are at the very top of our building and there are a quite a few steps to reach reception level. See you soon!`
      }
      /*       {
        custom: false,
        messageType: 'other',
        name: 'Other',
        variables: [],
        text: `Write here custom message`
      } */
    ]
  }),
  getters: {},
  actions: {
    setCustomMessages(value) {
      this.customMessages = value
    }

    /**********************
     **** ASYNC ACTIONS ****
     **********************/
  }
})
