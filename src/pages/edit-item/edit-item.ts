import { Component } from '@angular/core';
import {  NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {

  title: string;
  description: string;

  constructor(public navCtrl: NavController, public view: ViewController) {
  }

  updateItem(item) {
    this.view.dismiss(item);
  }

  close() {
    this.view.dismiss();
  }

}
