import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';

function App() {
  const [country, setCountries] = useState('');
  const [region, setRegions] = useState('');
  const countries = [
    {key: 'AL', value: 'Algeria'},
    {key: 'UK', value: 'United Kingdom'},
    {key: 'TN', value: 'Tunisia'}
  ];

  const regions = {
    "AL": [
      {key: '1', value: 'Algeria'},
      {key: '2', value: 'Oran'},
      {key: '3', value: 'Costantine'}
    ],
    "UK":[
      {key: '4', value: 'London'},
      {key: '5', value: 'Manchester'},
      {key: '6', value: 'Region from UK'}
    ],
    "TN":[
      {key: '7', value: 'Tunis'},
      {key: '8', value: 'Sousse'},
      {key: '9', value: 'Bizerte'},
      {key: '10', value: 'Monastir'},
    ]
  }

  return (
    <View style={styles.container}>
      <SelectList data={countries} setSelected={setCountries} 
      placeholder={"Select Country"}
      />
      <SelectList data={regions[country]} setSelected={setRegions}
      boxStyles={{marginTop: 30}} 
      placeholder={"Select Region"}
      defaultOption={regions[country][0]}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 50
  },
});
