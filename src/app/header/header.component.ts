import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  searchstring!:"";
  isOn!:boolean;
  constructor() { }
  ngOnInit(): void {
    this.searchstring="";
  }
  location=[
    {name:"Select Location"},
    {name:"Bengaluru"},
    {name:"Udupi"},
    {name:"Manglore"},
    {name:"Hyderabad"},
    {name:"Chennai"}
  ]
  // locations=[
  //   [{name:"blr",viewname:"Bengaluru"}],
  //   [{name:"chn",viewname:"Chennai"}],
  //   [{name:"udp",viewname:"Udupi"}],
  //   [{name:"mlr",viewname:"Manglore"}],
  // ]

  displaycart(){

  }
  searchbtn(){
    const srch=this.searchstring;
    if(srch==""|| null || undefined){
      this.isOn=true;
    }
    else{
      this.isOn=false;
      console.log("search string is "+srch);
      this.searchstring="";
      
    }
  }
  onOptionsSelected(city: string) {
    console.log(city);
    }
}


