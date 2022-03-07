import React, { useState } from "react";

// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import "./Shop.css";
import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";

import TextField from "@mui/material/TextField";
//creo un initial state (padre)
const initialState = {
  name: "",
  phone: "",
  email: "",
};

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 25,
  },
};

//purchases sera nuestra base de ids

const Shop = () => {
  const [values, setValues] = useState(initialState);
  // Este estado está destinado a guardar el id de la compra
  const [purchaseID, setPurchaseID] = useState("");

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const docRef = await addDoc(collection(db, "purchases"), {
      values,
    });
    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  //utilizo values del set inicial con la propiedad name ,email etc y la guardo
  return (
    <div style={styles.containerShop}>
      <h1>Carrito</h1>
      <form className="FormContainer" onSubmit={onSubmit}>
        <TextField
          placeholder="Name"
          style={{ margin: 10, width: 400 }}
          value={values.name}
          name="name"
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Phone"
          style={{ margin: 10, width: 400 }}
          value={values.phone}
          name="phone"
          onChange={handleOnChange}
        />
        <TextField
          placeholder="Email"
          style={{ margin: 10, width: 400 }}
          value={values.email}
          name="email"
          onChange={handleOnChange}
        />
        <button className="btnASendAction">Enviar</button>
      </form>
      {purchaseID && <MessageSuccess purchaseID={purchaseID} />}
    </div>
  );
};

export default Shop;
