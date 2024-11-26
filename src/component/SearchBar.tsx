import { useState } from "react"

type props = {onSearch:(city:string)=> void}
const SearchBar:React.FC<props> = ({onSearch}) => {
    const[city,setCity] = useState(" ")
    const handleSearch =()=>{
        if(city.trim()) onSearch(city);
        setCity(" ");
    }
  return (
    <div>
      <input type="text" placeholder="Enter city..."
      value={city} 
      onChange={(e)=>setCity(e.target.value)}

      />

      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar
