/**
 * Created by jonaswegener on 20.05.15.
 */

if (Chats.find().count() === 0) {
    Chats.insert({
        city: 'Berlin',
        author: 'Jonas'
    });
}