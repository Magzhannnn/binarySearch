import { createStore, createLogger } from "vuex";

interface State {
  title: string;
}

export const store = createStore({
  state(): State {
    return {
      title: "My title string",
    };
  },
  getters: {
    getTitle(state: State) {
      return state.title.toUpperCase();
    },
  },
  mutations: {
    setTitle(state: State, payload: { title: string }) {
      state.title = payload.title;
    },
  },
});
