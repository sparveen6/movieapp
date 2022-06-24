
import React, { useContext, useEffect, useState } from 'react';



const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;


const AppContext = React.createContext();

//we need to create provider Function

const AppProvider = ({children}) => {

    const [isLoading, setIsLoding]= useState(true);
    const [movie, setMovie]= useState([]);
    const [isError, setIsError]= useState({show: "false", msg: ""});
    const [query, setQuery]= useState("Dil");

    const getMovies = async(url)=>{
        try{
            const res = await fetch (url);
            const data= await res.json();
            console.log(data);
        
        if(data.Response === "True"){
            setIsLoding(false);
           setMovie(data.Search);
        }else{
            setIsError({
                show: true,
                msg: data.error
            });

        }
    }
        catch(error){
            console.log(error);
        }
    }

    useEffect (() =>{
     getMovies(`${API_URL}&s=${query}`)
    }, [query]);

    return <AppContext.Provider value={{isLoading, isError, movie,query, setQuery }}>{children}</AppContext.Provider>
};

//Global custom Hook
const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider, useGlobalContext};