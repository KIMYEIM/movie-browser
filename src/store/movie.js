export default {
  namespaced: true,
  state() {
    return {
      title: '',
      movies: [],
      nowMovie: {},
      isLoading: false,
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
      state.isLoading = true;
      const { title = ''} = payload;
      const { Search } = await _request({
        title,
        type: 'movies'
      });
      await commit('assignState', {
        movies: Search,
      });
      state.isLoading = false;
    },
    async fetchMovie({ commit, state }, payload) {
      state.isLoading = true;
      const { id = ''} = payload;
      const res = await _request({
        id,
        type: 'movie'
      });
      await commit('assignState', {
        nowMovie: res,
      });
      state.isLoading = false;
    },
  },
};

async function _request(options) {
  return await fetch('/.netlify/functions/movie', {
    method: 'POST',
    body: JSON.stringify(options),
  }).then((res) => res.json());
}