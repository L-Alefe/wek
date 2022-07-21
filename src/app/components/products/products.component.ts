import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from 'src/app/services/base.service';
import { ProductsService } from 'src/app/services/products.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<Product> = [];

  constructor(
    private serviceProducts: ProductsService,
    private base: BaseService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.products = [];
    this.get();
  }

  get() {
    this.serviceProducts.get().subscribe((res: Array<Product>) => {
      this.products = res;
    }, (error: HttpErrorResponse) => {
      this.toastr.error('Falha na consulta!');
      console.log(error);
    });
  }

  navigate(path: string, id?: string) {
    this.base.navigate(path, id);
  }

  exclude(id: string) {
    this.serviceProducts.delete(id).subscribe(() => {
      this.get();
      this.toastr.success('Exclusão realizada!');
    }, (error: HttpErrorResponse) => {
      this.toastr.error('Falha na exclusão!');
      console.log(error);
    });
  }

}
