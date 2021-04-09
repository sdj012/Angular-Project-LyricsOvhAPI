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
  private lyricsUrl='https://private-anon-2329dfde36-lyricsovh.apiary-proxy.com/v1/Justin%25Bieber/Peaches'; //URL to web api https://api.lyrics.ovh/v1/artist/title

  private lyrics=[];

  constructor(
    private http: HttpClient,
    private contentsService: ContentsService,
    
   ) { }


  private log(contents: string) {

  this.contentsService.add(`Lyricservice: ${contents}`); // rmv contents 

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

  getLyrics() {
    // return this.http.get<Lyric[]>(this.lyricsUrl)

    return this.http.get(this.lyricsUrl)
    .pipe(map(data => {
      data;
      console.log("I CAN SEE DATA HERE: ", data);
      return data;
    }));

    // .pipe(
    //   tap(_ => this.log('fetched lyrics'))
    //   // catchError(this.HandleError<Lyric[]>('getLyrics',[]))
    // )

  } 

  }

