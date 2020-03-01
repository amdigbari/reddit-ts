import axios from "axios";

const Axios = axios.create({
    timeout: 10000,
});

export const setHeaderBearerAuthorization: (authorization: string) => void = authorization => {
    Axios.defaults.headers.common["Authorization"] = `Bearer ${authorization}`;
};

export const removeAuthorization: () => void = () => {
    delete Axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
};

if (localStorage.getItem("token")) {
    setHeaderBearerAuthorization(localStorage.getItem("token") as string);
}

export default Axios;
