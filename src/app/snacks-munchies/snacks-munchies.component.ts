import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-snacks-munchies',
  templateUrl: './snacks-munchies.component.html',
  styleUrls: ['./snacks-munchies.component.css']
})
export class SnacksMunchiesComponent implements OnInit {

  constructor(private el: ElementRef) { }
  
  // @ViewChild("element") el: ElementRef;

  // @ViewChild("child1") firstChild: ElementRef;
  
  ngOnInit(): void {
  }

  public smproducts=[
    [{prodname:"Bingo Orange Chilli Potato Chips",image:"../assets/images/Snacks-munchies-images/Bingo.avif",price:20}],
    [{prodname:"Bingo",image:"../assets/images/Snacks-munchies-images/Bingo.avif",price:20}],
    [{prodname:"Bingo",image:"../assets/images/Snacks-munchies-images/Bingo.avif",price:20}],
    [{prodname:"Bingo",image:"../assets/images/Snacks-munchies-images/Bingo.avif",price:20}],
    [{prodname:"Bingo",image:"../assets/images/Snacks-munchies-images/Bingo.avif",price:20}],
    [{prodname:"Bingo",image:"../assets/images/Snacks-munchies-images/Bingo.avif",price:20}],
    [{prodname:"Bingo",image:"../assets/images/Snacks-munchies-images/Bingo.avif",price:20}],
    [{prodname:"Bingo",image:"../assets/images/Snacks-munchies-images/Bingo.avif",price:20}],
    [{prodname:"Bingo",image:"../assets/images/Snacks-munchies-images/Bingo.avif",price:20}],
    [{prodname:"Bingo",image:"../assets/images/Snacks-munchies-images/Bingo.avif",price:20}],
    [{prodname:"Bingo",image:"../assets/images/Snacks-munchies-images/Bingo.avif",price:20}],
    [{prodname:"Bingo",image:"../assets/images/Snacks-munchies-images/Bingo.avif",price:20}],
    [{prodname:"Bingo",image:"../assets/images/Snacks-munchies-images/Bingo.avif",price:20}],
    [{prodname:"Bingo",image:"../assets/images/Snacks-munchies-images/Bingo.avif",price:20}],
    [{prodname:"Bingo",image:"../assets/images/Snacks-munchies-images/Bingo.avif",price:20}],

  ]
  public rightvalue=0;
  public val=0;
  // public max_right_val=;

  swiperLeftbtn(cardcontainerelement: any, leftbtn:any){
    if(this.val>(this.smproducts.length-8)*154){
      // leftbtn.style.cursor="not-allowed";
      leftbtn.style.opacity=0.2;
    }
    else{
    
    this.val+=154;
    cardcontainerelement.style.right=this.val+"px";
    console.log(this.val);
    }
    // this.rightvalue+=100+"px";
  }

  swiperRightbtn(cardcontainerelement: any,rightbtn:any,leftbtn:any){
    
    if(this.val==0){
      
    }
    else{
      leftbtn.style.opacity=1;
    this.val-=154;
    cardcontainerelement.style.right=this.val+"px";
    console.log(this.val);
    }
   // this.rightvalue+=100+"px";
  }
  
}