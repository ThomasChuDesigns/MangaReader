import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DataService } from '../../app/data.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  chapter;
  mangaList;

  constructor(public navCtrl: NavController, public _data: DataService, public modalCtrl: ModalController) {
    _data.getMangaList("mangareader.net")
    .subscribe(data => {
      this.mangaList = data.slice(0, 100);
    });

    _data.getChapter("naruto", "1")
    .subscribe(data => {
      this.chapter = data["pages"];
    });
  }

  presentManga(mangaid: string) {
    console.log("clicked");
  }

}