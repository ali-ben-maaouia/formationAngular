import { Component } from '@angular/core';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {

affiche():void{
  const msg="hello";
  console.log(msg);
}

ngOnInit(){
  this.affiche();
}
}
