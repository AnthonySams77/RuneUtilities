import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { resolve } from 'path';

@Injectable({
  providedIn: 'root'
})
export class ItemDataService implements OnInit {

  baseUrl:string = "http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=";
  itemJSONLocalUrl:string = "./app/assets/itemInfo.json";
  simpleItemArray:ISimpleItem[] = null;
  itemArray:IItem[] = null;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getItemIdArray();
  }

  async getBHItemInfo() {
    this.simpleItemArray.forEach(async item => {
      await this.getItemInfo(item.id);
    });
  }

  private async getItemInfo(id:string) {
    return this.http.get(this.baseUrl + id).pipe(
      map((resp: Response) => resp.json().then(
        res => {
          this.itemArray.concat(res.json);
          resolve();
        }
      ))
    )
  }

  getItemIdArray(){
    return this.http.get(this.itemJSONLocalUrl).pipe(
      map((resp: Response) => resp.json().then(
        res => {
          this.simpleItemArray = res.json;
          resolve();
        }
      )));
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
