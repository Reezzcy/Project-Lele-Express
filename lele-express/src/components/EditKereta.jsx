import React, { useState, useEffect } from "react";

function EditKereta(){
    const[kereta, setKereta] = useState("");

    useEffect(() => {
        fetch("http://localhost:3000/admin/kereta")
        .then((response) => response.json())
        .then((data) => setKereta(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
}