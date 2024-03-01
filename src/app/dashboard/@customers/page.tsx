import { getCustomers } from "@/lib/data";

export default async function Page() {
  const customers = await getCustomers();

  return (
    <div className="bg-blue-200 p-4 rounded-xl">
      <h1>Customers</h1>
      {customers.map((customer) => (
        <p key={customer.amt}>{customer.uv}</p>
      ))}
    </div>
  );
}
