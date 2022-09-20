import { Component, OnInit } from '@angular/core';
import { ProductService } from '../products.service';
import {MatMenuModule} from '@angular/material/menu';
import { requestOrdine } from '../requestOrdine';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = [];
  newOrder: requestOrdine;

  constructor(private service: ProductService ) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe((data: any[]) => {
        console.log(data);
        this.products = data;
    });
    this.service.addOrder(this.newOrder).subscribe(ordine => this.products.push(ordine));
  }

}
