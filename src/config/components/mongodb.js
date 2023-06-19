let config = {
    //  cfs: process.env.MONGODB_URI_CFS || "mongodb://localhost:27017/center_for_sight",
    //  cfv: process.env.MONGODB_URI_CFV || "mongodb://localhost:27017/center_for_vision",

     cfs: "mongodb://localhost:27017/center_for_sight",
     cfv: "mongodb://localhost:27017/center_for_vision",

    // cfs: `${process.env.MONGODB_URI}/center_for_sight` || "mongodb://localhost:27017/center_for_sight",
    // cfv: `${process.env.MONGODB_URI}/center_for_vision` || "mongodb://localhost:27017/center_for_vision",

    options: {
        useNewUrlParser: true,
        // useMongoClient: true,
        useUnifiedTopology: true
    }
}

module.exports = config;
