export default {
  namespaced: true,
  state() {
    return {
      title: '',
      movies: [],
      nowMovie: {},
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
    async fetchMovies({commit, state}, payload) {
      const {title} = payload;
      const {Search} = await _request({
        title,
      });
      await commit('assignState', {
        movies: Search
      });
    }
  },
};

async function _request(options) {
  return await fetch('/.netlify/functions/movie', {
    method: 'POST',
    body: JSON.stringify(options),
  }).then((res) => res.json());
}