import { Component, OnInit } from '@angular/core';
import { ContentsService } from '../contents.service';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  constructor(public contentsService: ContentsService) { }

  ngOnInit() {}

}
