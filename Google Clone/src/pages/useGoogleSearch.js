import React from 'react'
import API_KEY from './Key';
import { useEffect } from 'react';
import { useState } from 'react';


const CONTEXT_KEY = "ac55d000c9a643ab7";

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null); 
  
    useEffect(() => {
        const fetchData = async() =>{
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            ).then(Response => Response.json())
            .then(result => {
                setData(result)
            })
        }
       fetchData()
    }, [term])
    return {data}
}

export default useGoogleSearch
