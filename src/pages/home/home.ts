import { Component } from '@angular/core';
import { NavController, ModalController, reorderArray } from 'ionic-angular';
import { AboutPage } from "../about/about";
import { AddItemPage } from '../add-item/add-item';
import { EditItemPage } from '../edit-item/edit-item';
import { ItemDetailsPage } from '../item-details/item-details';
import { Data } from '../../providers/data/data';
import * as _ from 'underscore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public items = [];
  public id: number;

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
    let addModal = this.modalCtrl.create(AddItemPage, {
      id: this.makeId()
    });

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

  updateItem(item) {
    //update item in array of todos and update data services
    this.items[item.id - 1] = item;

    this.dataService.save(this.items);
  }

  removeItem(item) {
    // TODO add error if remove fails
    // find item id, remove it
    this.items.splice(item.id - 1, 1);

    // update data service with new list
    this.dataService.save(this.items);
  }

  editItem(item){
    let updateModal = this.modalCtrl.create(EditItemPage, {
      item: item
    });

    updateModal.onDidDismiss((item) => {
      if(item) {
        this.updateItem(item)
      }
    });

    updateModal.present();
  }

  makeId(): number {
    // generate new, unique id for an item
    if (this.items === undefined) {
      return 1;
    } else {
      return this.items.length + 1;
    }
  }

  toggleCompleted(item) {
    this.items[item.id - 1].completed = !this.items[item.id - 1].completed;

    this.updateItem(item);
  }

  launchAbout(){
    this.navCtrl.push(AboutPage)
  }

  reorderItems(indices){
    this.items = reorderArray(this.items, indices);
  }

}
