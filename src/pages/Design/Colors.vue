<script>
import { ref } from 'vue'
import { VField, VInput, VSwitch, VButton, VColumns, VColumn } from '@pathscale/vue3-ui'

export default {
  name: 'DevPageColors',
  components: { VField, VInput, VSwitch, VButton, VColumns, VColumn },
  setup() {
    const theme = ref('light')
    const accent = ref('#75BF73')
    const gray = ref('#8F97C1')
    const background = ref('#C2C2C2')

    const colorScales = {
      accent: {
        backgrounds: [
          { id: 1, light: '#FFFFFF', dark: '#111111' },
          { id: 2, light: '#F8F9FA', dark: '#1A1A1A' },
        ],
        interactive: [
          { id: 3, light: '#EDF2FF', dark: '#2A2A2A' },
          { id: 4, light: '#DBE4FF', dark: '#3A3A3A' },
          { id: 5, light: '#BAC8FF', dark: '#4A4A4A' },
        ],
        borders: [
          { id: 6, light: '#91A7FF', dark: '#5A5A5A' },
          { id: 7, light: '#748FFC', dark: '#6A6A6A' },
          { id: 8, light: '#5C7CFA', dark: '#7A7A7A' },
        ],
        solid: [
          { id: 9, light: '#4C6EF5', dark: '#8A8A8A' },
          { id: 10, light: '#4263EB', dark: '#9A9A9A' },
        ],
        accessible: [
          { id: 11, light: '#3B5BDB', dark: '#AAAAAA' },
          { id: 12, light: '#364FC7', dark: '#BBBBBB' },
        ]
      },
      gray: {
        backgrounds: [
          { id: 1, light: '#FFFFFF', dark: '#111111' },
          { id: 2, light: '#F8F9FA', dark: '#1A1A1A' },
        ],
        interactive: [
          { id: 3, light: '#F1F3F5', dark: '#2A2A2A' },
          { id: 4, light: '#E9ECEF', dark: '#3A3A3A' },
          { id: 5, light: '#DEE2E6', dark: '#4A4A4A' },
        ],
        borders: [
          { id: 6, light: '#CED4DA', dark: '#5A5A5A' },
          { id: 7, light: '#ADB5BD', dark: '#6A6A6A' },
          { id: 8, light: '#868E96', dark: '#7A7A7A' },
        ],
        solid: [
          { id: 9, light: '#495057', dark: '#8A8A8A' },
          { id: 10, light: '#343A40', dark: '#9A9A9A' },
        ],
        accessible: [
          { id: 11, light: '#212529', dark: '#AAAAAA' },
          { id: 12, light: '#121416', dark: '#BBBBBB' },
        ]
      }
    }

    const toggleTheme = () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light'
    }

    return {
      theme,
      accent,
      gray,
      background,
      colorScales,
      toggleTheme
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
      <v-column hcentered v-for="(colors, category) in scale" :key="category">
        <span v-if="scaleName === 'accent'" class="mb-4 is-capitalized">{{ category }}</span>
        <div class="columns">
          <div v-for="color in colors" :key="color.id" class="column">
            <div class="box has-text-centered p-4" :style="{
              backgroundColor: theme === 'light' ? color.light : color.dark,
              width: '80px',
              minWidth: '80px'
            }">
              <span class="has-text-white has-text-weight-bold is-size-4">{{ color.id }}</span>
            </div>
          </div>
        </div>
      </v-column>
    </v-columns>
  </div>
</template>
