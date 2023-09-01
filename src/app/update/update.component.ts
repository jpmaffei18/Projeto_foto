import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FotolistComponent } from '../fotolist/fotolist.component';
import { Fotos } from '../model/foto.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  // Guarda o id
  routerId = null;


  // Recebe a foto da API

  imagem:any = {}; 

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(
    private activ: ActivatedRoute, 
    private http: HttpClient,
    private router: Router
    ){}
  
  ngOnInit(): void {  
    this.routerId = this.activ.snapshot.params['id'];  

    if(this.routerId){
      this.http.get('http://localhost:3000/fotos/' + this.routerId).subscribe(results => this.imagem = results);

    }
  }

  // Método de edição chamado pelo ngSubimit
  editar(form:any){
    this.http.put('http://localhost:3000/fotos/' + this.routerId, form.value, this.httpOptions).subscribe();

    this.router.navigate(['/']);
  }

  
}
