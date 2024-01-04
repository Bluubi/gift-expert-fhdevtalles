import {GiphDto} from "../domain/giph-dto.ts";
import {GiphModel} from "../domain/giph-model.ts";

export function toModel(giph: GiphDto): GiphModel{
    return {
        id: giph.id,
        title: giph.title,
        images: giph.images
    }
}
