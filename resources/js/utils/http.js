import axios from "axios";
axios.defaults.headers["Accept"] = "application/json";

const baseURL = "";

const post = (url, data) => {
    return new Promise((reslove, reject) => {
        axios
            .post(getAPIRoute(url), data)
            .then(res => reslove(res))
            .catch(err => {
                if (err.response) {
                    if (err.response.status === 404) {
                        alert("Not Found");
                    } else if (err.response.status === 500) {
                        alert("Internal Server Error");
                    }
                }
                reject(err);
            });
    });
};

const get = url => {
    return new Promise((reslove, reject) => {
        axios
            .get(getAPIRoute(url))
            .then(res => reslove(res))
            .catch(err => {
                if (err.response) {
                    if (err.response.status === 404) {
                        alert("Not Found");
                    } else if (err.response.status === 500) {
                        alert("Internal Server Error");
                    }
                }
                reject(err);
            });
    });
};

const setToken = token => {
    axios.defaults.headers["Authorization"] = `Bearer ${token}`;
};

const getAPIRoute = url => {
    return baseURL + "/api/" + url;
};

export default {
    post,
    get,
    setToken,
    getAPIRoute
};
