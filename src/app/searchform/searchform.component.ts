import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})

export class SearchformComponent implements OnInit {

  searchForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.searchForm=this.formBuilder.group({
      name:"",
      song:","
    })

  }

  onSubmit(){

    this.submitted=true;

    //display form values

    alert('SUCCESS!! ' + JSON.stringify(this.searchForm.value))

  }

  onReset(){

    this.submitted = false;
    this.searchForm.reset();

  }



}
