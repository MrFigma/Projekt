export const snyggtDatum = (datum) => 
  new Date(datum).toLocalDataString("sv-SE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  export const kortText = (text, max) => {
    if (text.length < max) {
      return text
    }
    return `${text.slice(0, max)}... `;
  };