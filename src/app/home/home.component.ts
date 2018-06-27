import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datafrom1:string;
  datafrom2:string;
  constructor() { }

  ngOnInit() {
  }


  getFromOne(data:string){
    this.datafrom1= data;
    console.log('data from one',data);

  }

  getFromtwo(data:string){
    this.datafrom2= data;
    console.log('data from two',data);

  }
}
