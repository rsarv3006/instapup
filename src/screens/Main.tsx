import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import {DogListItem} from '../components/DogListItem';
import {useGetDoggos} from '../hooks/useGetDoggos';
import {IDogResponseItem} from '../typings/DogResponseItem';

export const Main = () => {
  const {dogs, fetchRandomDogs, isLoading} = useGetDoggos();

  const renderItem = ({item}: {item: IDogResponseItem}) => (
    <DogListItem dog={item} key={item.id} />
  );

  return (
    <SafeAreaView style={localStyles.container}>
      <FlatList
        data={dogs}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onRefresh={fetchRandomDogs}
        refreshing={isLoading}
      />
    </SafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
