import { MongoClient,ServerApiVersion } from "mongodb";
const options={
    serverApi:ServerApiVersion.v1,
    connectTimeoutMS:30000,// time out for initial connection
    socketTimeoutMS:45000 // time out  for opreation
};

const client=new MongoClient(process.env.mongoDB, options);

export const mongoConnection=async()=>{
    try {
        await client.connect();
        console.log("connected to mongodb");
    } catch (error) {
        console.log('error in connecting to mongodb')
    }
}

const db=async(collection_name)=>{
try {
    let db=client.db(process.env.Database);
    return db.collection(collection_name);
} catch (error) {
  console.log("Connection failed",error);
}
}
export default db;