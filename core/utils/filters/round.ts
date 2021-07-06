export default (val: string, roundLimit = 3): number | undefined => {
  return Math.floor(+val * 10 ** (roundLimit + 1)) / 10 ** (roundLimit + 1);
};
