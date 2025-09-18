import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-myapp',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'myapp2';
}
