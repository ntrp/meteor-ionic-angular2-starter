import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component, Type} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {MeteorComponent} from 'angular2-meteor';

import {MeteorIonicApp} from './lib/meteor-ionic-app';
import {Notes} from '../collections/notes';

import {HomePage} from './pages/home';

@MeteorIonicApp({
    templateUrl: 'client/app.html'
})
class App extends MeteorComponent {
    notes: Mongo.Cursor<Object>;
    rootPage: Type;

    constructor() {
        super();

        this.subscribe('notes', () => {
            this.notes = Notes.find();
        }, true);

        this.rootPage = HomePage;
    }
}
