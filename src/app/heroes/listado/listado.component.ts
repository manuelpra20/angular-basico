import { Component} from '@angular/core';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

 

  heroes: string[] =
   [ 
    'Spiderman',
    'Ironman',
    'thor', 
    'Hulk',
    'Capitan America' 
   ]

   heroeBorrado: string = '';

   borrarHeroe(){
     console.log('Borrando');
    let heroeBorrado = this.heroes.shift() ||'';
    this.heroeBorrado = heroeBorrado;
    console.log(heroeBorrado);
    
  
   
   }
  
}
