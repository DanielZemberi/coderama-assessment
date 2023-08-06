import { Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react';
import { validationSchema } from './Search.schema';

interface SearchProps {
  onSearch: (searchedValue: string) => void;
  lastSearchedMovie: string;
}

const Search: React.FC<SearchProps> = ({ onSearch, lastSearchedMovie }) => {
  const { handleSubmit, touched, errors, values, handleChange, handleBlur } = useFormik({
    initialValues: { movie: lastSearchedMovie },
    validationSchema,
    onSubmit: ({ movie }) => {
      onSearch(movie);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" justifyContent="center" alignItems="flex-start" marginBottom={5}>
        <TextField
          id="outlined-basic"
          label="Search movie.."
          name="movie"
          value={values.movie}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.movie && Boolean(errors.movie)}
          helperText={touched.movie && errors.movie}
        />
        <Button color="primary" variant="contained" type="submit" sx={{ height: '56px' }}>
          Search
        </Button>
      </Box>
    </form>
  );
};

export default Search;
