import { Component } from '@angular/core';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent {
question:string="q1";
reponse:string="typescript";
msg='bonsoir'
islarge=false;
isdark=true

getcolor(){
  if(this.isdark){
    return 'red';
  }else return "blue";
}

tache=false
tab =[{nom:"azer",prenom:"nouri",age:10},{nom:"ali",prenom:"mouldi",age:25},{nom:"amir",prenom:"nouri",age:26}]
}
