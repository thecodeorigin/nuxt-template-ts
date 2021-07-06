import slug from 'slug';

export default (val: string): string | undefined => {
  // For more information, visit https://www.npmjs.com/package/slug
  return slug(val);
};
