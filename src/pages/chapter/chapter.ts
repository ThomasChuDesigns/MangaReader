import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { DataService } from '../../app/data.service';
import { ChapterDetail } from '../../models/manga.model';
import { Observable } from 'rxjs/Observable';

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
  @ViewChild(Slides) slides: Slides;
  currentSlide: number = 1;
  chapter: Observable<ChapterDetail>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _data: DataService) {
  }

  ionViewDidLoad() {
    var name = this.navParams.get('mangaId');
    var id = this.navParams.get('id');
    this.chapter = this._data.getChapter(name, id);
  }

  onSlideChanged() {
    this.currentSlide = this.slides._activeIndex + 1;
  }

}
