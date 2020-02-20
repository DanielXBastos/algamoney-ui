import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Lancamento {
  tipo;
  descricao;
  dataVencimento;
  dataPagamento;
  valor;
  pessoa;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  constructor(private http: HttpClient) { }

  getLancamentos() {
    return this.http.get<any>('assets/lancamentos.json')
      .toPromise()
      .then(res => res.data as Lancamento[])
      .then(data => data);
  }
}
