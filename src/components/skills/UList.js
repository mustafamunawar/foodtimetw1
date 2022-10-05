function UList({ itemsArray }) {
  return (
    <ul className="list-disc">
      {itemsArray.map((item, i) => {
        return (
          <li key={i} className="ml-4">
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default UList;
