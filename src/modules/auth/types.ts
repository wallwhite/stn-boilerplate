import { AuthLoginFormValues, AuthRegisterFormValues } from '@stn-ui/forms';

export interface AuthCredentials {
  type: 'login' | 'register';
  email: string;
  password: string;
}

export interface AuthorizeDataLogin {
  type: 'login';
  data: AuthLoginFormValues;
}

export interface AuthorizeDataRegister {
  type: 'register';
  data: AuthRegisterFormValues;
}

export type AuthorizeData = AuthorizeDataLogin | AuthorizeDataRegister;
