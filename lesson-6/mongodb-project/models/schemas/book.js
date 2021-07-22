const {Schema} = require("mongoose");

const bookSchema = Schema({
    name: {
        type: String,
        required: [true, "У книги должно быть название"]
    },
    price: {
        type: Number,
        required: [true, "У книги должна быть цена"],
        min: [0, "Цена не может быть меньше 0"]
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "author"
    },
    // Author.findById(id)
    // author: {
    //     type: String,
    //     required: [true, "У книги должен быть автор"],
    //     // minlength: 2
    // },
    genres: [
        {
            type: String,
            required: true,
            enum: ["Любовный роман", "Фантастика", "Юмористическое фентези"]
        }
    ],
    isActive: {
        type: Boolean,
        default: true
    }
}, {versionKey: false, timestamps: true});

module.exports = bookSchema;