import React, { useState, useEffect } from 'react'
import axios from 'axios'

function IndexPageContainer() {
  const [launches, setLaunches] = useState([])
  useEffect(async () => {
    const result = await axios('https://api.spacexdata.com/v3/launches')
    setLaunches(result.data)
  }, []);

  return (
    <div>This page will contain a list of all the launches!</div>
  )
}

export default IndexPageContainer
