import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { ProductService } from '../products/products.service';


@Component({
  selector: 'app-list-ordini',
  templateUrl: './list-ordini.component.html',
  styleUrls: ['./list-ordini.component.css']
})
export class ListOrdiniComponent implements OnInit {

  products = [];

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getOrders().subscribe((data: any[]) => {
      console.log(data);
      this.products = data;
    });
  }

}
