import { StyleSheet, TextInput, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SearchProps } from '../../types';

const Search: React.FC<SearchProps> = ({ search, setSearch }) => {
  return (
    <View style={styles.search}>
      <Ionicons name="search" size={24} color="#000" />
      <TextInput
        style={styles.search__field}
        value={search}
        onChangeText={(text) => setSearch(text)}
        placeholder="Search for a country..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: 280,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    gap: 10,
  },
  search__field: {
    fontSize: 16,
  },
});

export default Search;
