import { Component, OnInit } from '@angular/core';
import { Info, GroupsEntity } from '../Model/Info';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-products-panel',
  templateUrl: './products-panel.component.html',
  styleUrls: ['./products-panel.component.css']
})
export class ProductsPanelComponent implements OnInit {
  info: Info;
  products: GroupsEntity[];
  productActive: GroupsEntity;
  slide1: any;
  slide2: any;
  slide3: any;
  
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.init();
    this.slide1 = document.getElementById('slide1');
    this.slide2 = document.getElementById('slide2');
    this.slide3 = document.getElementById('slide3');
  }

  init() {
    this.dataService.getInfo()
      .subscribe(
        (info) => {
          console.log(info);
          this.info = info;
          this.products = info.groups;
        }
      );
  }

  handleClick(product) {
    console.log(product);
    this.slide1.src = `${product.images[0].href}`;
    this.slide2.src = `${product.images[1].href}`;
    this.slide3.src = `${product.images[2].href}`;
  }


}
