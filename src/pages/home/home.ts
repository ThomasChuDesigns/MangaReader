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
  tabBarElement: any;
  splash = true;
  showSearchbar: boolean = false;

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

  toggleSearch() {
    this.showSearchbar = !this.showSearchbar;
  }

  presentManga(name: string) {
    // Show Manga Detail Modal
    const modal = this.modalCtrl.create('ModalMangaPage', {'mangaId': name});
    modal.present();
  }

  getItems(event: any) {
    var value = event.target.value;
    if(value && value.length > 3) {
      this.mangaList = this._data.getSearch(value);
      console.log(this.mangaList);
    }
  }

}
