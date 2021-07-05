import moment from 'moment'

export default (val: string, locale = 'vi'): string | undefined => {
  moment.locale(locale)

  return moment(val).format('Do MMMM YYYY')
}
