const mongodb= require('mongodb');
const mongoClient= mongodb.MongoClient;


let _db;
// J4xTVBTWCbziSUh1
const mongoconnect=callback=>{
    mongoClient.connect('mongodb+srv://sovanchakma1926:J4xTVBTWCbziSUh1@cluster0.bfjkfvy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(client=>{
        console.log("successfull connected to mongodb");
        _db= client.db();
        callback();
    }).catch(err=>{
        console.log(err);
        throw err;
    });   
};

const getDb=()=>{
    if(_db){
        return _db;
    }
    throw 'no database found';
}

exports.mongoconnect=mongoconnect;

exports.getDb=getDb;


