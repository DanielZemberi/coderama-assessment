import * as yup from 'yup';

export interface ISearchInitialValues {
  movie: string;
}

export const validationSchema = yup.object({
  movie: yup.string().required('Please enter movie title'),
});
