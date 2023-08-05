import { HttpErrorResponse } from '@angular/common/http';
import { HttpStatus } from '../constants';

export interface EditDeleteResponse {
  id: string;
  error: HttpErrorResponse | null;
  status: HttpStatus;
}
