import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PessoaPesquisa {
  nome;
  cidade;
  estado;
  ativo;
}

@Injectable({
  providedIn: 'root'
})
export class PessoaPesquisaService {

  constructor(private http: HttpClient) { }

  getPessoas() {
    return this.http.get<any>('assets/pessoas.json')
      .toPromise()
      .then(res => res.data as PessoaPesquisa[])
      .then(data => data);
  }
}
