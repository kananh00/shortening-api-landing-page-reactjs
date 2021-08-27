import { ResultsDto } from "./results.dto";
import { CopiedLinkDto } from "./copiedLink.dto";
export interface AllResultsDto{
    result: ResultsDto,
    isCopied: boolean,
    copyBtnText: string
}