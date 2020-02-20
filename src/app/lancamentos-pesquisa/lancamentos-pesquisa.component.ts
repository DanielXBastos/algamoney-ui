import { Component, OnInit } from '@angular/core';
import { LancamentoService, Lancamento } from './../lancamento.service';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent implements OnInit {

  cols: any[];

  lancamentos: Lancamento[];

  constructor(private lancamentoService: LancamentoService) { }

  ngOnInit() {

    this.cols = [
      { field: 'pessoa', header: 'Pessoa' },
      { field: 'descricao', header: 'Descricao' },
      { field: 'dataVencimento', header: 'Data Vencimento' },
      { field: 'dataPagamento', header: 'Data Pagamento' },
      { field: 'valor', header: 'Valor' }
    ];

    this.lancamentoService.getLancamentos().
      then(lancamentos => this.lancamentos = lancamentos);
  }

}
