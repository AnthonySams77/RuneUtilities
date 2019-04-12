import { Component, OnInit } from '@angular/core';
import { ItemDataService } from '../item-data.service';

@Component({
  selector: 'app-bhshop',
  templateUrl: './bhshop.page.html',
  styleUrls: ['./bhshop.page.scss'],
})
export class BHShopPage implements OnInit {
  itemsArray = [];
  constructor(private itemDataService:ItemDataService) { 
    
  }

  ngOnInit() {
    this.itemDataService.getBHItemInfo();
  }

}
