import React from 'react';
import { useState, useEffect } from 'react';
import Card from "./Card";
import {Authors, Post} from "../models";


const Body = () => {
    const [posts, setPosts] = useState<Post[] | null>(null);

    async function getData() {
        const api = [
            'http://maqe.github.io/json/posts.json',
            'http://maqe.github.io/json/authors.json'
        ];
        const responses = await Promise.all(api.map((point) => fetch(point)));
        const data = await Promise.all(responses.map((response) => response.json()));
        const [posts, authors] = data;
        const postData: Post[] = posts.map((m: Post) => {
            const authorsData = authors.find((f: Authors) => f.id === m.author_id);
            return {...m, authors: authorsData};
        })
        setPosts(postData)
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            { posts?.map(post => <Card post={post} key={post.id} />)}
        </>
    );
}

export default Body;
