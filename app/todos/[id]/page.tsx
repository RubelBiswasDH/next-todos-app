

import React from 'react'

export function generateStaticParams() {
  return [
    { id: 'one' },
    { id: 'two' },
  ];
}

async function Todo({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

     const { id } = await params; 
  
  return (
    <div>Todo Id: {id ?? "" }</div>
  )
}

export default Todo