/// <reference path="../../node_modules/reflect-metadata/reflect-metadata.d.ts"/>

import 'reflect-metadata';
import 'zone.js/dist/zone';
import {provide, Type, Provider, IterableDiffers, Component} from 'angular2/core';
import {METEOR_PROVIDERS} from 'angular2-meteor';
import {bootstrap} from 'angular2/platform/browser';

export function MeteorApp(args: any = {}) {
    return function(cls) {
        let annotations = Reflect.getMetadata('annotations', cls) || [];

        args.selector = 'app';

        annotations.push(new Component(args));

        // redefine with added annotations
        Reflect.defineMetadata('annotations', annotations, cls);

        args.providers = args.providers || []

        // define array of bootstrap providers
        let providers = [].concat(args.providers || [], METEOR_PROVIDERS);

        Meteor.startup(function() {
            bootstrap(cls, providers);
        });

        return cls;
    }
}
