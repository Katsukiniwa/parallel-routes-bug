import { getCustomers } from "@/lib/data";

export default async function Page() {
  const sales = await getCustomers();

  return (
    <div className="bg-red-200 p-4 rounded-xl">
      <h1>Sales</h1>
      {sales.map((sale) => (
        <p key={sale.amt}>{sale.uv}</p>
      ))}
    </div>
  );
}
