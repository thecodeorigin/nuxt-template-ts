// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const state = () => ({
  locale: 'en',
});

export default state;

export type RootState = ReturnType<typeof state>;
