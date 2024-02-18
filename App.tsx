import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/Home';
import Details from './screens/Details';
import { useState } from 'react';
import { CountryProps } from './types';

const Stack = createNativeStackNavigator();

const App = () => {
  const [countries, setCountries] = useState<CountryProps[]>([]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: 'Where in the world?' }}>
          {(props) => <Home {...props} countries={countries} setCountries={setCountries} />}
        </Stack.Screen>
        <Stack.Screen name="Details" component={Details} options={{ title: 'Country' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
