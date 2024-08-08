import axios from "axios";

const apiAxios = axios.create({
	baseURL: "https://api.escuelajs.co/api/v1",
	headers: { "Content-Type": "application/json" },
	timeout: 10000,
});

apiAxios.interceptors.request.use(
	(request) => {
		const token = localStorage.getItem("token");
		if (token) {
			request.headers.Authorization = `Bearer ${token}`;
		}
		return request;
	},
	(error) => {
		Promise.reject(error);
	}
);

export default apiAxios;
