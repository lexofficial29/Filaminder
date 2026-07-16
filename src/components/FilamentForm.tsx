import { useState } from "react";

export default function FilamentForm() {
    const [brand, setBrand] = useState("");
    const [material, setMaterial] = useState("PLA");
    const [color, setColor] = useState("#3b82f6");
    const [price, setPrice] = useState("");
    const [weight, setWeight] = useState("1000");

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (!brand || !price || !weight) return;


        // Reset the form fields
        setBrand("");
        setPrice("");
        setWeight("1000");
    };
    return (
        <form onSubmit={handleSubmit} style={{ padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h2>Add New Spool</h2>
        
        <div style={{ marginBottom: "0.5rem" }}>
            <label>Brand: </label>
            <input 
            type="text" 
            placeholder="e.g., Polymaker, Sunlu" 
            value={brand} 
            onChange={(e) => setBrand(e.target.value)} 
            required 
            />
        </div>

        <div style={{ marginBottom: "0.5rem" }}>
            <label>Material: </label>
            <select value={material} onChange={(e) => setMaterial(e.target.value)}>
            <option value="PLA">PLA</option>
            <option value="PLA+">PLA+</option>
            <option value="PETG">PETG</option>
            <option value="TPU">TPU</option>
            <option value="ABS">ABS</option>
            </select>
        </div>

        <div style={{ marginBottom: "0.5rem" }}>
            <label>Color: </label>
            <input 
            type="color" 
            value={color} 
            onChange={(e) => setColor(e.target.value)} 
            />
        </div>

        <div style={{ marginBottom: "0.5rem" }}>
            <label>Price ($/€): </label>
            <input 
            type="number" 
            step="0.01" 
            placeholder="20.00" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            required 
            />
        </div>

        <div style={{ marginBottom: "1rem" }}>
            <label>Spool Weight (g): </label>
            <input 
            type="number" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} 
            required 
            />
        </div>

        <button type="submit" style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>
            + Add to Inventory
        </button>
        </form>
    );

}