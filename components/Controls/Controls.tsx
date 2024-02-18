import { StyleSheet, Text, View } from 'react-native';
import { ChildrenProps } from '../../types';
import Container from '../Container';
import Search from './Search';
import { useEffect, useState } from 'react';
import AppSelect from './AppSelect';

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
];

const Controls: React.FC<{ onSearch: (search: string, region: string) => void }> = ({
  onSearch,
}) => {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    onSearch(search, region);
  }, [search, region]);

  return (
    <View style={styles.controls}>
      <Container>
        <View style={styles.controls__wrapper}>
          <Search search={search} setSearch={setSearch} />
          <AppSelect options={options} region={region} setRegion={setRegion} />
        </View>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    marginBottom: 24,
    paddingVertical: 24,
    backgroundColor: '#ccc',
  },
  controls__wrapper: {
    gap: 24,
  },
});

export default Controls;
