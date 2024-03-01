import { getCustomers } from "@/lib/data";

export default async function Page() {
  const books = await getCustomers();

  return (
    <div className="bg-yellow-200 p-4 rounded-xl">
      <h1>Books</h1>
      {books.map((book) => (
        <p key={book.uv}>{book.uv}</p>
      ))}
    </div>
  );
}
