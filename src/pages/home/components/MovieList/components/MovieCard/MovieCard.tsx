import { LikeButton } from '@components/ui';
import Link from '@components/ui/Link/Link';
import useAppContext from '@hookes/app/useAppContext';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { getImageUrl } from 'src/utils/getImageUrl';

interface MovieCardProps {
  title: string;
  id: string;
  img: string;

  scrollToView?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, id, img, scrollToView }) => {
  const { setLastInteractedMovie } = useAppContext();
  const cardAnchorRef = React.createRef<HTMLDivElement>();

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
      <Link href={`/detail/${id}`} sx={{ textDecoration: 'none' }} onClick={handleInteractionSave}>
        <CardMedia sx={{ height: 200, backgroundPosition: 'top' }} image={getImageUrl(img)} />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', placeSelf: 'flex-end' }}>
        <LikeButton movieId={id} />
        <Link
          href={`/detail/${id}`}
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
