import { Component, OnInit ,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  @Output() out = new  EventEmitter<string>();
  @Input() datain: string;
 
  constructor() { 
   

  }

  ngOnInit() {
  }
  inputchange() {
    this.out.emit(this.datain);
  }

}
