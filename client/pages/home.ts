import { MeteorComponent } from 'angular2-meteor'
import {Notes} from '../../collections/notes';

import {Page} from 'ionic-framework';

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
}
