<template>
  <div class="modal__page" @click="closeModal">
    <div class="modal__container" @click.stop>
      <div v-if="isLoading" class="loading__img" />
      <div v-else class="movie__container">
        <div
          class="movie__poster"
          :style="{
            background: `center / cover no-repeat url(${nowMovie.Poster})`,
          }"
        />
        <div class="movie__info"></div>
        <div style="word-break: break-word">
          {{ nowMovie.Title }}
          {{ nowMovie.Country }}
          {{ nowMovie.Director === 'N/A' ? 'UNKNOWN' : nowMovie.Director }}
          {{ nowMovie.Genre }}
          {{ nowMovie.Plot }}
          {{ nowMovie.Released }}
          {{ nowMovie.Runtime }}
          {{ nowMovie.Actors }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: '',
    },
    close: {
      type: Function,
    },
  },
  computed: {
    nowMovie() {
      return this.$store.state.movie.nowMovie;
    },
    isLoading() {
      return this.$store.state.movie.isLoading;
    },
  },
  methods: {
    closeModal() {
      this.close();
    },
  },
};
</script>

<style lang="scss" scoped>
.modal__page {
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  .modal__container {
    width: 70vw;
    height: 82vh;
    background: rgba(205, 216, 213, 1);
    z-index: 100;
    border: 1px solid black;
  }
  .movie__container {
    display: flex;
    height: 100%;
  }
  .movie__poster {
    height: 100%;
    aspect-ratio: 300/450;
  }
  .loading__img {
    width: 100%;
    height: 100%;
    background: center / contain no-repeat url('/src/images/nyan-cat.gif');
  }
}
</style>
