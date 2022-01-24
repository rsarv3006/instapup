export interface IDogResponseItem {
  breeds: IBreed[];
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface IBreed {
  weight: {
    imperial: string;
    metric: string;
  };
  height: {
    imperial: string;
    metric: string;
  };
  id: number;
  name: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  reference_image_id: string;
}
