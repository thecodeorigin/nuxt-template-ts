declare interface AuthRegister {
  email: string;
  fullName: string;
  password: string;
}

declare interface AuthLogin {
  email: string;
  password: string;
}

declare interface AuthUser {
  email: string;
  fullName: string;
  avatar: string;
}

declare interface AuthData {
  user: AuthUser;
  token: string;
}
