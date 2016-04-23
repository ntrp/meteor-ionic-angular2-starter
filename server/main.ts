import { Notes } from '../collections/notes.ts';

Meteor.startup(() => {

    Notes.remove({});
    Notes.insert({
        title: "Note 1",
        text: "Vestibulum fermentum orci rhoncus ante porttitor dignissim. Aenean consectetur sit amet felis vel lobortis. Mauris nisi ligula, dictum sed nulla."
    });
    Notes.insert({
        title: "Note 2",
        text: "Nam id urna consequat, pharetra nunc eget, hendrerit ligula. Nullam eu bibendum arcu. Suspendisse et ligula eleifend, bibendum lorem ultrices."
    });
});

Meteor.publish('notes', () => Notes.find());
