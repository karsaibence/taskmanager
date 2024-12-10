import axios from "axios";
import { createContext, useEffect, useState } from "react";

// Create the context
export const DataContext = createContext();

// Create the provider component
export const DataProvider = ( { children } ) => {
    const [ user, setUser ] = useState( [] ); // Listába mentett adatok
    const [ task, setTask ] = useState( [] ); // Listába mentett adatok
    const [ loading, setLoading ] = useState( true ); // Betöltési állapot
    const [ error, setError ] = useState( null ); // Hibakezelés

    // Fetch data from API
    const fetchTaskData = async () => {
        try {
            const response = await axios.get( "http://localhost:8000/api/tasks" );
            setTask( response.data );
        } catch ( err ) {
            setError( err.message );
        } finally {
            setLoading( false );
        }
    };

    const fetchUserData = async () => {
        try {
            const response = await axios.get( "http://localhost:8000/api/users" );
            setUser( response.data ); // Mentés a listába
        } catch ( err ) {
            setError( err.message );
        } finally {
            setLoading( false );
        }
    };

    const deleteResource = async ( id ) => {
        try {
            const response = await axios.delete( `http://localhost:8000/api/tasks/${ id }` );
            console.log( 'Sikeres törlés:', response.data );
            fetchTaskData();
        } catch ( error ) {
            console.error( 'Hiba a törlés során:', error.response ? error.response.data : error.message );
        }
    };


    const postTask = async ( userData ) => {
        try {
            const response = await axios.post( 'http://localhost:8000/api/store-tasks/', userData );
            console.log( 'sikeres mentés:', response.data )
            fetchTaskData();
        } catch ( error ) {
            console.log( 'Hiba a mentés során:', error.response ? error.response.data : error.message );
        }
    }

    const putTask = async ( e, id ) => {
        try {
            const response = await axios.put( `http://localhost:8000/api/taskss/${ id }`, e );
            console.log( 'sikeres módosítás', response.data )
            fetchTaskData();
        } catch ( error ) {
            console.log( 'Hiba a módosítás során:', error.response ? error.response.data : error.message );
        }
    }


    function userNameKeres( id ) {
        let name = "";
        user.forEach( e => {
            if ( e.user_id === id ) {
                name = e.name
            }
        } );
        return name
    }

    // Fetch data when the component mounts
    useEffect( () => {
        fetchTaskData();
        fetchUserData();
    }, [] );

    return (
        <DataContext.Provider value={{ user, loading, error, task, deleteResource, setTask, postTask, putTask, userNameKeres, fetchTaskData }}>
            {children}
        </DataContext.Provider>
    );
};