<script>
import { VAccordion, VButton, VField, VTag } from '@pathscale/vue3-ui'

const component =  {
  components: { VAccordion, VButton, VField, VTag },
}

export default component;
</script>
<template>
  <section>
    <v-field>
      <v-accordion>
        <template #header>
          <v-button type="is-success" class="my-2">
            Basic accordion
          </v-button>
        </template>
        <template #content>
          Content bro
        </template>
      </v-accordion>
    </v-field>
    
    <v-field>
      <v-accordion is-horizontal>
        <template #header>
          <v-button type="is-info" class="my-2">
            Horizontal accordion
          </v-button>
        </template>
        <template #content>
          Greetings
        </template>
      </v-accordion>
    </v-field>
    <v-field>
      <v-accordion header-is-trigger trigger-left>
        <template #trigger>
          <v-button type="is-warning" class="my-2">
            Accordion with left trigger
          </v-button>
        </template>
        <template #content>
          Hello 
        </template>
      </v-accordion>
    </v-field>
    <v-field>
      <v-accordion header-is-trigger trigger-right>
        <template #trigger>
          <v-button type="is-danger" class="my-2">
            Accordion with right trigger
          </v-button>
        </template>
        <template #content>
          Hello 
        </template>
      </v-accordion>
    </v-field>
    <v-field>
      <v-accordion header-is-trigger expanded>
        <template #trigger>
          <v-button type="is-danger" class="my-2">
            Expanded Accordion
          </v-button>
        </template>
        <template #content>
          Hello 
        </template>
      </v-accordion>
    </v-field>

    <v-field>
      <v-accordion header-is-trigger background="var(--blm-sucs)">
        <template #trigger>
          <v-button type="is-link" class="my-2">
            Accordion with custom background
          </v-button>
        </template>
        <template #content>
          content
        </template>
      </v-accordion>
    </v-field>

    <v-field>
      <v-accordion header-is-trigger color="var(--blm-dang)">
        <template #trigger>
          <v-button type="is-link" class="my-2">
            Accordion with custom color
          </v-button>
        </template>
        <template #content>
          Content
        </template>
      </v-accordion>
    </v-field>

    <v-field>
      <v-accordion header-is-trigger hover>
        <template #trigger>
          <v-button type="is-info" class="my-2">
            Hover
          </v-button>
        </template>
        <template #content>
          Content
        </template>
      </v-accordion>
    </v-field>

    <v-field>
      <v-accordion header-is-trigger is-link>
        <template #trigger>
          <v-button type="is-info" class="my-2">
            Accordion with link
          </v-button>
        </template>
        <template #content>
          <a href="https://github.com/pathscale/vue3-ui" target="_blank">Go to source</a>
        </template>
      </v-accordion>
    </v-field>

    <v-field>
      <v-accordion header-is-trigger is-active>
        <template #trigger>
          <v-button type="is-info" class="my-2">
            Active accordion
          </v-button>
        </template>
        <template #content>
          Content
        </template>
      </v-accordion>
    </v-field>

    <v-field>
      <v-accordion header-is-trigger>
        <template #header>
          <v-tag>Accordion with header as trigger</v-tag>
        </template>
        <template #content>
          Content
        </template>
      </v-accordion>
    </v-field>
  </section>
</template>