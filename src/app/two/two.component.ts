import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  @Output() out2 = new  EventEmitter<string>();
  @Input() fromone: string;
 
  constructor() { }

  ngOnInit() {
  }
  inputchange() {
    this.out2.emit(this.fromone);
    console.log('emit vaule ');
  }

}
