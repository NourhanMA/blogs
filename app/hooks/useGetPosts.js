
import { useEffect, useState } from "react";

import data from "../../public/data.json";

export const useGetPosts = () => {
    if ('newPost' in localStorage) {
        const newPosts = JSON.parse(localStorage.getItem('newPost'))
        newPosts.forEach(el => {
            console.log(data.find(elem => elem.id == el.id))
            data.find(elem => elem.id == el.id) ?
                '' : data.push(el)
        });
    }
    return data;
}

export default useGetPosts
