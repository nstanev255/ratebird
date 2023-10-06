import { Taxonomy } from '../api/ratebird-api/taxonomy/taxonomy';

export type CommonListPageProps = {
  genres: Array<Taxonomy>,
  ratings: Array<Taxonomy>,
  types: Array<Taxonomy>,

}