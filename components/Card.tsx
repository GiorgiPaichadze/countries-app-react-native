import { View, Text, Image, StyleSheet } from 'react-native';
import { CountryProps } from '../types';

const Card: React.FC<CountryProps> = ({ name, capital, region, population, flags }) => {
  const CardData = {
    image: flags.png,
    name: name.common,
    info: [
      {
        title: 'Population',
        description: population.toLocaleString(),
      },
      {
        title: 'Region',
        description: region,
      },
      {
        title: 'Capital',
        description: capital,
      },
    ],
  };

  return (
    <View style={styles.card}>
      <Image
        style={styles.cardImage}
        source={{
          uri: CardData.image,
        }}
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{name.common}</Text>
        <View style={styles.cardList}>
          {CardData.info.map((item, index) => (
            <View key={index} style={styles.cardListItem}>
              <Text style={styles.cardInfo}>{item.title}</Text>
              <Text style={styles.cardInfoTitle}>{item.description}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  cardImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 25,
    gap: 20,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: '700',
  },
  cardList: {
    gap: 10,
  },
  cardListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cardInfo: {
    fontSize: 20,
    fontWeight: '700',
  },
  cardInfoTitle: {
    fontSize: 16,
  },
});

export default Card;
