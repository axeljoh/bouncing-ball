import { Component, OnInit } from '@angular/core';
import { Ball } from '../ball';
import { BallInstance } from '../ball-instance';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

	ball: Ball;

  constructor() {
  	this.ball = BallInstance;
  }

  ngOnInit() {
  	this.ball.draw();
  	setTimeout(() => this.ball.start(), 1000);
  }

}
