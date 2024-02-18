import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { CountryProps } from '../types';
import axios from 'axios';
import { searchByCountry } from '../config';
import CardDetails from '../components/CardDetails';

const Details = ({ route, navigation }: { route: any; title: string; navigation: any }) => {
  const { name, title } = route.params;
  const [country, setCountry] = useState<CountryProps | null>(null);

  useEffect(() => {
    navigation.setOptions({
      title,
    });
    axios
      .get(searchByCountry(name as string))
      .then(({ data }) => setCountry(data[0]))
      .catch((error) => console.log(error));
  }, [name]);

  return <View>{country && <CardDetails {...country} navigation={navigation} />}</View>;
};

export default Details;
