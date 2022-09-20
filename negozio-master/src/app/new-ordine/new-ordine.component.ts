import {Ordine} from './../ordini/ordini';
import {Cliente} from './../clienti/cliente';
import {ClientiService} from './../clienti.service';
import {Component, OnInit} from '@angular/core';
import {ProductService} from '../products/products.service';
import {HttpClient} from '@angular/common/http';
import {FormArray, FormBuilder, FormControl} from '@angular/forms';


@Component({
  selector: 'app-new-ordine',
  templateUrl: './new-ordine.component.html',
  styleUrls: ['./new-ordine.component.css']
})
export class NewOrdineComponent implements OnInit {
  url = 'http://localhost:8080/ordine/new';
  submitted = false;
  products = [];
  clienti = [];
  checkoutForm;
  nuovoOrdine: Ordine = new Ordine();

  get ordersFormArray() {
    return this.checkoutForm.controls.listaProdotti as FormArray;
  }

  constructor(private http: HttpClient,
              private service: ProductService,
              private clienteService: ClientiService,
              private formBuilder: FormBuilder) {

    this.checkoutForm = this.formBuilder.group({
      idCliente: '',
      listaProdotti: new FormArray([]),
      data: '',
    });
    this.listaProdotti();
    this.listaClienti();

  }

  private addCheckboxes() {
    this.products.forEach(() => this.ordersFormArray.push(new FormControl(false)));
  }

  ngOnInit(): void {

  }

  onSubmit(formData) {

    const selectedOrderIds = this.checkoutForm.value.listaProdotti
      .map((checked, i) => checked ? { idProdotto: this.products[i].idProdotto } : null)
      .filter(v => v !== null);

    this.nuovoOrdine.idCliente = formData.idCliente;
    this.nuovoOrdine.listaProdotti = selectedOrderIds;
    this.nuovoOrdine.data = formData.data;
    this.nuovoOrdine.totale = selectedOrderIds.length;
    this.http.post<any>(this.url, this.nuovoOrdine)
      .subscribe(() => {
        alert('ordine inserito');
      });
  }


  invia(): void {
    this.http.post<any>(this.url, this.products)
      .subscribe(() => {
        alert('ordine inserito');
      });
  }

  resetForm() {


  }

  listaProdotti(): void {
    this.service.getProducts().subscribe((data: any[]) => {
      this.products = data;
      this.addCheckboxes();
    });
  }

  listaClienti(): void {
    this.clienteService.getClienti().subscribe((data: Cliente[]) => {
      console.log('Lista clienti: ', data);
      this.clienti = data;
    });
  }

}
