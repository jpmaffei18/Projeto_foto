import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Fotos } from '../model/foto.model';

@Component({
  selector: 'app-fotolist',
  templateUrl: './fotolist.component.html',
  styleUrls: ['./fotolist.component.css']

})
export class FotolistComponent implements OnInit{
  
  /* Meu array de fotos */
  minhasFotos:Fotos[] = [];
  btnButtom = "Excluir"
  
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get<Fotos[]>('http://localhost:3000/fotos').subscribe(results => this.minhasFotos = results );
  }

// Método de excluir com botão

  deletar(id:any){
    this.http.delete('http://localhost:3000/fotos/' + id).subscribe();
    // Definir 2 segundos para atualizar a página
    setTimeout(this.refresh, 1000) 
  }

// Método de refresh

refresh(){
  // Função JS - Atualiza a página
  location.reload();
}



}


