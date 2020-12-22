import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { ProductService } from "../services/product.service";

@Injectable()
export class ShopGuard implements CanActivate{

  constructor(private router: Router,
              private dataService: ProductService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
    return confirm('Do you want register?');

    if (!this.dataService.isLoggedIn()) {
      this.router.navigate(['./admin/register'])
      return false;
    }
    return true;
  }
}
