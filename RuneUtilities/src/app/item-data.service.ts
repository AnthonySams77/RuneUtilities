import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemDataService {

  baseUrl:string = "http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=";


  constructor(private http:HttpClient) { }

  getItemInfo(id:string) {
    return this.http.get(this.baseUrl + id);
  }
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
