import { Component, OnInit } from '@angular/core';
import { PessoaPesquisaService, PessoaPesquisa } from './../pessoa-pesquisa.service';

@Component({
  selector: 'app-pessoa-pesquisa',
  templateUrl: './pessoa-pesquisa.component.html',
  styleUrls: ['./pessoa-pesquisa.component.css']
})
export class PessoaPesquisaComponent implements OnInit {

  cols: any[];

  pessoas: PessoaPesquisa[];

  constructor( private pessoaPesquisaService: PessoaPesquisaService) { }

  ngOnInit(): void {

    this.cols = [
      { field: 'nome', header: 'Nome' },
      { field: 'cidade', header: 'Cidade' },
      { field: 'estado', header: 'Estado' },
      { field: 'ativo', header: 'Status' }
    ];

    this.pessoaPesquisaService.getPessoas().
      then(pessoas => this.pessoas = pessoas);
    // this.lancamentoService.getLancamentos().
    //   then(lancamentos => this.lancamentos = lancamentos);
  }

}
