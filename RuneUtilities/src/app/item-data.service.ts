import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ItemDataService implements OnInit {

  baseUrl:string = "http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=";
  itemJSONLocalUrl:string = "./app/assets/itemInfo.json";
  simpleItemArray:ISimpleItem[] = null;
  itemArray:IItem[] = null;

  masterSimpleItemArray:ISimpleItem[];
  masterItemArray:IItem[];
  promiseArray:any[];


  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.loadBHItemInfo();
  }

  async loadBHItemInfo() {
    let response1 = await this.http.get(this.itemJSONLocalUrl);
    let success = await this.extractArrayFromResponseData(response1, this.masterSimpleItemArray);
    let success2 = await this.masterSimpleItemArray.forEach(async (item) => {
      this.promiseArray.concat(await this.http.get(this.baseUrl + item.id));
    });
    let success3 = true;
    await this.promiseArray.forEach(async (item) => {
      this.extractArrayFromResponseData(item, this.masterItemArray);
    });
  }
  private extractArrayFromResponseData(data:Observable<any>, array:Array<any>):Boolean {
    let flag = false;
    data.pipe(
      map((resp: Response) => resp.json().then(
        res => {
          array.concat(res.json);
          flag = true;
        }
      ))
    );
    return flag;
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
