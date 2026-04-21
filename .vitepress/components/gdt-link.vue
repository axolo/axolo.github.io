<script>
export default {
  inheritAttrs: false,
  props: {
    modelValue: {
      type: String
    }
  },
  emits: ['update:modelValue', 'change'],
  data() {
    return {
      modes: [
        { id: 'pc_slide', name: '侧栏', method: 'pcSide' },
        { id: 'dd_tab', name: '工作台', method: 'ddTab' },
      ],
      mode: 'pc_slide',
      url: null,
      link: null

    }
  },
  watch: {
    mode(mode) {
      this.change()
    }
  },
  created() {
    this.url = this.modelValue
  },
  methods: {
    pcSide(url) {
      return 'taurus://taurusclient/page/link?pc_slide=true&url=' + encodeURIComponent(url)
    },
    ddTab(url) {
      const ddtab = url.includes('?') ? '&ddtab=true' : '?ddtab=true'
      return 'taurus://taurusclient/page/link?url=' + encodeURIComponent(url + ddtab)
    },
    change() {
      if (!this.url) {
        this.link = null
        return
      }
      const mode = this.modes.find(m => m.id === this.mode)
      this.link = this[mode.method](this.url)
      this.$emit('change', this.link)
      this.$emit('update:modelValue', this.url)
    }
  }
}
</script>

<template>
  <div class="gdt-link">
    <div class="modes">
      <div v-for="m in modes" :key="m" class="mode">
        <input :id="m.id" type="radio" :value="m.id" v-model="mode" />
        <label :for="m.id">{{ m.name }}</label>
      </div>
    </div>

    <textarea
      v-model="url"
      class="text"
      placeholder="请输需转换的地址，如：http://localhost:5173"
      v-bind="$attrs"
      @input="change"
    />

    <div class="link">
      <a :href="link" target="_blank">{{ link }}</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gdt-link {
  padding: 0.5em 1em;
  background-color: #f8f8f8;
  border-radius: 0.25em;;
  .modes {
    line-height: 2;
    display: flex;
    align-items: center;
    gap: 1em;
    .mode {
      font-size: small;
      display: flex;
      align-items: center;
    }
  }
  .link {
    font-size: small;
    word-break: break-all;
  }
  .text {
    width: 100%;
    padding: 0.5em;
    border: 1px solid #eee;
    border-radius: 0.25em;
  }

}
</style>
