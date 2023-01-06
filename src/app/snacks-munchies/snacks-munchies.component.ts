import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-snacks-munchies',
  templateUrl: './snacks-munchies.component.html',
  styleUrls: ['./snacks-munchies.component.css']
})
export class SnacksMunchiesComponent implements OnInit {

  constructor(private el: ElementRef) { }
  
  ngOnInit(): void {
  }

  public smproducts=[
    [{
      prodname:"Bingo Orange Chilli Potato Chips",
      image:"../assets/images/Snacks-munchies-images/Bingo.avif"
      ,price:20
    }],
    [{
      prodname:"Haldiram's Nagpur Aloo Bhujia",
      image:"../assets/images/Snacks-munchies-images/AlooBujia.avif",
      price:20
    }],
    [{
      prodname:"Doritos Cheese Nachos",
      image:"../assets/images/Snacks-munchies-images/Doritos.avif",
      price:20
    }],
    [{
      prodname:"Act II Golden Sizzle Popcorn (Pressure Cooker)",
      image:"../assets/images/Snacks-munchies-images/Popcorn.avif",
      price:20
    }],
    [{
      prodname:"Open Secret Assorted Gift Box",
      image:"../assets/images/Snacks-munchies-images/AssortedGiftBox.avif",
      price:20
    }],
    [{
      prodname:"Lay's Wafer Style - Sundried Chilli Potato Chips",
      image:"../assets/images/Snacks-munchies-images/LaysWafers.avif",
      price:20
    }],
    [{
      prodname:"Bingo",
      image:"../assets/images/Snacks-munchies-images/Bingo.avif",
      price:20
    }],
    [{
      prodname:"Bingo",
      image:"../assets/images/Snacks-munchies-images/Bingo.avif",
      price:20
    }],
    [{
      prodname:"Bingo",
      image:"../assets/images/Snacks-munchies-images/Bingo.avif",
      price:20
    }],
    [{
      prodname:"Bingo",
      image:"../assets/images/Snacks-munchies-images/Bingo.avif",
      price:20}],
    [{
      prodname:"Bingo",
      image:"../assets/images/Snacks-munchies-images/Bingo.avif",
      price:20
    }],
  ]
  public rightvalue=0;
  public val=0;
  // public max_right_val=;

  swiperLeftbtn(cardcontainerelement: any, leftbtn:any,rightbtn:any){
    if(this.val>(this.smproducts.length-7)*154){
      // leftbtn.style.cursor="not-allowed";
      // leftbtn.style.opacity=0.2;
      
    }
    else{
    // rightbtn.style.opacity=1;
    this.val+=154;
    cardcontainerelement.style.right=this.val+"px";
    // console.log(this.val);
    }
    // this.rightvalue+=100+"px";
  }

  swiperRightbtn(cardcontainerelement: any,rightbtn:any,leftbtn:any){
    
    if(this.val==0){
      // leftbtn.style.opacity=1;
    }
    else{
    // rightbtn.style.opacity=0.2;
    
    this.val-=154;
    cardcontainerelement.style.right=this.val+"px";
    console.log(this.val);
    }
   // this.rightvalue+=100+"px";
  }
  
}