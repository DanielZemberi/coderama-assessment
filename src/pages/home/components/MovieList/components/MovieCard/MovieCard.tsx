import Link from '@components/ui/Link/Link';
import useAppContext from '@hookes/app/useAppContext';
import useMovieFavorite from '@hookes/app/useMovieFavorite';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarRateIcon from '@mui/icons-material/StarRate';
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

interface MovieCardProps {
  title: string;
  id: string;
  img: string;

  scrollToView?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, id, img, scrollToView }) => {
  const { isFavorite, toggleLike } = useMovieFavorite(id);
  const { setLastInteractedMovie } = useAppContext();
  const cardAnchorRef = React.createRef<HTMLDivElement>();

  const movieImage = img !== 'N/A' ? img : '/assets/png/no-image-placeholder.png';

  const handleInteractionSave = () => {
    setLastInteractedMovie(id);
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
      <Link href={`detail/${id}`} sx={{ textDecoration: 'none' }} onClick={handleInteractionSave}>
        <CardMedia sx={{ height: 200, backgroundPosition: 'top' }} image={movieImage} />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', placeSelf: 'flex-end' }}>
        <IconButton size="small" onClick={toggleLike}>
          {isFavorite ? <StarRateIcon color="warning" /> : <StarBorderIcon />}
        </IconButton>
        <Link href={`detail/${id}`} sx={{ textDecoration: 'none' }} onClick={handleInteractionSave}>
          <Button>See Detail</Button>
        </Link>
      </CardActions>
      <Box sx={{ position: 'absolute', top: '-70px' }} ref={cardAnchorRef} />
    </Card>
  );
};

export default MovieCard;
