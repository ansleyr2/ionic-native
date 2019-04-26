import { Component } from '@angular/core';

import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';
import { Toast } from '@ionic-native/toast/ngx';

import { Brightness } from '@ionic-native/brightness/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [Contacts, Toast, Brightness]
})
export class Tab2Page {
  autoTicks = true;
  disabled = false;
  invert = false;
  max = 1;
  min = 0;
  showTicks = true;
  step = 0.1;
  thumbLabel = false;
  value = 0;
  vertical = false;

  //contact: Contact;
  createConact = {fname: '', lname: '', number: ''};

  constructor(private contacts: Contacts,
    private toast: Toast,
    private brightness: Brightness) {
   // this.contacts.create();
  }

  createContact() {
    console.log(this.createConact);
    let contact: Contact = this.contacts.create();

    contact.name = new ContactName(null, this.createConact.lname, this.createConact.fname);
    contact.phoneNumbers = [new ContactField('mobile', this.createConact.number.toString())];
    contact.save().then(
      () => console.log('Contact saved!', contact),
      (error: any) => console.error('Error saving contact.', error)
    );
  }

  setBrightness(brightnessValue:any = 0.8){
    //let brightnessValue = 0.8;
    this.brightness.setBrightness(brightnessValue);
  }

  sliderChanged(event:any){
    console.log(event.value);
    this.setBrightness(event.value);
  }



}
