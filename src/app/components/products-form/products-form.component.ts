import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import { ProductPost } from '../../models/product-post.model';
import { Product } from '../../models/product.model';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from 'src/app/services/base.service';
import { ProductsService } from 'src/app/services/products.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  id: string;
  isNew: boolean = false;
  productCurrent: ProductPost = {
    descricao: ''
  };;

  constructor(
    private base: BaseService,
    private activate: ActivatedRoute,
    private serviceProducts: ProductsService,
    private toastr: ToastrService
  ) {
    this.id = this.activate.snapshot.params['id'];
   }

  ngOnInit() {
    this.id ? this.isNew = false : this.isNew = true;
    if (!this.isNew) {
      this.setForm(this.id);
    }
  }

  setForm(id: string) {
    this.serviceProducts.getWithId(id).subscribe((res: Product) => {
      this.productCurrent = res;
    }, (error: HttpErrorResponse) => {
      this.toastr.error('Falha na consulta!');
      console.log(error);
    });
  }

  navigate(path: string, id?: string) {
    this.base.navigate(path, id);
  }

  submitProduct() {
    if (this.isNew) {
      this.serviceProducts.post(this.productCurrent).subscribe((res: Product) => {
        this.toastr.success('Produto cadastrado!');
        this.base.navigate('');
      }, (error: HttpErrorResponse) => {
        this.toastr.error('Falha no cadastro!');
        console.log(error);
      });
    } else {
      this.serviceProducts.put(this.productCurrent).subscribe((res: Product) => {
        this.toastr.success('Produto atualizado!');
        this.base.navigate('');
      }, (error: HttpErrorResponse) => {
        this.toastr.error('Falha na edição!');
        console.log(error);
      });
    }
  }

}
