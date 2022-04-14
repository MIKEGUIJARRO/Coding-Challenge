import React from 'react'
import Scaffold from '../components/Scaffold'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';
import Card from '../components/Card';

const UserInfo = () => {

    const { id } = useParams();

    const URL = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
    const { data, error, isPending } = useFetch(URL);

    return (
        <div>
            <Scaffold>
                <h1 className='py-12'>Users Info</h1>

                <div className='flex flex-col flex-row justify-center items-center space-y-8'>
                    {isPending && <h2>Loading...</h2>}
                    {error && <h2>{error}</h2>}
                    {data && data.map((post) => (<Card title={`${post.id}. - ${post.title}`} body={post.body} />))}
                </div>


            </Scaffold >
        </div >
    )
}

export default UserInfo
