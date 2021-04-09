import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ContentsService {

  // contentsBody: string[] = [];
  contentsBody: Object[]=[]; // Temporarily Change Type 

  translated: Object[]=[];

  add(contents: {}) {
    this.contentsBody.push(contents)
  }

  clear() {
    this.contentsBody = [];
  }

  // constructor() { }
}