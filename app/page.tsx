"use client";
import { useState, useEffect, FormEvent } from "react";
import { generateClient, head } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Button, TextField } from "@aws-amplify/ui-react";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  const [houses, setHouses] = useState<Array<Schema["House"]["type"]>>([]);

  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  function listHouses() {
    client.models.House.observeQuery().subscribe({
      next: (data) => setHouses([...data.items]),
    });
  }

  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }

  function deleteHouse(id: string) {
    client.models.House.delete({ id })
  }

  useEffect(() => {
    listTodos();
    listHouses();
  }, []);

  const createHouse = (e:  FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const address = formData.get("address") as string;
    const url = formData.get("url") as string;
    const zip = formData.get("zip") as string;

    client.models.House.create({
      address: address,
      tour: url,
      zip: zip
      })
    }

  return (
    <main>
      <h1>Add Virtual Tour</h1>
      <form onSubmit={(e) => createHouse(e)}>
        <TextField label="direccion" id="address" name="address"/>
        <TextField label="url tour" id="url" name="url"/>
        <TextField label="CP" id="zip" name="zip"/>
        <Button type="submit">Create</Button>
      </form>
      <ul>
        {houses.map((house) => (
          <li
          onClick={() => deleteHouse(house.id)}
          className="text-black" key={house.id}>
            Address: {house.address} ZIP: {house.zip} Tour: {house.tour}
          </li>
        ))}
      </ul>
    </main>
  );
}