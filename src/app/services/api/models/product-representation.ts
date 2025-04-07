import {RatingRepresentation} from './rating-representation';

export interface ProductRepresentation {

  category?: string,
  description?: string,
  id?: number,
  image?: string,
  price?: number,
  title?: string,
  rating?: RatingRepresentation
}
