import { ResultsDto } from "./results.dto";
export interface ShorteningLinkDto{
    result: ResultsDto,
    isCopied: boolean,
    copyBtnText: string
}