export const snyggtDatum = (datum) => 
  new Date(datum).toLocaleDateString("sv-SE", {
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

  export const halsning = () => {
    const timme = new Date().getHours();

    if (timme < 10) {
      return "God Morgon";
    }else if (timme < 18) {
      return "Hej";
    } else {
      return "God Kväll";
    }
  };