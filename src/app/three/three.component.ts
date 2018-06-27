import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  @Output() out3 = new  EventEmitter<string>();
  @Input() datain: string;
  constructor() { }

  ngOnInit() {
  }

  inputchange() {
    this.out3.emit(this.datain);
  }

}
