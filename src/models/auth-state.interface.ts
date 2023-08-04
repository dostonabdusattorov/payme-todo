import { HttpStatus } from '../constants';

export interface AuthState {
  user: number | null;
  error: string | null;
  status: HttpStatus;
}
