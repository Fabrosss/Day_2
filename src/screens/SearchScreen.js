import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../Components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../Components/ResultsList';
const SearchScreen = ({navigation}) => {

    const[term, setTerm] = useState('');
    const[searchApi, results, errorMessege ] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(results => {
            return results.price === price;
        });
    }
    
    return (
        <View style = {{flex: 1}}>
            <SearchBar 
            term = {term} 
            onTermChange = {setTerm}
            onTermSubmit= {() => searchApi(term)}
            />
            {errorMessege? <Text> {errorMessege}</Text> : null}
            <ScrollView>
            <ResultsList results = {filterResultsByPrice('$')} title = "Cost Effective:" />
            <ResultsList results = {filterResultsByPrice('$$')} title = "Bit Pricier:" />
            <ResultsList results = {filterResultsByPrice('$$$')} title = "Big Spender:" />
            </ScrollView>
        </View>

    );

}

const styles = StyleSheet.create({});

export default SearchScreen