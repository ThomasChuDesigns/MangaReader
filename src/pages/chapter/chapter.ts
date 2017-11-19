import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataService } from '../../app/data.service';

/**
 * Generated class for the ChapterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chapter',
  templateUrl: 'chapter.html',
})
export class ChapterPage {
  chapter;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _data: DataService) {
  }

  ionViewDidLoad() {
    console.log(this.navParams);
    var name = this.navParams.get('mangaId');
    var id = this.navParams.get('id');
    this.chapter = this._data.getChapter(name, id);
  }

}
