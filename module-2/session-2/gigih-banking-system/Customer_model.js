let customers = [
  {
    customerId: "12345",
    name: "John Doe",
    email: "johdoe@mail.com",
    balance: 5000.0,
  },
  {
    customerId: "22222",
    name: "John Doe",
    email: "johdoe@mail.com",
    balance: 50000.0,
  },
];

export function getAllCustomers() {
  return customers;
}

export function getCustomer(customerId) {
  return customers.find((c) => c.customerId === customerId);
}

export function createCustomer(name, email, initialBalance) {
  let newCustomer = {
    customerId: generateCustomerId(),
    name: name,
    email: email,
    initialBalance: initialBalance,
  };
  return newCustomer;
}

export function generateCustomerId() {
  return Math.random().toString(10).substring(2, 9);
}
