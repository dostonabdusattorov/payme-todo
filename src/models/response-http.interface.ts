import { HttpErrorResponse } from '@angular/common/http';
import { HttpStatus } from '../constants';

export interface ResponseHttp {
  error: HttpErrorResponse | null;
  status: HttpStatus;
}
