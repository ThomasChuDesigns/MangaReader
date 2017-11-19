import { Component } from '@angular/core';
import { NavController, ModalController, IonicPage } from 'ionic-angular';
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
  tabBarElement: any;
  splash = true;

  constructor(public navCtrl: NavController, public _data: DataService, public modalCtrl: ModalController) {
    // retrieve list of manga from site
    this.tabBarElement = document.querySelector('.tabbar');
    this.mangaList = _data.getMangaList("mangareader.net")
    .map(data => data.slice(0, 100));
  }

  ionViewDidLoad() {
      this.tabBarElement.style.display = 'none';
      setTimeout(() => {
        this.splash = false;
        this.tabBarElement.style.display = 'flex';
      }, 4000);
    }


  presentManga(name: string) {
    // Show Manga Detail Modal
    const modal = this.modalCtrl.create('ModalMangaPage', {'mangaId': name});
    modal.present();
  }

}
