import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sssss';
   aff(z:number): number {
    return 1;
  }
  ngOnInit():void{
console.log("title:"+this.title);
  }
}
