import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {


  // Criando o nosso tradutor

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };


  nameButton = "Enviar";
  dados = {
      titulo: "",
      url: ""
  };
  


  //  Injeção de dependencia - é quando nossa aplicação depende de uma ferramenta para realizar alguma tarefa
  // Para fazer a injeção de dependencia precisamos do construtor
  // Boa prática - usar o construtor somente para injeção de dependencia


  constructor(
    private leo_Voyage:HttpClient, 
    private router: Router
    ){}

    /*Método de cadastro */
    cadastro(form:any){
      // console.log(form.value);
      // alert("URL: \n"+ form.value.url + "\n  Título: " + form.value.titulo);
      
      // this.dados = form.value 
      

      // Utilizando a ferramenta httpclient para cadastro 

      this.leo_Voyage.post('http://localhost:3000/fotos/', form.value, this.httpOptions).subscribe();
    
      
    
    }
}
