<template>
  <div class="movies__container">
    <header class="movies__header">
      <span class="material-icons">
        chevron_left
      </span>
      <input
      v-focus
      ref="input"
      class="header__input"
      :value="this.nowTitle"
      />
    </header>
    <section class="movies__movies">

    </section>
    <Footer location="search"/>
  </div>
</template>

<script>
import Footer from '~/components/Footer'
export default {
  components: {
    Footer,
  },
  directives: {
    focus: {
      mounted(el) {
        el.focus()
        }
    }
  },
  computed: {
    nowTitle() {
      return this.$route.params.title;
    }
  }
}
</script>

<style lang="scss" scoped>
  .movies__container {
    height: 100%;
    display: flex;
    flex-direction: column;
    .movies__header {
      padding-left: 40px;
      display: flex;
      align-items: center;
      height: 147px;
      border-bottom: 1px solid black;
      input {
        margin-left: 30px;
        text-transform: uppercase;
        font-size: 64px;
        border: none;
        outline: none;
      }
      span {
        font-size: 64px;
      }
    }
    .movies__movies {
      flex-grow: 1;
    }
  }
</style>