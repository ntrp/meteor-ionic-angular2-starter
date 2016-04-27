import { MeteorComponent } from 'angular2-meteor'
import {Page} from 'ionic-framework';

import {Notes} from '../../collections/notes';
import {lorem} from '../lib/lorem';

@Page({
    templateUrl: 'client/pages/home.html'
})
export class HomePage extends MeteorComponent {
    notes: Mongo.Cursor<Object>;

    constructor() {
        super();

        this.subscribe('notes', () => {
            this.notes = Notes.find();
        }, true);

    }

    add(): void {
        console.log("ok")
        Notes.insert({ "title": "Note " + lorem(1, 1), "text": "Lorem ipsum " + lorem(10, 13)});
    }

    delete(note: any): void {
        Notes.remove(note['_id']);
    }
}
