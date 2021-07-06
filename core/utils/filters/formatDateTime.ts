import moment from 'moment';

export default (val: string): string | undefined => {
  return val ? moment(val).format('HH:mm DD-MM-YYYY') : '';
};
