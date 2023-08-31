const {Schema, model } = require('mongoose');

const WonderSchema = new Schema({
    name: String,
    description: String,
    location: String,
    images: {
        type: String,
        default: [
            "https://cdn.mos.cms.futurecdn.net/BiNbcY5fXy9Lra47jqHKGK.jpg",
            "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1638892506/EducationHub/photos/the-great-wall-of-china.jpg",
            "https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg",
            "https://destinationlesstravel.com/wp-content/uploads/2022/10/Christ-the-Redeemer-statue-Rio-de-Janeiro-Brazil.jpg",
            "https://bordalo.observador.pt/v2/q:84/rs:fill:2000:1124/c:2000:1124:nowe:0:104/plain/https://s3.observador.pt/wp-content/uploads/2023/01/21171340/26216953.jpg",
            "https://www.chichenitza.com/public/assets/img/chichen-itza-tour.jpg",
            "https://theconstructor.org/wp-content/uploads/2020/12/0-6.jpg"
        ]
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "WorderCities"
        }
    ]
});

module.exports = model("Review", WonderSchema);