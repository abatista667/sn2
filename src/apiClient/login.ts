import axios from './config'

interface LoginRequest {
	username: string;
	password: string;
}
interface LoginResponse {
	username: string;
	password: string;
}

export const login = async (
	request: LoginRequest
): Promise<LoginResponse> => {
	try {
		const response = await axios.post<LoginResponse>(`/api/order`, request);
		return response.data;
	} catch {
		return Promise.reject("an error loading data has ocurre");
	}
};
