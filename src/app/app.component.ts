import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pritish'; // gloable vari / member vari

  constructor(){
    // this.add();
  }

  // ngOnInit(){
  //   this.title="school";
  // }

  add= ()=>{
    // let title="harshada"; // local vari
    this.title = "Harshada";
  }
}
