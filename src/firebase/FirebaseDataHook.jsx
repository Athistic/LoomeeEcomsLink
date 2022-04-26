import { createContext, useContext, useEffect } from "react/cjs/react.development";
import { useState } from "react";
import { FIREBASE_REALTIME_DB } from "./FirebaseConfig";
import { ref, set, push, onValue } from "firebase/database";

const PathString = "PRODUCTS/";
const DataContext = createContext({}); //Creator has the value
export const useData = () => useContext(DataContext); //Provider

export default function FirebaseDataHookProvider({ children, ...props }) {
  const [Products, setProducts] = useState(null); //null if empty and(){}

  useEffect(() => {
    const Ref = ref(FIREBASE_REALTIME_DB, PathString);
    //Open read stream to firebase realtime db and then get update everytime there is a change to any of the children listed within it
    onValue(Ref, (snapShot) => {
      const data = snapShot.val();
      console.log("DATA", data);
      if (data !== null) {
        setProducts(data);
      }
    });
  }, []);

  //Resposnible for creating a product
  //A product has the following values:name,desc,price,stockLevel,images[]

  // inventory.main.subcat.products[]
  //inventory.female.dresses.products[]
  //inventory.pc.fps.products[]
  //inventory.dairy.milk.products[]

  //   main:{subcat} * const inverntory={
  //       main:{
  //        subcat:{
  // products:[]
  //        }
  //       }
  //     }/

  //const mainCate=["male","female","kids"]use this array when creating products

  function CreateProduct(newProduct) {
    // let test = { name: "Test", desc: "test", price: 0.0, stockLevel: 1, images: [""], mainCat: "Female", subCat: "Dresses" };

    let path = `${PathString}${newProduct.mainCat}/${newProduct.subCat}/products`;
    let REF = ref(FIREBASE_REALTIME_DB, `${path}`);
    //Get a key for a new product
    const key = push(REF).key;
    const finalRef = ref(FIREBASE_REALTIME_DB, `${path}/${key}`);

    return set(finalRef, newProduct);
  }

  function UpdateProduct(ProductId, newProduct, oldProduct) {}
  function DeleteProduct(ProductId) {}

  const value = {
    CreateProduct, //Create
    Products, //Read
    UpdateProduct, //Update
    DeleteProduct //Delete
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
