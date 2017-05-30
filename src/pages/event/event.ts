import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-event',
  templateUrl: 'event.html'
})
export class EventPage {
  private eventForm : FormGroup;
  public eventDate
  public eventTitle 
  public eventDescription 
  public eventPlace

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder ) {
	this.eventForm = this.formBuilder.group({
        eventDate: ['', Validators.required],
	eventDescription: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
	eventTitle: ['', Validators.required],
	eventPlace: ['', Validators.required]
    });
  }

  submitEvent(){
	
  }
	

}
