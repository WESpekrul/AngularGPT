import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',  
  standalone: true, 
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meu-primeiro - projeto-angular';
}
