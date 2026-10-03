'use client'

import { useRouter } from 'next/navigation'

function DeleteTodo({id}) {
    const router = useRouter()

    async function handleDelete() {
        const response = await fetch(`http://localhost:3000/api/todos`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({id})
      });

      if (response.ok) {
        
      router.refresh()
      } else {
        alert('Failed to delete item from the server.');
      }
    }
     
  return (
    <button onClick={handleDelete} type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 focus:outline-none focus:text-red-800 disabled:opacity-50 disabled:pointer-events-none dark:text-red-500 dark:hover:text-red-400 dark:focus:text-red-400">Delete</button>
  )
}

export default DeleteTodo