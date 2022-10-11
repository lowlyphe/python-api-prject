import React, { useRef } from 'react'
import axios from 'axios'

export default function Maps() {

    let searchRef = useRef()
    let search = searchRef.current.value

    const handleSearch = () => {
        axios.post('https://localhost:5000/api/leaflet', {location: search})
    }

  return (
    <div>
        <input type='text' placeholder='location' ref={searchRef}/>
        <button onClick={() => handleSearch()}>Search</button>
    </div>
  )
}
