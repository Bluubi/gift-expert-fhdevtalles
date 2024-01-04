import {GiphDto} from "./giph-dto.ts";

export interface Giph {
    data: GiphDto[];
}

export const getTrendingGiphs = async (): Promise<Giph | undefined > =>  {
    const response = await fetch('https://api.giphy.com/v1/gifs/trending?api_key=8pyHN7FvL8QLGvPP22arDUrB1LGfjV3T');
    if(response.status === 200){
        return await response.json() as Giph
    }
    return undefined;
}
