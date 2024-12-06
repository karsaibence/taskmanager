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
    const fetchData = async () => {
        try {
            const response = await axios.get( "http://localhost:8000/api/users" );
            setUser( response.data ); // Mentés a listába
            console.log( response );
            const response2 = await axios.get( "http://localhost:8000/api/tasks" );
            setTask( response2.data );
        } catch ( err ) {
            setError( err.message );
        } finally {
            setLoading( false );
        }
    };

    const deleteResource = async ( id ) => {
        const tempTask = [ ...task ]
        for ( let index = 0; index < tempTask.length; index++ ) {
            const e = tempTask[ index ];
            if ( id === e.id ) {
                tempTask.splice(index,1);
            }
        }
        setTask( tempTask )
        try {
            const response = await axios.delete( `http://localhost:8000/api/tasks/${ id }` );
            console.log( 'Sikeres törlés:', response.data );
        } catch ( error ) {
            console.error( 'Hiba a törlés során:', error.response ? error.response.data : error.message );
        }
    };

    // Fetch data when the component mounts
    useEffect( () => {
        fetchData();
    }, [] );

    return (
        <DataContext.Provider value={{ user, task, loading, error, deleteResource }}>
            {children}
        </DataContext.Provider>
    );
};