<template>
  <div class="movies__container">
    <header class="movies__header">
      <span class="material-icons" @click="goBack"> chevron_left </span>
      <input
        v-focus
        ref="input"
        class="header__input"
        :value="this.nowTitle"
        @keyup.enter="onEnter"
      />
    </header>
    <section class="movies__movies">
      <div v-if="isLoading" class="movies__loading" />
      <ul v-else class="item__container">
        <MovieItem
          v-for="movie in movies"
          :toggle="toggleModal"
          :key="movie.imdbID"
          :movie="movie"
        />
      </ul>
    </section>
    <Footer location="search" />
  </div>
  <Modal v-if="isModalOpened" :close="toggleModal" ref="modal" />
  <div id="sticker--4"></div>
  <div id="sticker--5"></div>
</template>

<script>
import Footer from "~/components/Footer";
import MovieItem from "~/components/MovieItem";
import Modal from "~/components/Modal";
export default {
  components: {
    Footer,
    MovieItem,
    Modal,
  },
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      },
    },
  },
  data() {
    return {
      isModalOpened: false,
    };
  },
  created() {
    this.$store.dispatch("movie/fetchMovies", {
      title: this.nowTitle,
    });
  },
  watch: {
    $route() {
      this.$store.dispatch("movie/fetchMovies", {
        title: this.nowTitle,
      });
    },
  },
  computed: {
    nowTitle() {
      return this.$route.params.title;
    },
    movies() {
      return this.$store.state.movie.movies;
    },
    movie() {
      return this.$store.state.movie.nowMovie;
    },
    isLoading() {
      return this.$store.state.movie.moviesLoading;
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    onEnter(e) {
      const { value } = e.target;
      this.$router.push(`/movies/${value}`);
    },
    toggleModal() {
      this.isModalOpened = !this.isModalOpened;
    },
  },
};
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
    flex-shrink: 0;
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
    padding: 0 13vw;
    overflow-y: scroll;
    .item__container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .movies__loading {
    width: 100%;
    height: 500px;
    background: center / contain no-repeat url("/src/images/nyan-cat.gif");
  }
}
#sticker--4 {
  position: absolute;
  width: 110px;
  height: 120px;
  left: 527.84px;
  top: 80px;
  background: no-repeat center / cover url("/src/images/image4.png");
}
#sticker--5 {
  position: absolute;
  width: 130px;
  height: 190px;
  left: 120px;
  bottom: 15px;
  background: no-repeat center / cover url("/src/images/image5.png");
}
</style>
