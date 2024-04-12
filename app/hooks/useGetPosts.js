import { useEffect, useState } from "react";


export const useGetPosts = () => {
    const [allPosts, setAllPosts] = useState([])
    useEffect(() => {
        axios.get("data.json").then(({ data }) => {
            setAllPosts(data)
        });
        console.log(allPosts)
    }, [])

    return allPosts;
}

