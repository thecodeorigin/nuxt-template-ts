export default (val: string): string | undefined => {
  return val.charAt(0).toUpperCase() + val.slice(1);
};
