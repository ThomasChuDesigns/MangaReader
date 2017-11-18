import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataService } from '../../app/data.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  chapter;

  constructor(public navCtrl: NavController, _data: DataService) {
    _data.getChapter("naruto", "1")
    .subscribe(data => {
      this.chapter = data["pages"];
    });
  }

}
