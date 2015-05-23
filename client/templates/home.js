/**
 * Created by jonaswegener on 21.05.15.
 */

Template.home.helpers({
    chats: function() {
        return Chats.find();
    }
});