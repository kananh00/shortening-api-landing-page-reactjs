import http from "./http";
import { ShorteningLinkDto } from "../interfaces/dtos/shorteningLink.dto";
import { AxiosResponse } from "axios";

export default class shorteningLinkService{
    async getLink(givenLink: string): Promise<ShorteningLinkDto> {
		try {
			const response: AxiosResponse = await http.get(`${process.env.REACT_APP_BASE_URL}/shorten?url=${givenLink}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	}
}