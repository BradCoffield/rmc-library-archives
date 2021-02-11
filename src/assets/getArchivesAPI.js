
import { axios } from "boot/axios";
export default async (collectionName) => {
    console.log(`--> getArchivesAPI: ${collectionName}`);
    let res = await axios.get(
          `https://rmc-library-archives.herokuapp.com/collection/${collectionName}/`
        ); 
        return res
   
}
