import { HttpErrorResponse } from '@angular/common/http';
import { HttpStatus } from '../constants';

export interface AuthState {
  user: number | null;
  error: HttpErrorResponse | null;
  status: HttpStatus;
}
