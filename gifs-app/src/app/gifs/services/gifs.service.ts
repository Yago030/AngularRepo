import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';




@Injectable({providedIn: 'root'})
export class GifsService {

  public gifList: Gif[] = [];
  private  apikey    : string=   'dLWP2VhTgvAZrfPqs31p9HpnMefLqEhh';
  private serviceUrl : string = 'https://api.giphy.com/v1/stickers'
  private  limit     : number = 10;

  private _tagsHistory: string[]=[];


  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    console.log("Gifs service ready")
   }


  private saveLocalStorage ():void{
    localStorage.setItem('history', JSON.stringify( this._tagsHistory));
  }

  private loadLocalStorage ():void{
    if(!localStorage.getItem('history') )return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')! );

    if(this._tagsHistory.length ===  0) return;
    this.searchTag(this._tagsHistory[0]);
  }

  get tagsHistory(){
    return [...this._tagsHistory];
  }


  private organizeHistory (tag:string){
      tag = tag.toLocaleLowerCase();
      if(this._tagsHistory.includes(tag)){
        this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag!== tag )
      }

      this._tagsHistory.unshift(tag);
      this._tagsHistory = this._tagsHistory.splice(0,10);
      this.saveLocalStorage();
  }


 public   searchTag(tag:string): void{
    if(tag.trim().length === 0) return;
      this.organizeHistory(tag);

      const params = new HttpParams()
      .set('api_key', this.apikey)
      .set('limit', 10)
      .set('q', tag)


      this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
      .subscribe(resp =>{

        this.gifList = resp.data;

      })




    }


}
