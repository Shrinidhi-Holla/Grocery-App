import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-product-catalogue',
  templateUrl: './product-catalogue.component.html',
  styleUrls: ['./product-catalogue.component.css']
})
export class ProductCatalogueComponent implements OnInit {

  cat_selected!:"";
  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
    
  catalogue=[
      [{prodname:"Paan Corner",image:"../assets/images/Product-catalogue-images/paan-corner_web.avif"}],
      [{prodname:"Dairy Breads & Eggs",image:"../assets/images/Product-catalogue-images/Slice-2_10.avif"}],
      [{prodname:"Greens",image:"../assets/images/Product-catalogue-images/Slice-3_9.avif"}],
      [{prodname:"Cold Drinks & Juices",image:"../assets/images/Product-catalogue-images/Slice-4_9.avif"}],
      [{prodname:"Snacks and Munchies",image:"../assets/images/Product-catalogue-images/Slice-5_4.avif"}],
      [{prodname:"Breakfast & Instant Food",image:"../assets/images/Product-catalogue-images/Slice-6_5.avif"}],
      [{prodname:"Sweet Tooth",image:"../assets/images/Product-catalogue-images/Slice-7_3.avif"}],
      [{prodname:"Bakery & Biscuits",image:"../assets/images/Product-catalogue-images/Slice-8_4.avif"}],
      [{prodname:"Tea, Coffee & Health Drinks",image:"../assets/images/Product-catalogue-images/Slice-9_3.avif"}],
      [{prodname:"Atta Rice & Daal",image:"../assets/images/Product-catalogue-images/Slice-10.avif"}],
      [{prodname:"Masala, Oil and More",image:"../assets/images/Product-catalogue-images/Slice-11.avif"}],
      [{prodname:"Sauces and Spreads",image:"../assets/images/Product-catalogue-images/Slice-12.avif"}],
      [{prodname:"Chicken, Meat and Fish",image:"../assets/images/Product-catalogue-images/Slice-13.avif"}],
      [{prodname:"Baby Care",image:"../assets/images/Product-catalogue-images/Slice-15.avif"}],
      [{prodname:"Pharma and wellness",image:"../assets/images/Product-catalogue-images/Slice-16.avif"}],
      [{prodname:"Cleaning essentials",image:"../assets/images/Product-catalogue-images/Slice-17.avif"}],
      [{prodname:"Home & Office",image:"../assets/images/Product-catalogue-images/Slice-18.avif"}],
      [{prodname:"Personal Care",image:"../assets/images/Product-catalogue-images/Slice-19.avif"}],
      [{prodname:"Pet Care",image:"../assets/images/Product-catalogue-images/Slice-20.avif"}],
    ]


    product_category_select(index: any){
      console.log(index);
      if(index=="Paan Corner"){
        this.router.navigate(['side']);
    }
    }
    
}
