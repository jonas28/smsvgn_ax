/**
 * Created by jonaswegener on 20.05.15.
 */

Router.configure({
    layoutTemplate: 'layout'
});


Router.route('/', {name: 'home'});

Router.route('/chats/:_id', {
    name: 'chatPage',
    waitOn: function() {
        return [
            Meteor.subscribe('singleChat', this.params._id)
        ];
    },
    data: function() { return Chats.findOne(this.params._id); }
});

Router.route('/chats/:_id/edit', {
    name: 'updateChatForm',
    waitOn: function() {
        return [
            Meteor.subscribe('singleChat', this.params._id)
        ];
    },
    data: function() { return Chats.findOne(this.params._id); }
});

Router.route('/chat/add', {
    name: 'insertChatForm'
});

Router.route('/moderator', {
    name: 'moderator'
});

Router.route('/publisher', {
    name: 'publisher'
});