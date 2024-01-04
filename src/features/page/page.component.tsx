import {useLoaderData} from "react-router-dom";
import {GiphModel} from "../giph/domain/giph-model.ts";

export default function PageComponent(){


    const data = useLoaderData() as GiphModel[];

    return <div>
        { data.map( d => <img src={d.images.original.url} height={150} width={150} />)}
    </div>
}
