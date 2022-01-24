import React, {useCallback} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {IDogResponseItem} from '../typings/DogResponseItem';
import {useNavigation} from '@react-navigation/native';

interface IProps {
  dog: IDogResponseItem;
}

const {width, height} = Dimensions.get('window');

export const DogListItem: React.FC<IProps> = ({dog}) => {
  const navigation = useNavigation();

  const navigate = useCallback(() => {
    navigation.navigate('DogView', {dog});
  }, [dog, navigation]);

  return (
    <TouchableOpacity onPress={navigate}>
      <FastImage
        style={{width: width, height: height * 0.4}}
        source={{uri: dog.url}}
      />
    </TouchableOpacity>
  );
};
