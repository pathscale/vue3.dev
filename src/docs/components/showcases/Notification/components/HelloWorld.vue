<template>
  <div class="hello">
    <spacing bottom="4">
      <h1>{{ msg }}</h1>
      <p>Click a button to show a Toast</p>
    </spacing>
    <div class="buttons">
      <v-button type="is-primary" @click="toast('is-primary')">
        Primary
      </v-button>
      <v-button type="is-success" @click="toast('is-success')">
        Success
      </v-button>
      <v-button type="is-danger" @click="toast('is-danger')">
        Danger
      </v-button>
      <v-button type="is-warning" @click="toast('is-warning')">
        Warning
      </v-button>
      <v-button type="is-info" @click="toast('is-info')">
        Info
      </v-button>
      <v-button type="is-link" @click="toast('is-link')">
        Link
      </v-button>
      <v-button type="is-light" @click="toast('is-light')">
        Light
      </v-button>
      <v-button type="is-dark" @click="toast('is-dark')">
        Dark
      </v-button>
      <v-button type="is-text" @click="toast('is-text')">
        Text
      </v-button>
    </div>

    <spacing :vertical="4">
      <h2>Do your changes</h2>
      <spacing :vertical="2">
        <div class="c-two-columns">
          <div>
            <fieldset>
              <label class="c-label" for="message">Message</label>
              <input id="message" v-model="state.message" type="text" />
            </fieldset>
            <fieldset>
              <label class="c-label">Position</label>
              <label v-for="position in positions" :key="position.key" class="c-label">
                <input
                  name="position"
                  type="radio"
                  :value="position.value"
                  v-model="state.options.position"
                  @change="toast" />{{ position.name }}
              </label>
            </fieldset>
            <fieldset>
              <label class="c-label">
                Duration: {{ state.options.duration }}{{ state.options.duration ? 'ms' : '' }}
              </label>
              <input
                type="range"
                min="1000"
                max="10000"
                v-model="state.options.duration"
                :disabled="state.options.duration === false" />
              <label class="c-label">
                <input type="checkbox" @change="changeDuration" />
                Disable duration
              </label>
            </fieldset>
            <fieldset>
              <label class="c-label">
                <input
                  type="checkbox"
                  checked
                  @change="state.options.dismissible = $event.target.checked" />
                Dismissible on click
              </label>
            </fieldset>
            <fieldset>
              <label class="c-label">
                <input type="checkbox" @change="state.options.queue = $event.target.checked" />
                Enqueue
              </label>
            </fieldset>
            <fieldset>
              <label class="c-label"> Max Toasts</label>
              <input type="number" v-model="state.options.maxToasts" placeholder="false" />
            </fieldset>
            <fieldset>
              <label class="c-label">
                <input
                  type="checkbox"
                  checked
                  @change="state.options.pauseOnHover = $event.target.checked" />
                Pause on hover
              </label>
            </fieldset>
            <fieldset>
              <label class="c-label">
                <input
                  type="checkbox"
                  checked
                  @change="state.options.useDefaultCss = $event.target.checked" />
                Use default CSS
              </label>
            </fieldset>
          </div>
          <div class="c-column-right">
            <div class="c-code">
              <code>$toast(</code>
              <spacing left="2">
                <code class="c-code--string">"{{ state.message }}"</code>
                <code v-if="hasOptions">,</code>
              </spacing>
              <spacing v-if="hasOptions" left="2">
                <code>{</code>
                <spacing left="4">
                  <span class="c-code--object-line" v-if="state.options.type">
                    <code>type:</code>
                    <code class="c-code--string">{{ state.options.type }}</code>
                  </span>
                  <span class="c-code--object-line" v-if="state.options.position">
                    <code>position:</code>
                    <code class="c-code--string">"{{ state.options.position }}"</code>
                  </span>
                  <span class="c-code--object-line" v-if="state.options.duration !== 4000">
                    <code>duration:</code>
                    <code class="c-code--number">{{ state.options.duration }}</code>
                  </span>

                  <span class="c-code--object-line" v-if="state.options.dismissible === false">
                    <code>dismissible:</code>
                    <code class="c-code--number">{{ state.options.dismissible }}</code>
                  </span>

                  <span class="c-code--object-line" v-if="state.options.queue">
                    <code>queue:</code>
                    <code class="c-code--number">{{ state.options.queue }}</code>
                  </span>

                  <span
                    class="c-code--object-line"
                    v-if="state.options.maxToasts || state.options.maxToasts === 0">
                    <code>max:</code>
                    <code class="c-code--number">{{ state.options.maxToasts }}</code>
                  </span>

                  <span class="c-code--object-line" v-if="state.options.pauseOnHover === false">
                    <code>pauseOnHover:</code>
                    <code class="c-code--number">{{ state.options.pauseOnHover }}</code>
                  </span>

                  <span class="c-code--object-line" v-if="state.options.useDefaultCss === false">
                    <code>useDefaultCss:</code>
                    <code class="c-code--number">{{ state.options.useDefaultCss }}</code>
                  </span>
                </spacing>
                <code>}</code>
              </spacing>
              <code>)</code>
            </div>
            <v-button @click="toast" class="v--default">
              Show it
            </v-button>
          </div>
        </div>
      </spacing>
    </spacing>
  </div>
</template>

<script>
import { reactive, computed, inject } from 'vue'
import { VButton } from '@pathscale/vue3-ui'
import Spacing from './Spacing.vue'
import { Positions } from '../src/index'

export default {
  name: 'HelloWorld',
  components: {
    VButton,
    Spacing,
  },
  props: {
    msg: String,
  },
  setup() {
    const $toast = inject('toast')

    const state = reactive({
      message: `Hi! I'm a Toast`,
      options: {
        duration: 4000,
      },
    })

    const positions = computed(() => {
      return Object.keys(Positions).map(key => {
        return {
          key,
          value: Positions[key],
          name: Positions[key].replace(/-/, ' '),
        }
      })
    })

    const hasOptions = computed(() => {
      return (
        state.options && (Object.keys(state.options).length > 1 || state.options.duration !== 4000)
      )
    })

    function onClick(e) {
      // console.log(e)
    }

    function toast(type = 'is-primary', dismissible = true) {
      const options = {
        dismissible,
        onClick,
      }
      typeof type === 'string' && (options.type = type)

      typeof state.options.maxToasts === 'string' &&
        (state.options.maxToasts = Number.parseInt(state.options.maxToasts))

      $toast.show(state.message, {
        ...options,
        ...state.options,
      })
    }

    function changeDuration(e) {
      state.options.duration = !e.target.checked ? 4000 : false
    }

    return { state, positions, hasOptions, toast, changeDuration }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.c-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 8px;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
}

input {
  border: 1px solid transparent;
  height: 40px;
  padding: 10px 16px;
  outline: none;
  border-radius: 8px;
  background-color: #f3f3f4;
  width: 100%;
}

input[type='range'] {
  padding: 0;
}
input[type='radio'],
input[type='checkbox'] {
  height: 22px;
  width: 22px;
  margin-right: 8px;
  cursor: pointer;
}

.c-two-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  max-width: 840px;
  margin: 0 auto;
}

fieldset {
  text-align: left;
  border: none;
  padding: 0;
}

fieldset:not(:last-child) {
  margin-bottom: 20px;
}

.c-label {
  font-weight: 700;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
}

.c-code {
  background-color: #252526;
  border-radius: 8px;
  color: #fff;
  font-size: 18px;
  padding: 16px;
  text-align: left;
}

.c-code--string {
  color: #ce9178;
}

.c-code--object-line {
  display: flex;
}
.c-code--object-line:not(:last-child)::after {
  content: ',';
  font-family: monospace;
  display: inline-block;
}
.c-code--object-line > code:last-child {
  margin-left: 8px;
}

.c-code--number {
  color: #b5cea8;
}

.c-column-right {
  display: grid;
  grid-gap: 16px;
}
</style>
