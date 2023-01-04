import React from "react";
import { useEffect,useState } from "react";

import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';

export default function Toys() {

    const url = "http://localhost:4000/toys"
    const [toys, setToys] = useState([]);
    
    const fetchToys = async () => {
      try {
          const response = await fetch(url)
          const json = await response.json()
          setToys(json)
      } catch (error) {
          console.log(error)
      }
    }
  
    useEffect(() => {
      fetchToys()
    },[])


    return(
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">Price (€)</TableCell>
                    <TableCell align="right">Category</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {toys.map((toy) => (
                    <TableRow
                    key={toy.id}
                    >
                    <TableCell component="th">
                        <Button href={`/toys/${toy.id}`}>{toy.name}</Button>
                    </TableCell>
                    <TableCell align="right">{toy.description}</TableCell>
                    <TableCell align="right">{toy.price}</TableCell>
                    <TableCell align="right">{toy.category}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}