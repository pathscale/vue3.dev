<template>
  <input ref="cal" :type="type" />
</template>

<script>
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min'

export default {
  props: {
    clearable: {
      type: Boolean,
      default: false,
    },
    dialog: {
      type: Boolean,
      default: false,
    },
    inline: {
      type: Boolean,
      default: false,
    },
    range: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object,
      default() {
        return {}
      },
    },
    type: {
      type: String,
      default: 'datetime',
    },
    modelValue: Date | Array | null,
  },
  data() {
    return {
      date: [null, null],
    }
  },
  mounted() {
    // Set date
    if (this.range) {
      if (Array.isArray(this.modelValue)) {
        this.date = this.modelValue
      }
    } else {
      this.date[0] = this.modelValue
    }

    // Attach Calendar
    const calendar = bulmaCalendar.attach(this.$refs.cal, {
      ...this.options,
      displayMode: this.inline ? 'inline' : this.dialog ? 'dialog' : 'default',
      isRange: this.range,
      showClearButton: this.clearable,
      startDate: this.date[0],
      startTime: this.date[0],
      endDate: this.date[1],
      endTime: this.date[1],
    })

    // Event Handler
    calendar[0].on('save', e => {
      this.date = [e.data.startDate, e.data.endDate]

      if (this.range) {
        this.$emit('update:modelValue', this.date)
        return
      }

      this.$emit('update:modelValue', this.date[0])
    })

    calendar[0].on('select', e => {
      console.log('select', this.range, [e.data.startDate, e.data.endDate])

      if (this.range) {
        this.$emit('select', [e.data.startDate, e.data.endDate])
        return
      }

      this.$emit('select', e.data.startDate)
    })
  },
}
</script>
