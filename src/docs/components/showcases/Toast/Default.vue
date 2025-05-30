<template>
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
  </div>

  <v-columns>
    <v-column>
      <div>
        <v-field label="Message">
          <v-input id="message" v-model="state.message" type="text" />
        </v-field>
        <v-field label="Position">
          <v-field v-for="position in positions" :key="position.key" class="is-aligned-center">
            <input
              v-model="state.options.position"
              class="mr-2"
              name="position"
              type="radio"
              :value="position.value"
              @change="toast" />{{ position.name }}
          </v-field>
        </v-field>
        <v-field
          :label="`Duration: ${state.options.duration}${state.options.duration ? 'ms' : ''}`">
          <v-slider
            v-model="state.options.duration"
            min="1000"
            max="10000"
            :disabled="state.options.duration === false" />

          <v-checkbox @change="changeDuration">
            Disable duration
          </v-checkbox>
        </v-field>
        <v-field>
          <v-checkbox checked @change="state.options.dismissible = $event.target.checked">
            Dismissible on click
          </v-checkbox>
        </v-field>
        <v-field>
          <v-checkbox @change="state.options.queue = $event.target.checked">
            Enqueue
          </v-checkbox>
        </v-field>
        <v-field label="Max Toasts">
          <v-input v-model="state.options.maxToasts" type="number" placeholder="false" />
        </v-field>
        <v-field>
          <v-checkbox checked @change="state.options.pauseOnHover = $event.target.checked">
            Pause on hover
          </v-checkbox>
        </v-field>
      </div>
    </v-column>
    <v-column>
      <div class="c-code my-2">
        <code> import { inject } from 'vue' </code>
        <br />
        ...
        <br />
        <code> setup() { </code>
        <br />
        <code> const $toast = inject('$toast') </code>
        <br />
        ...
        <br />
        <code>$toast(</code>
        <div class="ml-2">
          <code class="c-code-string">"{{ state.message }}"</code>
          <code v-if="hasOptions">,</code>
        </div>
        <div v-if="hasOptions" class="ml-2">
          <code>{</code>
          <span v-if="state.options.type" class="c-code-object-line">
            <code>type:</code>
            <code class="c-code-string">{{ state.options.type }}</code>
          </span>
          <span v-if="state.options.position" class="c-code-object-line">
            <code>position:</code>
            <code class="c-code-string">"{{ state.options.position }}"</code>
          </span>
          <span v-if="state.options.duration !== 4000" class="c-code-object-line">
            <code>duration:</code>
            <code class="c-code-number">{{ state.options.duration }}</code>
          </span>

          <span v-if="state.options.dismissible === false" class="c-code-object-line">
            <code>dismissible:</code>
            <code class="c-code-number">{{ state.options.dismissible }}</code>
          </span>

          <span v-if="state.options.queue" class="c-code-object-line">
            <code>queue:</code>
            <code class="c-code-number">{{ state.options.queue }}</code>
          </span>

          <span
            v-if="state.options.maxToasts || state.options.maxToasts === 0"
            class="c-code-object-line">
            <code>max:</code>
            <code class="c-code-number">{{ state.options.maxToasts }}</code>
          </span>

          <span v-if="state.options.pauseOnHover === false" class="c-code-object-line">
            <code>pauseOnHover:</code>
            <code class="c-code-number">{{ state.options.pauseOnHover }}</code>
          </span>

          <span v-if="state.options.useDefaultCss === false" class="c-code-object-line">
            <code>useDefaultCss:</code>
            <code class="c-code-number">{{ state.options.useDefaultCss }}</code>
          </span>
        </div>
        <code class="ml-2">}</code>
        <code>)</code>
      </div>
      <v-button type="is-warning" @click="toast">
        Show it
      </v-button>
    </v-column>
  </v-columns>
</template>

<script>
import {
  ToasterPositions,
  VButton,
  VCheckbox,
  VColumn,
  VColumns,
  VField,
  VInput,
  VSlider,
} from "@pathscale/vue3-ui";
import { computed, inject, reactive } from "vue";

export default {
  name: "DevShowcaseToast",
  components: {
    VButton,
    VColumns,
    VColumn,
    VField,
    VInput,
    VCheckbox,
    VSlider,
  },
  setup() {
    const $toast = inject("$toast");

    const state = reactive({
      message: "Bulma's notification implemented as a toast plugin.",
      options: {
        duration: 4000,
      },
    });

    const positions = computed(() => {
      return Object.keys(ToasterPositions).map((key) => {
        return {
          key,
          value: ToasterPositions[key],
          name: ToasterPositions[key].replace(/-/, " "),
        };
      });
    });

    const hasOptions = computed(() => {
      return (
        state.options &&
        (Object.keys(state.options).length > 1 ||
          state.options.duration !== 4000)
      );
    });

    function onClick(e) {
      console.log(e);
    }

    function toast(type = "is-primary", dismissible = true) {
      const options = {
        dismissible,
        onClick,
      };
      if (typeof type === "string") {
        options.type = type;
      }

      if (typeof state.options.maxToasts === "string") {
        state.options.maxToasts = Number.parseInt(state.options.maxToasts);
      }

      $toast.show(state.message, {
        ...options,
        ...state.options,
      });
    }

    function changeDuration(e) {
      state.options.duration = !e.target.checked ? 4000 : false;
    }

    return { state, positions, hasOptions, toast, changeDuration };
  },
};
</script>

<style scoped>
.c-code {
  background-color: #252526;
  border-radius: 8px;
  color: #fff;
  font-size: 18px;
  padding: 16px;
  text-align: left;
}

.c-code-string {
  color: #ce9178;
}

.c-code-object-line {
  display: flex;
}

.c-code-object-line:not(:last-child)::after {
  content: ",";
  font-family: monospace;
  display: inline-block;
}

.c-code-object-line > code:last-child {
  margin-left: 8px;
}

.c-code-number {
  color: #b5cea8;
}

.c-column-right {
  display: grid;
  grid-gap: 16px;
}
</style>
