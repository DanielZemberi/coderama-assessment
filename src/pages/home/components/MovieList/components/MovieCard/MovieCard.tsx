import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import { IMovieListItem } from 'src/types/movie';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from '@components/ui/Link/Link';
import useMovieFavorite from '@hookes/app/useMovieFavorite';
import useAppContext from '@hookes/app/useAppContext';

interface MovieCardProps {
  movieData: IMovieListItem;
  scrollToView?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movieData, scrollToView }) => {
  const { isFavorite, toggleLike } = useMovieFavorite(movieData.imdbID);
  const { setLastInteractedMovie } = useAppContext();
  const cardAnchorRef = React.createRef<HTMLDivElement>();

  const movieImage =
    movieData?.Poster !== 'N/A' ? movieData?.Poster : '/assets/png/no-image-placeholder.png';

  const handleInteractionSave = () => {
    setLastInteractedMovie(movieData.imdbID);
  };

  React.useEffect(() => {
    if (scrollToView && cardAnchorRef.current) {
      cardAnchorRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [cardAnchorRef, scrollToView]);

  return (
    <Card sx={{ position: 'relative' }}>
      <Link
        href={`detail/${movieData.imdbID}`}
        sx={{ textDecoration: 'none' }}
        onClick={handleInteractionSave}
      >
        <CardMedia sx={{ height: 200, backgroundPosition: 'top' }} image={movieImage} />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movieData?.Title}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', placeSelf: 'flex-end' }}>
        <IconButton size="small" onClick={toggleLike}>
          {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
        <Link
          href={`detail/${movieData.imdbID}`}
          sx={{ textDecoration: 'none' }}
          onClick={handleInteractionSave}
        >
          <Button>See Detail</Button>
        </Link>
      </CardActions>
      <Box sx={{ position: 'absolute', top: '-70px' }} ref={cardAnchorRef} />
    </Card>
  );
};

export default MovieCard;
