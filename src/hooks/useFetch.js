import React, { useEffect, useState } from 'react'

export const useFetch = (url, method = 'GET') => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setIsPending(true);
            try {
                const res = await fetch(url, { signal: controller.signal });
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                const data = await res.json();

                setIsPending(false);
                setData(data);
                setError(null);
            } catch (e) {
                setIsPending(false);
                setError('Could not fetch data...');
            }
        }

        if (method === "GET") {
            fetchData();
        }
        // else if (method === "POST" && options) {
        // fetchData(options);
        // Pending to implement in the future
        // }
        return () => {
            controller.abort();
        }

    }, [url, method]);
    return { data, isPending, error };
}
