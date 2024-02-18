import { FlatList, TouchableOpacity } from 'react-native';
import { CountryProps } from '../types';
import Card from './Card';
import Container from './Container';

interface ListProps {
  countries: CountryProps[];
}

const List: React.FC<ListProps & { navigation: any }> = ({ countries, navigation }) => {
  return (
    <Container>
      <FlatList
        data={countries}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Details', {
                name: item.name.common,
                title: item.name.common,
              })
            }>
            <Card {...item} />
          </TouchableOpacity>
        )}
      />
    </Container>
  );
};

export default List;
