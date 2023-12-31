import { HttpErrorResponse } from '@angular/common/http';
import { HttpStatus } from '../constants';
import { User } from './user.interface';

export interface AuthState {
  user: User | null;
  error: HttpErrorResponse | null;
  status: HttpStatus;
}
