export interface ICurrentUser {
  fullName: string
  email: string
}

export interface IAuth {
  user: ICurrentUser
  token: string
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const state = () => ({
  data: null as IAuth | null,
})

export default state

export type AuthState = ReturnType<typeof state>
