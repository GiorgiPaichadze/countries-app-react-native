import { View } from 'react-native';
import Controls from '../components/Controls/Controls';
import { CountriesProps } from '../types';
import List from '../components/List';
import { useEffect, useState } from 'react';

import axios from 'axios';
import { ALL_COUNTRIES } from '../config';

const Home: React.FC<CountriesProps & { navigation: any }> = ({
  countries,
  setCountries,
  navigation,
}) => {
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const handleSearch = (search: string = '', region: string = '') => {
    let data = [...countries];

    if (region) {
      data = data.filter((country) => country.region.includes(region));
    }

    if (search) {
      data = data.filter((country) => {
        return country.name.common.toLowerCase().includes(search.toLowerCase());
      });
    }

    setFilteredCountries(data);
  };

  useEffect(() => {
    if (!countries.length)
      axios
        .get(ALL_COUNTRIES)
        .then(({ data }) => setCountries(data))
        .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    handleSearch();
  }, [countries]);

  return (
    <View>
      <Controls onSearch={handleSearch} />
      <List countries={filteredCountries} navigation={navigation} />
    </View>
  );
};

export default Home;
