import { ErrorMessage, LikeButton, Loader } from '@components/ui';
import useMovieDetail from '@hookes/query/movie/useMovieDetail';
import { Box, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import InfoRow from './components/InfoRow/InfoRow';
import { getImageUrl } from 'src/utils/getImageUrl';

const Detail: React.FC = () => {
  const params = useParams<{ movieId: string }>();
  const { data, isLoading, error } = useMovieDetail(params.movieId!);

  return (
    <>
      {error ? <ErrorMessage error={error} /> : null}
      {data ? (
        <Box flexDirection={{ xs: 'column', sm: 'row' }} display="flex" gap={4}>
          <Box sx={{ width: '100%', maxWidth: '400px' }} margin="0 auto">
            <img src={getImageUrl(data?.Poster)} style={{ width: '100%' }} />
          </Box>
          <Box padding={2}>
            <Typography variant="h2">
              {data?.Title}
              <span>
                <LikeButton movieId={params.movieId!} />
              </span>
            </Typography>
            <InfoRow label="Director" value={data?.Director} />
            <InfoRow label="Year" value={data?.Year} />
            <InfoRow label="Genre" value={data?.Genre} />
            <InfoRow label="Actors" value={data?.Actors} />
            <InfoRow label="Writes" value={data?.Writer} />
            <InfoRow label="Rating" value={data?.imdbRating} />
            <InfoRow label="Votes" value={data?.imdbVotes} />
            <Typography variant="body1" paddingTop={2}>
              {data?.Plot}
            </Typography>
          </Box>
        </Box>
      ) : null}
      <Loader loading={isLoading} />
    </>
  );
};

export default Detail;
