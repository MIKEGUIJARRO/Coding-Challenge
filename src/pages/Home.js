import React from 'react'
import Scaffold from '../components/Scaffold'
import { TableUsers } from '../components/TableUsers';
import { useFetch } from '../hooks/useFetch'

const Home = () => {
    const URL = 'https://jsonplaceholder.typicode.com/users';
    const { data, error, isPending } = useFetch(URL);

    console.log(data);
    return (
        <div>
            <Scaffold>
                <h1 className='py-12'>Users Table</h1>
                {isPending && <h2>Loading...</h2>}
                {error && <h2>{error}</h2>}
                {data && <TableUsers data={data} />}
            </Scaffold>
        </div>
    )
}

export default Home
