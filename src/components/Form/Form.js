import { useState } from "react";

export  const Form =()=>{
    const [search, setSearch] = useState('');
    const handleChange=(event)=>{
      setSearch(event.currentTarget.value) ;
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(event);
    }
    console.log(search);
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