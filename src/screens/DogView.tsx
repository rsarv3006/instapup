import React, {useMemo} from 'react';
import {Dimensions, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Colors} from '../aesthetics/Colors';
import {DogViewBreedItem} from '../components/DogViewBreedItem';
import {DogViewNoBreedInfo} from '../components/DogViewNoBreedInfo';
import {IDogResponseItem} from '../typings/DogResponseItem';
import {ArrayUtil} from '../utils/ArrayUtil';
import {DogUtil} from '../utils/DogUtil';

const {width, height} = Dimensions.get('window');

interface IProps {
  route: {
    params: {
      dog: IDogResponseItem;
    };
  };
}

export const DogView: React.FC<IProps> = ({route}) => {
  const dog = route.params.dog;

  const breedInformation = useMemo(() => {
    let breedComponents: React.ReactElement[] = [];
    for (const breed of dog.breeds) {
      if (DogUtil.isBreedInformationPresent(breed)) {
        breedComponents.push(
          <DogViewBreedItem breed={breed} key={breed.reference_image_id} />,
        );
      }
    }
    return breedComponents;
  }, [dog.breeds]);

  return (
    <SafeAreaView>
      <FastImage
        style={localStyles.imageStyle}
        source={{uri: dog.url}}
        resizeMode={FastImage.resizeMode.contain}
      />
      {ArrayUtil.isArrayWithLength(breedInformation) ? (
        <ScrollView style={localStyles.scrollView}>
          {breedInformation}
        </ScrollView>
      ) : (
        <DogViewNoBreedInfo />
      )}
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  scrollView: {
    marginTop: 6,
    alignSelf: 'center',
    height: height * 0.4,
  },
  imageStyle: {
    width: width,
    height: height * 0.4,
    backgroundColor: Colors.LightGray,
  },
});
