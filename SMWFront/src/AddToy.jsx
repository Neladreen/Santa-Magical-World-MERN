import axios from "axios"
import React, { useState } from "react"

export default function AddToy({}) {
    const [name, setName] = useState("")
    const [description , setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")

//    function handleCreate (data) {
//         const requestOptions = {
//             method: 'POST',
//             mode : 'cors',
//             body: JSON.stringify(data)
//         };
//         fetch('https://localhost:4000/add/toy', requestOptions)
//             .then(response => response.json())
//             .then(data => setPostId(data.id))

//             .catch(error => {
//                 this.setState({ errorMessage: error.toString() });
//                 console.error('There was an error!', error);
//             });

    function handleSubmit() {
        const data = {name,description,category,price}

        axios.post('http://localhost:4000/add/toy',data)
            .then(res => console.log(res))
    }
    
    return(
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()}}>
                <input type="text" id="name" value={name} onChange={(e) => {setName(e.target.value)}}/>
                <input type="text" id="description" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                <select value={category} onChange={(e) => {setCategory(e.target.value)}}><option>cat</option></select>
                <input type="number" name="price" value={price} onChange={(e) => {setPrice(e.target.value)}}/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}