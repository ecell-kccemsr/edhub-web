import { createStore, action } from "easy-peasy";

const store = createStore({
    user: null,
    setUser: action((state, payload) => {
        state.user = payload;
    }),
    compares: [],
    addToCompare: action((state, payload) => {
        let compares = state.compares;
        if (compares.filter(course => course.id === payload.id).length > 0) {
            compares = [];
            state.compares.forEach(course => {
                if (course.id !== payload.id) {
                    compares.push(course);
                }
            });
        } else {
            compares.push(payload);
        }
        state.compares = [...compares];
        localStorage.setItem("compares", JSON.stringify(state.compares));
    }),
    setCompares: action((state, payload) => {
        state.compares = payload;
    })
});

export default store;
