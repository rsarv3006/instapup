import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const DogViewNoBreedInfo = () => {
  return (
    <View style={localStyles.container}>
      <Text style={localStyles.sadFaceText}>:(</Text>
      <Text>
        Unfortunately we have no breed information on the undoutedly adorable
        pupper in this picture.
      </Text>
    </View>
  );
};

const localStyles = StyleSheet.create({
  container: {
    marginTop: 6,
    alignItems: 'center',
  },
  sadFaceText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
