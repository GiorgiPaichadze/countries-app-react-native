import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { CountryProps } from '../types';
import Container from './Container';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { filterByCode } from '../config';

const CardDetails: React.FC<CountryProps & { navigation: any }> = ({
  navigation,
  flags,
  name,
  population,
  region,
  subregion,
  capital,
  tld,
  currencies,
  borders,
  languages,
}) => {
  const [neighbors, setNeighbors] = useState([]);

  useEffect(() => {
    if (borders) {
      axios
        .get(filterByCode(borders))
        .then(({ data }) => setNeighbors(data))
        .catch((error) => console.log(error));
    }
  }, [borders]);

  return (
    <Container>
      <ScrollView style={styles.card}>
        <Image
          style={styles.cardImage}
          source={{
            uri: flags.png,
          }}
        />
        <View style={styles.cardWrapper}>
          <Text style={styles.cardTitle}>{name.common}</Text>
          <View style={styles.cardListGroup}>
            <View style={styles.cardList}>
              <View style={styles.cardListItem}>
                <Text style={styles.cardListInfo}>Native Name:</Text>
                <View>
                  {Object.keys(name.nativeName).map((el, index) => (
                    <Text style={styles.cardListTitle} key={index}>
                      {name.nativeName[el].official}
                    </Text>
                  ))}
                </View>
              </View>
              <View style={styles.cardListItem}>
                <Text style={styles.cardListInfo}>Population:</Text>
                <Text style={styles.cardListTitle}>{population.toLocaleString()}</Text>
              </View>
              <View style={styles.cardListItem}>
                <Text style={styles.cardListInfo}>Region:</Text>
                <Text style={styles.cardListTitle}>{region}</Text>
              </View>
              <View style={styles.cardListItem}>
                <Text style={styles.cardListInfo}>Sub Region:</Text>
                <Text style={styles.cardListTitle}>{subregion}</Text>
              </View>
              <View style={styles.cardListItem}>
                <Text style={styles.cardListInfo}>Capital:</Text>
                {capital.map((el: string, index: number) => (
                  <Text style={styles.cardListTitle} key={index}>
                    {el}
                  </Text>
                ))}
              </View>
            </View>
            <View style={styles.cardList}>
              <View style={styles.cardListItem}>
                <Text style={styles.cardListInfo}>Top Level Domain:</Text>

                {tld.map((el: string, index: number) => (
                  <Text style={styles.cardListTitle} key={index}>
                    {el}
                  </Text>
                ))}
              </View>
              <View style={styles.cardListItem}>
                <Text style={styles.cardListInfo}>Currency:</Text>

                {Object.keys(currencies).map((el, index) => (
                  <Text style={styles.cardListTitle} key={index}>
                    {currencies[el].name}
                  </Text>
                ))}
              </View>
              <View style={styles.cardListItem}>
                <Text style={styles.cardListInfo}>Languages:</Text>
                {Object.keys(languages).map((el, index) => (
                  <Text style={styles.cardListTitle} key={index}>
                    {languages[el]}
                  </Text>
                ))}
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.cardListInfo}>Border Countries:</Text>
            <View style={styles.cardTabs}>
              {borders ? (
                <>
                  {neighbors &&
                    neighbors.map((el: any, index) => (
                      <Text
                        style={styles.cardTab}
                        onPress={() =>
                          navigation.navigate('Details', {
                            name: el.name.common,
                            title: el.name.common,
                          })
                        }
                        key={index}>
                        {el.name.common}
                      </Text>
                    ))}
                </>
              ) : (
                <Text>There is no border countries</Text>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingTop: 40,
  },
  cardImage: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  cardWrapper: {
    padding: 20,
  },
  cardTitle: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: '700',
  },
  cardListGroup: {
    gap: 10,
    marginBottom: 10,
  },
  cardList: {
    gap: 10,
  },
  cardListItem: {
    gap: 5,
  },
  cardListInfo: {
    fontSize: 20,
    fontWeight: '600',
  },
  cardListTitle: {
    fontSize: 16,
  },
  cardTabs: {
    marginTop: 10,
    gap: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 100,
  },
  cardTab: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
});

export default CardDetails;
