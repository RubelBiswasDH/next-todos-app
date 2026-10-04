import DeleteTodo from "@/components/DeleteTodo";
import Link from "next/link";
interface Todo {
  id: string;
  name: string;
}

async function TodosPage() {
  const response = await fetch("http://localhost:3000/api/todos", {
    cache: "no-store",
  });
  const data = await response.json();

  return (
    <section>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
        <thead className="bg-gray-50 dark:bg-neutral-800">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-400"
            >
              Action
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
          {data?.todos?.map((t: Todo) => (
            <tr
              key={t?.id}
              className="hover:bg-gray-50 dark:hover:bg-neutral-800/50"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                <Link href={`/todos/${t?.id}`}> {t?.id}</Link>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                {t?.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400 mr-3"
                >
                  View
                </button>
                <DeleteTodo id={t?.id ?? ""} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default TodosPage;
