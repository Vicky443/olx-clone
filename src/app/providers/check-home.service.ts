import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CheckHome implements CanLoad {
  constructor(private router: Router) {}

  canLoad() {
         this.router.navigate(['/app', 'tabs', 'home']);
         return true;
  }
}
