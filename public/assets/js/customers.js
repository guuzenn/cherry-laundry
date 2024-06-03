async function getCustomersData() {
  const customers = await fetch('http://localhost:3000/customers').then(
    (response) => response.json()
  )
  return { customers }
}
