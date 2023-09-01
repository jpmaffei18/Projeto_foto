import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent {
  /* Inbond Property - Recebe dados de outro componente */
  @Input() imagem = "";
  
}
