import http from "./http";
import { ShorteningLinkDto } from "../interfaces/dtos/shorteningLink.dto";
import { AxiosRequestConfig, AxiosResponse } from "axios";

export default class shorteningLinkService{
    async getLink(givenLink: string): Promise<ShorteningLinkDto> {
		try {
			const response: AxiosResponse = await http.get(`${process.env.REACT_APP_BASE_URL}/shorten?url=${givenLink}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	}
	async getResults(): Promise<ShorteningLinkDto[]> {
		try {
			const response: AxiosResponse = await http.get(`https://www.w3schools.com/test/demo_form.php`);
			return response.data;
		} catch (error) {
			throw error;
		}
	}
	async addResult(data: ShorteningLinkDto): Promise<ShorteningLinkDto> {
		try {
			const response: AxiosRequestConfig = await http.post(`https://www.w3schools.com/test/demo_form.php`, data);
			return response.data;
		} catch (error) {
			throw error;
		}
	}
}