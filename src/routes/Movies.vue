<template>
  <div class="movies__container">
    <header class="movies__header">
      <span 
        class="material-icons"
        @click="goBack">
        chevron_left
      </span>
      <input
      v-focus
      ref="input"
      class="header__input"
      :value="this.nowTitle"
      @keyup.enter="onEnter"
      />
    </header>
    <section class="movies__movies">

    </section>
    <Footer location="search"/>
  </div>
  <div id="sticker--4"></div>
  <div id="sticker--5"></div>
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
  }, 
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    onEnter(e) {
      const {value} = e.target
      console.log(value);
      this.$router.push(`/movies/${value}`);
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
  #sticker--4 {
  position: absolute;
  width: 110px;
  height: 120px;
  left: 527.84px;
  top: 80px;
  background: no-repeat center /cover url('/src/images/image4.png');
  }
  #sticker--5 {
    position: absolute;
    width: 130px;
    height: 190px;
    left: 120px;
    bottom: 15px;
    background: no-repeat center /cover url('/src/images/image5.png');
  }
</style>