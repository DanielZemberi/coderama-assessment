import useMovieFavorite from '@hookes/app/useMovieFavorite';
import { IconButton } from '@mui/material';
import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarRateIcon from '@mui/icons-material/StarRate';

interface LikeButtonProps {
  movieId: string;
}

const LikeButton: React.FC<LikeButtonProps> = ({ movieId }) => {
  const { isFavorite, toggleLike } = useMovieFavorite(movieId);

  return (
    <IconButton onClick={toggleLike}>
      {isFavorite ? <StarRateIcon color="warning" /> : <StarBorderIcon />}
    </IconButton>
  );
};

export default LikeButton;
