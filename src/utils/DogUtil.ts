import {IBreed} from '../typings/DogResponseItem';
import {StringUtil} from './StringUtil';

export class DogUtil {
  static isBreedInformationPresent(breed: IBreed) {
    if (
      StringUtil.isStringWithLength(breed.name) &&
      StringUtil.isStringWithLength(breed.bred_for) &&
      StringUtil.isStringWithLength(breed.breed_group) &&
      StringUtil.isStringWithLength(breed.life_span) &&
      StringUtil.isStringWithLength(breed.temperament)
    ) {
      return true;
    }

    return false;
  }
}
