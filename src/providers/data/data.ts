import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

  constructor(public storage: Storage) {
  }

  getData() {
    return this.storage.get('todos');
  }

  save(list) {
    this.storage.set('todos', list);
  }

}
