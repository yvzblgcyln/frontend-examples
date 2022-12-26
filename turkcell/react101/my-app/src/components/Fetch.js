import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Fetch() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState([]);

    useEffect(() => {
        /*   fetch("https://jsonplaceholder.typicode.com/users")
                .then(res => res.json())
                .then(data => setUser(data))
                .catch((error)=>{console.log("error",error)})
                .finally(() => setLoading(false));
    
            axios("https://jsonplaceholder.typicode.com/users")
                .then((res) => setUser(res.data))
                .finally(() => setLoading(false))
                .catch((error)=>{console.log("error", error)})  */

        (async () => {
            try {
                const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");
                const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/users?userId=${users[0].id}`);
                setLoading(false);
                setUser(users);
                setPost(posts);
            } catch (error) { console.log("error", error) }
        })();
    }, []);

    /*const getData= async () => {
        try{
            const {data: users} = await axios( "https://jsonplaceholder.typicode.com/users" );
            const {data: posts} = await axios( `https://jsonplaceholder.typicode.com/users?userId=${users[0].id}` );
            setLoading(false);
            setUser(users);
            setPost(posts);
        }catch(error){ console.log("error",error) }
    };*/

    return (
        <div>
            <strong>USERS</strong>

            {loading && <div>Loading...</div>}
            {user.map((user) => (
                <li key={user.id}> {user.name}</li>
            ))}
            {post.map((posts) => (
                <li key={posts.id}> {posts.id}</li>
            ))}
        </div>
    )
}
