import React from 'react'
import { useParams } from 'react-router'

export default function User() {
    const {userid} = useParams()
  return (
    <div className='text-white bg-slate-700 text-center text-3xl p-4'>
      UserId:{userid}
    </div>
  )
}
