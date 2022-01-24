import {AxiosResponse} from 'axios';
import {useCallback, useEffect, useState} from 'react';
import {DogApi} from '../api/DogApi';

export const useGetDoggos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dogs, setDogs] = useState([]);

  const fetchRandomDogs = useCallback(async () => {
    let result: AxiosResponse<any, any> | null = null;
    setIsLoading(true);
    try {
      result = await DogApi.getRandomDogs(20, 1);
      setDogs(result.data);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
    return result;
  }, []);

  useEffect(() => {
    fetchRandomDogs();
  }, [fetchRandomDogs]);

  return {dogs, fetchRandomDogs, isLoading};
};
