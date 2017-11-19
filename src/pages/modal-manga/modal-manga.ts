import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { DataService } from '../../app/data.service';
import { MangaList } from '../../models/manga.model';

/**
 * Generated class for the ModalMangaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-manga',
  templateUrl: 'modal-manga.html',
})
export class ModalMangaPage {
  manga;
  constructor(private viewCtrl: ViewController, private navParams: NavParams, private _data: DataService) {
  }

  ionViewDidLoad() {
    let name = this.navParams.get('name');
    this.manga = this._data.getManga(name).map(data => console.log(data));
  }

  onCloseModal() {
    this.viewCtrl.dismiss();
  }

}
