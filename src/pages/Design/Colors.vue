<script>
import { ref, computed, watchEffect } from 'vue'
import {
  VField,
  VInput,
  VSwitch,
  VColumns,
  VColumn
} from '@pathscale/vue3-ui'
import ComponentShowcase from '../../components/ComponentShowcase.vue'
import tinycolor from 'tinycolor2'

export default {
  name: 'DevPageColors',
  components: {
    VField,
    VInput,
    VSwitch,
    VColumns,
    VColumn,
    ComponentShowcase
  },
  setup() {
    const theme = ref('light')
    const accent = ref('#3D63DD')
    const gray = ref('#8B8D98')
    const background = ref('#FFFFFF')

    const generateColorScale = (baseColor, steps) => {
      const color = tinycolor(baseColor)
      const scale = []

      for (let i = 0; i < steps; i++) {
        if (i < 2) {
          scale.push(color.clone().lighten(60 - (i * 20)).toHexString())
        } else if (i < 5) {
          scale.push(color.clone().lighten(35 - ((i - 2) * 12)).toHexString())
        } else if (i < 8) {
          scale.push(color.clone().lighten(15 - ((i - 5) * 8)).toHexString())
        } else if (i < 10) {
          scale.push(color.clone().darken((i - 8) * 12).toHexString())
        } else {
          scale.push(color.clone().darken(25 + ((i - 10) * 12)).toHexString())
        }
      }
      return scale
    }

    const colorScales = computed(() => {
      const accentScale = generateColorScale(accent.value, 12)
      const grayScale = generateColorScale(gray.value, 12)

      const createCategory = (start, length, lightScale) => {
        const scale = theme.value === 'light' ? lightScale : [...lightScale].reverse()
        return Array.from({ length }, (_, i) => ({
          id: start + i,
          light: lightScale[start + i - 1],
          dark: scale[start + i - 1]
        }))
      }

      return {
        accent: {
          backgrounds: createCategory(1, 2, accentScale),
          interactive: createCategory(3, 3, accentScale),
          borders: createCategory(6, 3, accentScale),
          solid: createCategory(9, 2, accentScale),
          accessible: createCategory(11, 2, accentScale)
        },
        gray: {
          backgrounds: createCategory(1, 2, grayScale),
          interactive: createCategory(3, 3, grayScale),
          borders: createCategory(6, 3, grayScale),
          solid: createCategory(9, 2, grayScale),
          accessible: createCategory(11, 2, grayScale)
        }
      }
    })

    const applyBulmaColorVars = (colorScales, theme = 'light') => {
      const root = document.documentElement

      const get = (scale, category, index) =>
        colorScales[scale][category][index]?.[theme]

      const vars = {
        // Grays → Bulma core grays
        '--black': get('gray', 'accessible', 1),
        '--black-bis': get('gray', 'accessible', 0),
        '--black-ter': get('gray', 'solid', 1),
        '--grey-darker': get('gray', 'solid', 0),
        '--grey-dark': get('gray', 'borders', 2),
        '--grey': get('gray', 'borders', 1),
        '--grey-light': get('gray', 'borders', 0),
        '--grey-lighter': get('gray', 'interactive', 2),
        '--grey-lightest': get('gray', 'interactive', 1),
        '--white-ter': get('gray', 'interactive', 0),
        '--white-bis': get('gray', 'backgrounds', 1),
        '--white': get('gray', 'backgrounds', 0),

        // Accent → Bulma semantic colors
        '--orange': get('accent', 'interactive', 2),
        '--yellow': get('accent', 'interactive', 1),
        '--green': get('accent', 'borders', 0),
        '--turquoise': get('accent', 'borders', 1),
        '--cyan': get('accent', 'borders', 0),
        '--blue': get('accent', 'borders', 2),
        '--purple': get('accent', 'solid', 1),
        '--red': get('accent', 'accessible', 0),

        // Primary roles
        '--primary': get('accent', 'solid', 0),
        '--primary-light': get('accent', 'interactive', 1),
        '--primary-dark': get('accent', 'accessible', 0),
        '--link': get('accent', 'borders', 1),
        '--info': get('accent', 'interactive', 0)
      }

      for (const [key, value] of Object.entries(vars)) {
        if (value) {
          root.style.setProperty(key, value)
        }
      }
    }

    watchEffect(() => {
      applyBulmaColorVars(colorScales.value, theme.value)
    })


    return {
      theme,
      accent,
      gray,
      background,
      colorScales,
    }
  }
}
</script>

<template>
  <div class="section">
    <h1 class="title">
      Color Palette
    </h1>

    <div class="block mt-5">
      <v-switch v-model="theme" type="is-success" passive-type="is-success" true-value="dark" false-value="light">
        {{ theme === 'light' ? '🌞 Light' : '🌙 Dark' }}
      </v-switch>
    </div>

    <div class="columns is-variable is-4 mt-5">
      <div class="column">
        <v-field label="Accent">
          <v-input v-model="accent" type="text" color="is-primary" />
        </v-field>
      </div>

      <div class="column">
        <v-field label="Gray">
          <v-input v-model="gray" type="text" color="is-primary" />
        </v-field>
      </div>

      <div class="column">
        <v-field label="Background">
          <v-input v-model="background" type="text" color="is-primary" />
        </v-field>
      </div>
    </div>
    <v-columns v-for="(scale, scaleName) in colorScales" :key="scaleName">
      <v-column hcentered v-for="(colors, category) in scale" :key="category" narrow>
        <span v-if="scaleName === 'accent'" class="mb-4 is-capitalized">{{ category }}</span>
        <div class="columns">
          <v-column narrow v-for="color in colors" :key="color.id" class="column">
            <div
class="box has-text-centered p-4" :style="{
              backgroundColor: theme === 'light' ? color.light : color.dark,
              width: '80px',
              minWidth: '80px'
            }">
              <span class="has-text-white has-text-weight-bold is-size-4">{{ color.id }}</span>
            </div>
          </v-column>
        </div>
      </v-column>
    </v-columns>

    <component-showcase />
  </div>
</template>
