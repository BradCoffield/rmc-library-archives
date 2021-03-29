import { axios } from "boot/axios";
import { firebaseDb } from "../boot/firebase";
export default async collectionName => {
  console.log(`--> getArchivesAPI: ${collectionName}`);
  let ref = firebaseDb.collection(collectionName);
  let theData = [];
  const snapshot = await ref.get();
  snapshot.forEach(doc => {
    // console.log(doc.id);
    // console.log(doc.id, "=>", doc.data());
    theData.push(doc.data());
  });
  return theData;
};
