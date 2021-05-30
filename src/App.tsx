import { defineComponent, reactive, ref } from 'vue'
const img = require('./assets/logo.png')
export default defineComponent({
  setup() {
    const state = reactive({
      name: 'jokcy',
    })

    const numberRef = ref(1)

    return () => {
      const number = numberRef.value
      return (
        <div id="app">
          <img src={img} alt="Vue logo"></img>
          <p>{state.name + number}</p>
        </div>
      )
    }
  },
})
