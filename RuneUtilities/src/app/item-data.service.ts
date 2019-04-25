import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, single } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ItemDataService implements OnInit {

  baseUrl:string = "https://cors-anywhere.herokuapp.com/http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=";
  itemJSONLocalUrl:string = "../assets/itemInfo.json";
  simpleItemArray:ISimpleItem[] = [];
  itemArray:IItem[] = [];
  promiseArray:Promise<IItem>[] = [];


  constructor(private http:HttpClient) {
    this.loadBHItemInfo();
  }

  ngOnInit() {
  }

  async loadBHItemInfo() {
    await this.http.get<ISimpleItem[]>(this.itemJSONLocalUrl).toPromise()
      .then((res:IItem[]) => {
        res.forEach((item:IItem) => {
          this.simpleItemArray.push(item);
          });
        });

    this.simpleItemArray.forEach((item) => {
      this.promiseArray.push(this.getGEInfo(item.id));
    });
    Promise.all(this.promiseArray).then((item) => {
      item.forEach((singleItem) => {
        console.log(singleItem);
        this.itemArray.push(singleItem);
      })
    });
  }

  async getGEInfo(id:string): Promise<IItem>{
    return this.http.get<IItem>(this.baseUrl + id).toPromise<IItem>();
  }
}

export interface ISimpleItem {
  name:string;
  id:string;
}

export interface IItem {
  icon:string;
  icon_large:string;
  id:string;
  type:string;
  typeIcon:string;
  name:string;
  description:string;
  current:ITrend;
  today:ITrend;
  members:boolean;
  day30:ITrend;
  day90:ITrend;
  day180:ITrend;
}

export interface ITrend {
  trend:string;
  price:number;
}

export class Item implements IItem {
  icon:string;
  icon_large:string;
  id:string;
  type:string;
  typeIcon:string;
  name:string;
  description:string;
  current:ITrend;
  today:ITrend;
  members:boolean;
  day30:ITrend;
  day90:ITrend;
  day180:ITrend;
}

export class Trend implements ITrend {
  trend:string;
  price:number;
}

export enum ItemId {
  DragonScimitar = 4587,
  DragonLongsword = 1305,
  DragonDagger = 1215,
  DragonBattleAxe = 1377,
  DragonMace = 1434,
  DragonHalberd = 3204,
  HelmOfNeitiznot = 10828,
  BerserkerHelm = 3751
}
