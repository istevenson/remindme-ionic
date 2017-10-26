import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailsPage } from '../item-details/item-details';
import { Data } from '../../providers/data/data';
import * as _ from 'underscore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
    // load any stored data
    this.dataService.getData().then((todos) => {
      // once data has loaded, set todos to items array
      if (todos) {
        this.items = todos
      }
    })
  }

  ionViewDidLoad() {
  }

  addItem(){
    // add item to to do list
    let addModal = this.modalCtrl.create(AddItemPage);

    addModal.onDidDismiss((item) => {
      if(item) {
        this.saveItem(item);
      }
    });

    addModal.present();
  }

  viewItem(item){
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

  saveItem(item) {
    // add item to array of to dos and add to data service
    this.items.push(item);
    this.dataService.save(this.items);
  }

  removeItem(item) {
    // TODO: refactor this for loop
    for(let i = 0; i < this.items.length; i++) {
      if(this.items[i] == item) {
        this.items.splice(i, 1)
      }
    }

    // update data service with new list
    this.dataService.save(this.items);
  }


}
