import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  future: Date;
  past: Date;

  ngOnInit() {
    this.future = new Date(2018, 0, 22);
    this.past = new Date(2017, 11, 15)
  }
}
