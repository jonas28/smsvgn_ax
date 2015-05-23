Chats = new Mongo.Collection('chats');

Chats.attachSchema(new SimpleSchema({
    city: {
        type: String,
        label: "City",
        max: 200
    },
    author: {
        type: String,
        label: "Author"
    },
    texts: {
        type: Array,
        optional: true
    },
    'texts.$': {
        type: Object
    },
    'texts.$.author': {
        type: String,
        allowedValues: ["me", "friend"]
    },
    'texts.$.text': {
        type: String
    },
    'texts.$.time': {
        type: String
    },
    'texts.$.status': {
        type: String,
        allowedValues: ["read", "unread"]
    }
}));