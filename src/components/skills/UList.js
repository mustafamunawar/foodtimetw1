function UList({ itemsArray }) {
  return (
    <ul class="list-disc">
      {itemsArray.map((item, i) => {
        return (
          <li key={i} class="ml-4">
            {item}
          </li>
        );
      })}
    </ul>
  );
}

export default UList;
