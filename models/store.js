const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = new Schema ({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
})


const storeSchema = new Schema ({

    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    image: String,

    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    }, 

    product: [productSchema],
    
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Store', storeSchema);
