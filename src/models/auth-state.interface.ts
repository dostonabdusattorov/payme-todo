import { HttpStatus } from '../constants';

export interface AuthState {
  user: number | string | null;
  error: string | null;
  status: HttpStatus;
}
