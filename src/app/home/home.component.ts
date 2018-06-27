import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:string;
  datafrom2:string;
  constructor() { }

  ngOnInit() {
  }


  getFromOne(data:string){
    this.data= data;
    console.log('data from one',data);

  }

  getFromtwo(data:string){
    this.data= data;
    console.log('data from two',data);

  }
  getFromthree(data:string){
    this.data= data;
    console.log('data from two',data);

  }
}
