import { Component } from '@angular/core';
import { Ball } from './ball';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bouncing Ball';
  ball = new Ball();
}
