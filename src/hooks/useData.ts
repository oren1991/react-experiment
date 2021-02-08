import { useState, useEffect } from "react";
import type {CardProps} from '../components/Card'
// imitate datafetch
export const useData = (init: CardProps[] | null) => {
    const [data, setData] = useState<CardProps[] | null>(init)

    useEffect(() => {
        setTimeout(()=>{
            setData([
                {
                    title: "Hello card 1",
                    subtitle: "subtitle 1",
                    content: "Short description of the card or image or anything",
                    src: "https://picsum.photos/500/500?random=2",
                },
                {
                    title: "Hello card 2",
                    subtitle: "subtitle 2",
                    content: "Short description of the card or image or anything",
                    src: "https://picsum.photos/500/500?random=3",
                },
                {
                    title: "Hello card 3",
                    subtitle: "subtitle 3",
                    content: "Short description of the card or image or anything",
                    src: "https://picsum.photos/500/500?random=1",
                },
            ])
        }, 500)
    }, [])
    return data
}
