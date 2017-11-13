import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {

  title: string;
  description: string;
  id: any;
  completed: boolean;

  constructor(public navCtrl: NavController, public view: ViewController,
              public params: NavParams) {
    this.title = params.data.item.title;
    this.description = params.data.item.description;
    this.id = params.data.item.id;
    this.completed = params.data.item.completed;

  }

  updateItem() {
    let updatedItem = {
      title: this.title,
      description: this.description,
      id: this.id,
      completed: this.completed
    };
    this.view.dismiss(updatedItem);
  }

  close() {
    this.view.dismiss();
  }

}
