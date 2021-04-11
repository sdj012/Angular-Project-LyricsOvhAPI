import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ContentsService } from './contents.service';
import{ catchError,map,tap} from 'rxjs/operators';

import { Lyric } from './lyrics';



@Injectable({
  providedIn: 'root'
})

export class LyricsService {

  // private lyricsUrl='https://api.lyrics.ovh/v1/Justin%Bieber/Peaches'; //URL to web api https://api.lyrics.ovh/v1/artist/title
  private lyricsUrl=''; // Needs Dynamic Editing URL to web api https://api.lyrics.ovh/v1/artist/title
  private localLyrics=[];
  public translatedLyrics=[];

  // private lyrics=[];

  constructor(
    private http: HttpClient,
    private contentsService: ContentsService,
    
   ) { }


  private log(contents: {}) {

  // this.contentsService.add(`Lyricservice: ${contents}`); // rmv contents 

    this.contentsService.add(`${contents}`); // 

    //this.contentsTranslationService.add('${}');

  }


  private HandleError<T>(operation = 'operation', result?:T){

    return(error:any): Observable<T> => {
      
      //TODO:send error to remote logging infra
      
      console.error(error);//log to console 
      
      // TODO: better job of transforming error for user consumption
      
      this.log('${operation} failed: ${error.message}')
      
      return of(result as T);
    }
  }
  
  // getLyrics(): Observable<Lyric[]> {
  //   // return this.http.get<Lyric[]>(this.lyricsUrl)

  //   return this.http.get(this.lyricsUrl)
  //   .pipe(
  //     tap(_ => this.log('fetched lyrics')),
  //     catchError(this.HandleError<Lyric[]>('getLyrics',[]))
  //   )
  // }

  setLocalLyrics(lyrics:[]){

    this.localLyrics.push(lyrics);

  }

  getLyrics(Artist:string,Song:string) {
    // return this.http.get<Lyric[]>(this.lyricsUrl)

    // this.lyricsUrl='https://private-anon-2329dfde36-lyricsovh.apiary-proxy.com/v1/',JSON.stringify({Artist}),'/',JSON.stringify({Song});
    console.log(Artist);
    console.log(Song);
    this.lyricsUrl='https://api.lyrics.ovh/v1/'+Artist+'/'+Song;
    const headers = {  "Content-Type": "application/json" };


    return this.http.get(this.lyricsUrl,{ headers })
    .pipe(map(data => {
      data;
      console.log("DATA: ", data);
      console.log("Data:", data["lyrics"] )
      this.log(data["lyrics"]);
      this.setLocalLyrics(data["lyrics"]);
      this.translateLyrics();

      return data;
    }));

    // .pipe(
    //   tap(_ => this.log('fetched lyrics'))
    //   // catchError(this.HandleError<Lyric[]>('getLyrics',[]))
    // )

  } 

  translateLyrics(){

  const headers = {  "Content-Type": "application/json" };
  const body = JSON.stringify({ q: this.localLyrics[0], source:"en", target:"fr"});

  this.http.post<any>('https://libretranslate.com/translate', body, { headers })
      .subscribe(data => {
        this.translatedLyrics.push(data["translatedText"]);
        console.log("translated text: ", data["translatedText"])
        console.log("this.translatedLyrics:", this.translatedLyrics[0])
      });


}

  }

