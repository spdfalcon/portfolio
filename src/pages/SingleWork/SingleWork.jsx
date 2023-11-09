import React from 'react'
import { useParams } from 'react-router-dom'

export default function SingleWork() {
  const params = useParams()
  console.log(params.workID);
  return (
    <div>
      asdas
    </div>
  )
}
