export default (val: string): string | undefined => {
  val = val + '';

  return val.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};
