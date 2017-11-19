import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, NavController } from 'ionic-angular';
import { DataService } from '../../app/data.service';
import { MangaList, MangaDetail } from '../../models/manga.model';
import { Observable } from 'rxjs/Observable';
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
  name;
  manga;

  constructor(private navCtrl: NavController, private viewCtrl: ViewController, private navParams: NavParams, private _data: DataService) {
  }

  ionViewDidLoad() {
    // set observable and name
    this.name = this.navParams.get('mangaId');
    this.manga = this._data.getManga(this.name).map(data => [data]);
  }

  onCloseModal() {
    // close modal
    this.viewCtrl.dismiss();
  }

  readChapter(id: string) {
    // open chapter page
    this.navCtrl.push('ChapterPage', {'mangaId':this.name, 'id':id});
  }

}
