import { useState } from "react";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [numOfItems, setNumOfItems] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity: numOfItems,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);

    setDescription("");
    setNumOfItems(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={numOfItems}
        onChange={(e) => setNumOfItems(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
