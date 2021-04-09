import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ContentService {

  contentsBody: string[] = [];

  add(contents: string) {
    this.contentsBody.push(contents);
  }

  clear() {
    this.contentsBody = [];
  }

  // constructor() { }
}