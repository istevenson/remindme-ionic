import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  title: string;
  description: string;
  id: string;

  constructor(public navCtrl: NavController, public view: ViewController,
              public params: NavParams) {
    this.id = params.data.id;
  }

  saveItem() {
    let newItem = {
      title: this.title,
      description: this.description,
      id: this.id
    };

    this.view.dismiss(newItem);
  }

  close() {
    this.view.dismiss();
  }

}
