import { createStore, thunk, action } from "easy-peasy";
import axios from "axios";

const dummytoken = "dummytokengoesHere";

const authModel = {
    authUser: null,
    saveAuthUser: action((state, payload) => {
        state.authUser = payload.data.data;
    }),
    getAuthUser: thunk(async (actions, payload) => {
        const res = await axios("/api/auth/user", {
            headers: {
                Authorization: `Bearer ${dummytoken}`
            }
        });
        actions.saveAuthUser(res);
    })
};
const store = createStore(authModel);

export default store;
