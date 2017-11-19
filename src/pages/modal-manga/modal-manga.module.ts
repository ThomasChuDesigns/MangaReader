import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalMangaPage } from './modal-manga';

@NgModule({
  declarations: [
    ModalMangaPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalMangaPage),
  ],
})
export class ModalMangaPageModule {}
