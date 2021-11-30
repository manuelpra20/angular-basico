import { Component  } from "@angular/core";



@Component({
    selector: 'app-contador',
    template: `

        
        <h1>{{ titulo }} </h1>

        <!-- <h3>La base es: <strong> {{ nro }} </strong></h3>  -->
        <!-- evento click en el boton -->
        <!-- <button (click)="acumular(-1)" >-1</button>
        
        <span>{{ nro }}</span>
        
        <button (click) ="acumular(+1)">+1</button> -->
        
        <!-- ------------------------------------------------- -->
        
        
        
        <h3>La base es: <strong> {{ base }} </strong></h3>
        
        <!-- evento click en el boton -->
        <button (click)="acumular( -base)" > - {{ base }} </button>
        
        <span>{{ nro }}</span>
        
        <button (click) ="acumular( base)"> + {{  base }} </button>
     
    
    `
})
export class ContadorComponent {
    
    titulo: string = 'Contador App';
    nro  : number = 10;
    base : number = 5;
  
    acumular( valor:number ){
      this.nro += valor;
    }
    
    // sumar(){
    //   this.nro += 1;
    // }
  
    // restar(){
    //   this.nro -= 1;
    // }
  
}