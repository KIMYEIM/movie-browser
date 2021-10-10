<template>
  <li @click="[fetchMovie(), toggle()]">
    <div class="movie__container">
      <div
        class="movie__poster"
        :style="{
          backgroundImage: `url(${movie.Poster !== 'N/A' ? movie.Poster : defaultImg})`,
        }"
      />
      <div class="movie__info">
        <div class="movie__title">
          {{ movie.Title }}
        </div>
        <div class="movie__year">
          {{ movie.Year }}
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import defaultImg from '~/images/default.png';
export default {
  props: {
    movie: {
      type: Object,
      default: () => ({}),
    },
    toggle: {
      type: Function,
    },
  },
  data() {
    return {
      defaultImg,
    };
  },
  methods: {
    fetchMovie() {
      this.$store.dispatch('movie/fetchMovie', {
        id: this.movie.imdbID,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
li {
  border: 1px solid black;
  .movie__container {
    display: flex;
    align-items: center;
    height: 400px;
    .movie__poster {
      height: 100%;
      aspect-ratio: 60 / 89;
      background-size: cover;
    }
    .movie__info {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding: 0 20px;
    }
    .movie__title {
      font-size: 42px;
      font-style: italic;
    }
    .movie__year {
      font-size: 24px;
    }
  }
}
</style>
