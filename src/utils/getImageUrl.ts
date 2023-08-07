export const getImageUrl = (img?: string) => {
  return img !== 'N/A' ? img : '/assets/png/no-image-placeholder.png';
};
