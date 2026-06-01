import axios from "axios";
import { appConfig } from "../../config/appConfig";

export function axiosInstance() {
	return axios.create({
		baseURL: appConfig.serverUri,
		proxy: false,
		withCredentials: true,
	});
}
