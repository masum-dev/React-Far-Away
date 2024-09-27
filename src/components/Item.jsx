function Item({ item, onDeleteItems, onToogleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => onToogleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

export default Item;
