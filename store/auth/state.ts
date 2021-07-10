// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const state = () => ({
  data: null as AuthData | null,
});

export default state;

export type AuthState = ReturnType<typeof state>;
