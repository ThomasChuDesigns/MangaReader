import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

    constructor(private _http: Http, private _options: RequestOptions) {
        let _header = new Headers();
        _header.set("X-Mashape-Key", "w1FAbSaqnImshDw62fwPmz0ztCVBp1ul2HZjsnezDLO6Nes41D");
        this._options = new RequestOptions({headers : _header});
    }

    getChapter(name: string, chapterid: string): Observable<Response> {
        return this._http
        .get('https://doodle-manga-scraper.p.mashape.com/mangareader.net/manga/naruto/1', this._options)
        .map(data => data.json());
    }
}