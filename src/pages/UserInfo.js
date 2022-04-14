import React from 'react'
import Scaffold from '../components/Scaffold'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
import Card from '../components/Card';

const UserInfo = () => {

    const { id } = useParams();

    const URLPosts = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
    const URLUser = `https://jsonplaceholder.typicode.com/users?id=${id}`;
    const { data: postsData, error: postsError, isPending: postsIsPending } = useFetch(URLPosts);
    const { data: userData, error: userError, isPending: userIsPending } = useFetch(URLUser);
    console.log(userData);
    return (
        <div>
            <Scaffold>
                <h1 className='py-12'>Users Info</h1>
                {userData && <h2 className='pb-12 text-gray-700'>{userData[0]?.name}</h2>}
                {userData && userData?.length === 0 && <h2 className='pb-12 text-gray-700'>Undefined User 👀</h2>}
                <div className='flex flex-col flex-row justify-center items-center space-y-8'>
                    {postsIsPending && <h2>Loading...</h2>}
                    {postsError && <h2>{postsError}</h2>}
                    {postsData && postsData.map((post) => (<Card key={post.id} title={`${post.id}. - ${post.title}`} body={post.body} />))}
                </div>


            </Scaffold >
        </div >
    )
}

export default UserInfo
