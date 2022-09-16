import { useState } from "react";
import { findWord } from "../../services/api";
export  const Form =()=>{
    const [search, setSearch] = useState('');

    const handleChange=(event)=>{
      setSearch(event.currentTarget.value) ;
    }
    
    const handleSubmit=(event)=>{
        event.preventDefault();
        findWord(search);
    }
  
    return(
        <>
    <form onSubmit={handleSubmit}>
        <input type='search' placeholder='Search' autoFocus={true} onChange={handleChange} value={search}/>
        <button>Search</button>
    </form>
    
        </>
    )
}
export default Form;