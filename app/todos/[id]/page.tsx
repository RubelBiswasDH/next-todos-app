'use client'

import { useParams } from 'next/navigation'
import React from 'react'

function Todo() {
    const params = useParams()
  return (
    <div>Todo Id: {params?.id ?? "" }</div>
  )
}

export default Todo