import React, { useEffect, useRef } from 'react'
import axios from 'axios'

export default function Maps() {

    let searchRef = useRef()

    // useEffect(async () => {
    //   async function fetchData() {
    //     const data = await fetch('/api/test')
    //     console.log(data)
    //   }
    //   fetchData()
    // })

    const handleSearch = () => {
      let search = searchRef.current.value
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({location: search})
      }
      fetch('http://localhost:5000/api/leaflet', requestOptions)
      .then(res => res.json())
      .then(res => console.log(res))
    }

  return (
    <div>
        <input type='text' placeholder='location' ref={searchRef}/>
        <button onClick={() => handleSearch()}>Search</button>
    </div>
  )
}
