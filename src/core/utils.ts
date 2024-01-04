import {Params} from "react-router-dom";
import {getTrendingGiphs} from "../features/giph/domain/giph.ts";
import {toModel} from "../features/giph/infraestructure/giph-adapter.ts";

export async function Paginate(params: Params<string>){
    const data = await getTrendingGiphs();
    const giphsToShow = [];
    const giphModelCreated = data?.data.map(g => toModel(g));

    const id = Math.round(Number(params.id));
    const init = id * 5;
    const length = init + 5;
    for(let i = init; i < length; i++) {
        giphsToShow.push(giphModelCreated![i])
    }

    return Promise.resolve(giphsToShow);
}
