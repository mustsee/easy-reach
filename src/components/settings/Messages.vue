<script setup>
import { computed, ref, watch } from 'vue'
import { Timestamp } from 'firebase/firestore'
import { queryByCollection, add, del } from '../../firebase/firestore'
import SelectSkeleton from './../reusable/SelectSkeleton.vue'

const messages = ref(await queryByCollection('messages', 'created_at'))

const name = ref('')
const text = ref('')
const currentVariable = ref('')
const variablesSelected = ref([])

const showMessages = ref(true)

const textareaRef = ref(null)

// Put this in firestore
const variables = ['guestFirstName', 'senderName', 'dayOfWeek', 'checkinTime', 'roomNumber']

// Remove variable from variablesSelected if user erase it in text
watch(text, (newText) => {
  if (variablesSelected.value.length) {
    variablesSelected.value.forEach((variable) => {
      const isInText = newText.includes(`--${variable}--`)
      if (!isInText) {
        variablesSelected.value = variablesSelected.value.filter(
          (selected) => selected !== variable
        )
      }
    })
  }
})

// If the user choose a variable from the select, add it in the text
watch(currentVariable, (newVariable) => {
  if (!newVariable) return
  // Update the text
  // https://stackoverflow.com/questions/11076975/how-to-insert-text-into-the-textarea-at-the-current-cursor-position
  const startPos = textareaRef.value.selectionStart
  const endPos = textareaRef.value.selectionEnd
  text.value =
    text.value.substring(0, startPos) +
    `--${newVariable}--` +
    text.value.substring(endPos, text.value.length)

  // Update the list - variablesSelected
  variablesSelected.value.push(newVariable)
  currentVariable.value = ''
})

// camelCase
const getMessageType = (name) => {
  let res = ''
  const splitOnSpace = name.split(' ')
  splitOnSpace.forEach((element, index) => {
    if (index === 0) {
      // First index should be lowercase
      res += element.toLowerCase()
    } else {
      // The others capitalized
      res += element.charAt(0).toUpperCase() + element.slice(1)
    }
  })
  return res
}


// Click on variable chip
const handleCancelSelection = (selection) => {
  console.log('selection', selection)
  text.value = text.value.replace(`--${selection}--`, '')
  variablesSelected.value = variablesSelected.value.filter((selected) => selected !== selection)
}

const addMessage = async () => {
  const message = {
    messageType: getMessageType(name.value),
    variables: variablesSelected.value,
    name: name.value,
    text: JSON.stringify(text.value),
    created_at: Timestamp.now()
  }
  await add('messages', message)
  const updatedMessages = await queryByCollection('messages', 'created_at')
  messages.value = updatedMessages
  reset()
}

const deleteMessage = async (id) => {
  await del('messages', id)
  const updatedMessages = await queryByCollection('messages', 'created_at')
  messages.value = updatedMessages
  // store.setSenders(senders) TODO: Put in store !
}

const preventAddmessage = computed(() => {
  if (!text.value || !name.value) return true
  return false
})

const reset = () => {
  text.value = ''
  name.value = ''
  currentVariable.value = ''
  variablesSelected.value = []
}
</script>

<template>
  <div>
    <div class="text-xl mb-4 flex items-center">
      Custom messages
      <span
        @click="showMessages = !showMessages"
        :class="[
          !showMessages && 'rotate-180',
          'inline-block w-7 h-7 p-1 ml-2 bg-gray-200 rounded-lg cursor-pointer'
        ]"
        :title="showMessages ? 'Hide custom messages' : 'Display custom messages'"
      >
        <ArrowDownIcon />
      </span>
    </div>
    <Transition>
      <table v-if="showMessages" class="table-auto mb-4">
        <thead>
          <tr>
            <th class="font-medium border py-1 px-4">Name</th>
            <th class="font-medium border py-1 px-4">Variables</th>
            <th class="font-medium border py-1 px-4">Text</th>
            <th class="font-medium border py-1 px-3">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="message in messages" :key="message.id">
            <td class="border py-1 px-4 text-center">{{ message.name }}</td>
            <td class="border py-1 px-4 text-center">
              <ul>
                <li v-for="variable in message.variables" :key="variable">
                  {{ variable }}
                </li>
              </ul>
            </td>
            <td class="border py-2 px-4 whitespace-pre-wrap">{{ JSON.parse(message.text) }}</td>
            <td
              @click="deleteMessage(message.id)"
              class="text-sm border hover:bg-gray-100 py-1 px-2 text-center cursor-pointer"
            >
              DEL
            </td>
          </tr>
        </tbody>
      </table>
    </Transition>
    <input
      v-model="name"
      type="text"
      placeholder="Add message name"
      class="py-2 px-4 w-full md:w-1/4 border border-gray-200 rounded focus:shadow-md focus:outline-none mb-4"
    />
    <SelectSkeleton class="mb-4 w-full md:w-1/4">
      <select v-model="currentVariable" class="select" name="variable" id="variable">
        <option disabled value="">Variables</option>
        <option
          v-for="variable in variables"
          :value="variable"
          :disabled="variablesSelected.includes(variable)"
        >
          {{ variable }}
        </option>
      </select>
    </SelectSkeleton>
    <div class="flex flex-wrap">
      <div
        v-for="selected in variablesSelected"
        @click="handleCancelSelection(selected)"
        :key="selected"
        class="border py-1 px-3 rounded-full flex bg-gray-100 cursor-pointer mr-3 mb-4"
      >
        {{ selected }}
        <div class="ml-2 mr-1">x</div>
      </div>
    </div>
    <textarea
      ref="textareaRef"
      v-model="text"
      rows="6"
      spellcheck="false"
      placeholder="Text to be sent to the guest"
      class="flex w-full md:w-2/3 py-2 px-4 focus:shadow-sm focus:outline-none border"
      name="output"
    ></textarea>
    <div class="mt-4">
      <button
        @click="addMessage"
        :class="`${
          preventAddmessage && 'opacity-25 pointer-events-none'
        } bg-white hover:bg-gray-100 py-2 px-4 border border-gray-200 rounded w-24`"
      >
        Add
      </button>
      <button
        @click="reset"
        class="ml-4 bg-white hover:bg-gray-100 px-4 py-2 border border-gray-200 rounded w-24"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
