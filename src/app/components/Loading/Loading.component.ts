import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './Loading.component.html',
  styleUrls: ['./Loading.component.css']
})
export class LoadingComponent implements OnInit {

  @Input() show = false;

  constructor() { }

  
  ngOnInit() {
  }

}
