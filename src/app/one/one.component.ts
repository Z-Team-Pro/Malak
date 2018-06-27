import { Component, OnInit ,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  @Output() out = new  EventEmitter<string>();
  @Input() fromtwo: string;
  data:string;
  constructor() { 
    this.data=this.fromtwo;

  }

  ngOnInit() {
  }
  inputchange() {
    this.out.emit(this.fromtwo);
    console.log('emit vaule ');
  }

}
