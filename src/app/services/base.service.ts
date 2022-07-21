import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private router: Router) { }

  navigate(path: string, id?: any) {
    let pathComplete = path;
    if (id) {
      pathComplete += `/${id}`;
    }
    this.router.navigate([pathComplete]);
  }
}
