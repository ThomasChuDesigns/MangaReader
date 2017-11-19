import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DataService } from '../../app/data.service';
import { MangaList } from '../../models/manga.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  chapter;
  mangaList: Observable<MangaList[]>;

  constructor(public navCtrl: NavController, public _data: DataService, public modalCtrl: ModalController) {
    // retrieve list of manga from site
    this.mangaList = _data.getMangaList("mangareader.net")
    .map(data => data.slice(0, 100));
  }

  presentManga(mangaId: string) {
    console.log("clicked");
    const modal = this.modalCtrl.create('ModalMangaPage', {mangaId});
    modal.present();
  }

}