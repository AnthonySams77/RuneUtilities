import { Component, OnInit } from '@angular/core';
import { ItemDataService, IItem } from '../item-data.service';

@Component({
  selector: 'app-bhshop',
  templateUrl: './bhshop.page.html',
  styleUrls: ['./bhshop.page.scss'],
})
export class BHShopPage implements OnInit {
  itemsArray:Array<IItem> = [];
  constructor(private itemDataService:ItemDataService) {
  }
  //parseFloat("59.7k".split("k")[0]) * 1000
  ngOnInit() {
  }

}
