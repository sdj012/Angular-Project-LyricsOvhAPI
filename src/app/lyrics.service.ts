import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Lyric } from './lyrics';


@Injectable({
  providedIn: 'root'
})

export class LyricsService {

  constructor(
    private http: HttpClient,

   ) { }

   private lyricsUrl= 'https://api.lyrics.ovh/v1/Justin%Bieber/Peaches'; //URL to web api https://api.lyrics.ovh/v1/artist/title
   

  getLyrics(): Observable<Lyric[]> {
    return this.http.get<Lyric[]>(this.lyricsUrl)
  } 


  }

