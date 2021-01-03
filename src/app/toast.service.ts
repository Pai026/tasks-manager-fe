import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private readonly toast:ToastrService
  ) { }

  showSuccessMessage(message:string) {
    this.toast.success(message);
  }

  showErrorMessage(message:string) {
    this.toast.error(message);
  }
}
