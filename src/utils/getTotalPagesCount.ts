export const getTotalPagesCount = (totalCount: string) => {
  const totalNum = Number(totalCount);
  return totalNum % 10 === 0 ? totalNum / 10 : Math.floor(totalNum / 10) + 1;
};
