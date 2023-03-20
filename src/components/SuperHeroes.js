import axios from "axios"
import { useEffect, useState } from "react"

const SuperHeroes = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/superheroes').then(res =>{
            setData(res.data)
            setIsLoading(false)
        })
    }, [])

    if (isLoading){
        return <h2>Loading...</h2>
    }

  return (
    <>
    <h2>SuperHeroes</h2>
    {
        data.map(hero => {
            return <div>{hero.name}</div>
        })
    }
    </>
  )
}

export default SuperHeroes