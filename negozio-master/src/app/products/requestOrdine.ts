import { Prodotto } from './prodotto';

// tslint:disable-next-line:class-name
export interface requestOrdine{
  idOrdine: string;
  data: string;
  totale: string;
  idCliente: string;
  listaProdotti: Prodotto[];
}
