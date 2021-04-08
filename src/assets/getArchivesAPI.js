import { axios } from "boot/axios";
import { firebaseDb } from "../boot/firebase";
export default async collectionName => {
  console.log(`--> getArchivesAPI: ${collectionName}`);
  let ref = firebaseDb.collection(collectionName);
  let theData = [];
  let snapshot;
  if (collectionName == "photos") {
    
    let photosCache = require('./photosCache.json')
    console.log("Using local photos cache!");
    return photosCache
     
  } else {
    snapshot = await ref.get({ source: "server" });
      snapshot.forEach(doc => {
        // console.log(doc.id);
        // console.log(doc.id, "=>", doc.data());
        let temp = doc.data();
        temp.id = doc.id;
        // console.log( temp);
        theData.push(temp);
      });
      return theData;
  }
 
 

};
