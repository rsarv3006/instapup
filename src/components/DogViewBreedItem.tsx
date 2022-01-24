import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../aesthetics/Colors';
import {IBreed} from '../typings/DogResponseItem';

interface IProps {
  breed: IBreed;
}

const {width} = Dimensions.get('window');

export const DogViewBreedItem: React.FC<IProps> = ({breed}) => {
  return (
    <View style={localStyles.infoContainer} key={breed.id}>
      <Text style={localStyles.statTextStyle}>Breed: {breed.name}</Text>
      <Text style={localStyles.statTextStyle}>Lifespan: {breed.life_span}</Text>
      <Text style={localStyles.statTextStyle}>
        Breed Group: {breed.breed_group}
      </Text>
      <Text style={localStyles.statTextStyle}>Bred For: {breed.bred_for}</Text>
      <Text style={localStyles.lastStatTextStyle}>
        Temperament: {breed.temperament}
      </Text>
    </View>
  );
};

const localStyles = StyleSheet.create({
  infoContainer: {
    width: width * 0.9,
    borderColor: Colors.LightGray,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 6,
  },
  statTextStyle: {
    marginTop: 4,
    marginHorizontal: 4,
    fontSize: 16,
  },
  lastStatTextStyle: {
    marginTop: 4,
    marginHorizontal: 4,
    fontSize: 16,
    marginBottom: 4,
  },
});
