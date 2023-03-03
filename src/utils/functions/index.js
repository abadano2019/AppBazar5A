export const formatLocaleDate = (time) => {
  const date = new Date(time);
  const localDate = date.toLocaleDateString("es-UY");
  return localDate
};

export const sumTotal = (items) =>
  items?.map((item) => item.price * item.quantity)?.reduce((a, b) => a + b, 0);

export const formatDate = (time) =>{
  const d = new Date(time),
        month = '' + d.getMonth(),
        day = '' + d.getDate(),
        year = d.getFullYear();

    return [day, month, year].join('/');
}