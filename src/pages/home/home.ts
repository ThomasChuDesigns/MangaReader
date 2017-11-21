import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { DataService } from '../../app/data.service';
import { MangaList } from '../../models/manga.model';
import { Observable } from 'rxjs/Observable';
import { Content } from 'ionic-angular/navigation/nav-interfaces';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tabBarElement: any;
  splash = true;

  chapter;
  items: MangaList[] = [];
  showSearchbar: boolean = false;

  start: number = 0;
  end: number = 10;

  @ViewChild('content') content: Content;

  constructor(public loadCtrl: LoadingController, public navCtrl: NavController, public _data: DataService, public modalCtrl: ModalController) {
    // retrieve list of manga from site
    this.tabBarElement = document.querySelector('.tabbar');
    _data.getMangaList("mangareader.net")
    .subscribe(data => {
      // push new manga into list
      this.items = data.slice(this.start, this.end);
      this.start = this.end;
    });
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
    this.content.resize;
  }

  presentManga(name: string) {
    // Show Manga Detail Modal
    const modal = this.modalCtrl.create('ModalMangaPage', {'mangaId': name});
    modal.present();
  }

  getItems(event: any) {
    var value = event.target.value;
    if(value && value.length > 3) {
      // search if search bar length > 3
      this._data.getSearch(value)
      .subscribe(data => {
        this.items = data;
      });
    }else {
      // get manga loaded
      this._data.getMangaList("mangareader.net")
      .subscribe(data => {
        this.items = data.splice(0, this.end);
      });
    }
  }

  doInfinite(event: any) {
    // begin to add 30 more manga
    this.end += 30;
    setTimeout(() => {
      this._data.getMangaList("mangareader.net")
      .subscribe(
        data => {
          // add new manga to items list
          for(; this.start < this.end; this.start++) this.items.push(data[this.start]);
        });
      
      console.log('Async operation has ended');
      event.complete();
    }, 500);
  }

}
