<template>
  <div class="search__container"> 
    <input 
      ref="input"
      class="search__input" 
      :class="{ 'input--clicked': isClicked }"
      v-model.trim="keyword"
      @input="toUpper"
      @keyup.enter="onEnter"
      />
    <div 
      ref="button"
      class="search__btn"
      :class="{ 'btn--clicked': isClicked }"
      @click="toggleInput">
      SEARCH FOR MOVIES BY NAME
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '',
      isClicked: false,
    }
  },
  methods: {
    toggleInput() {
      this.isClicked = !this.isClicked;
    },
    onEnter() {
      this.$router.push(`/movies/${this.keyword}`);
    }
  }
}
</script>

<style lang="scss" scoped>
  .search__container {
    height: 102px;
    border-top: 1px solid black;
    display: flex;
    align-items: center;
    padding-left: 40px;
    .search__input {
      text-transform: uppercase;
      outline: none;
      border: none;
      font-size: 48px;
      width: 0;
      transition: width 0.5s;
      &.input--clicked {
        width: 450px;
      }
    }
    .search__btn {
      background: transparent;
      width: fit-content;
      font-size: 64px;
      font-style: italic;
      white-space: nowrap;
      overflow: hidden;
      transition: width 0.5s;
      &.btn--clicked {
        width: 240px;
      }
    }
  }
</style>