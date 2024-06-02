async function getCustomersData() {
  const customers = await fetch(
    'https://api.cherrylaundry.h14.my.id/customers'
  ).then((response) => response.json())
  return { customers }
}
