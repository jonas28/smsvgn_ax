/**
 * Created by jonaswegener on 20.05.15.
 */

Meteor.publish('singleChat', function(id) {
    check(id, String);
    return Chats.find(id);
});

Meteor.publish('chats', function(options) {
    return Chats.find({}, options);
});