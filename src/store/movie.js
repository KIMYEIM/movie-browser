export default {
  namespaced: true,
  state() {
    return {
      title: '',
      movies: [],
      nowMovie: {},
      moviesLoading: false,
      movieLoading: false,
    };
  },
  getters: {},
  mutations: {
    assignState(state, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
  },
  actions: {
    async fetchMovies({ commit, state }, payload) {
      state.moviesLoading = true;
      const { title = ''} = payload;
      const { Search } = await _request({
        title,
        type: 'movies'
      });
      await commit('assignState', {
        movies: Search,
      });
      state.moviesLoading = false;
    },
    async fetchMovie({ commit, state }, payload) {
      state.movieLoading = true;
      const { id = ''} = payload;
      const res = await _request({
        id,
        type: 'movie'
      });
      await commit('assignState', {
        nowMovie: res,
      });
      state.movieLoading = false;
    },
  },
};

async function _request(options) {
  return await fetch('/.netlify/functions/movie', {
    method: 'POST',
    body: JSON.stringify(options),
  }).then((res) => res.json());
}