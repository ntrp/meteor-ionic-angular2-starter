import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {MeteorComponent} from 'angular2-meteor';

import {MeteorApp} from './lib/meteor-app';
import {Notes} from '../collections/notes';

@MeteorApp({
  selector: 'app',
  templateUrl: 'client/app.html'
})
class App extends MeteorComponent {
    notes: Mongo.Cursor<Object>;

    constructor() {
        super();

        this.subscribe('notes', () => {
            this.notes = Notes.find();
        }, true);
    }
}

bootstrap(App);
