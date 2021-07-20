import { useEffect, useState } from "react";
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessege, setErrorMessage] = useState('');
    const searchApi = async (searchTerm) => {
        try{
            const response = await yelp.get('/search',{
                params: {
                    limit: 50,
                    term: searchTerm, // mozna zastapic term,
                    location: 'poznan'
                }
            });
            setResults(response.data.businesses);
        }catch(err){
            setErrorMessage('Something went wrong')
        }
        };
    
    useEffect(() => {
        searchApi('pasta');
    }, []);
    return [searchApi, results, errorMessege];

};