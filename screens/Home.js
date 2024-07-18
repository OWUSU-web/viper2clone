// screens/Home.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Backup"
        onPress={() => navigation.navigate('Backup')}
      />
    </View>
  );
}

export default Home;
