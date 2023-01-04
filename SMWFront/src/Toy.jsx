// import { Form } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Toy() {
  const {toyId} = useParams()
  const url = `http://localhost:4000/toys/${toyId}`
  const [toy, setToy] = useState([]);
  
  const fetchToy = async () => {
    try {
        const response = await fetch(url)
        const json = await response.json()
        setToy(json)
    } catch (error) {
        console.log(error)
    }
  }
  
  useEffect(() => {
    fetchToy()
  },[])

  return (
    <>
        <div>
            <h1>
                {toy.name}
            </h1>
            <div>
                <p>{toy.description}</p>
                <p>{toy.price} €</p>
                <p>{toy.category}</p>
                
            </div>
        </div>
    </>
   
  );
}