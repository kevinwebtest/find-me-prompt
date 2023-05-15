'use client'

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

import Profile from '@components/Profile';


const MyProfile = ({params}) => { //getting id from url
    const nameParams = useSearchParams();
    const username = nameParams.get('name');
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const fetchPosts =async () => {
            const response = await fetch(`/api/users/${params.id}/posts`);
            const data = await response.json();
        
            setPosts(data);
        }
    

        if(params.id) fetchPosts();
    },[params.id]);
    

    return (
        <Profile 
            name={`${username}'s`}
            desc={`Welcome to ${username}'s personalized profile page. Here you can view all of ${username}'s prompts.`}
            data={posts}
        />
    )
}

export default MyProfile