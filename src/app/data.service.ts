import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { MangaList, MangaDetail } from '../models/manga.model';

@Injectable()
export class DataService {

    constructor(private _http: Http, private _options: RequestOptions) {
        let _header = new Headers();
        _header.set("X-Mashape-Key", "w1FAbSaqnImshDw62fwPmz0ztCVBp1ul2HZjsnezDLO6Nes41D");
        this._options = new RequestOptions({headers : _header});
    }

    getChapter(name: string, chapterid: string): Observable<Response> {
        return this._http
        .get(`https://doodle-manga-scraper.p.mashape.com/mangareader.net/manga/${name}/${chapterid}`, this._options)
        .map(data => data.json());
    }

    getMangaList(siteid: string): Observable<MangaList[]> {
        return this._http
        .get(`https://doodle-manga-scraper.p.mashape.com/${siteid}?cover=1&info=1`, this._options)
        .map(data => data.json());
    }

    getManga(mangaId: string): Observable<MangaDetail> {
        return this._http
        .get(`https://doodle-manga-scraper.p.mashape.com/mangareader.net/manga/${mangaId}/`, this._options)
        .map(data => data.json());
    }



}