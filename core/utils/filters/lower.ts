export default (val: string): string | undefined => {
  if (val) {
    return val.toLowerCase() || '';
  }
};
