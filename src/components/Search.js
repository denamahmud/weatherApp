 
function Search({ query, setQuery, search}) {

 
  return (
    <div className='bg-white2 w-9/12 mx-auto p-3 h-12 rounded-full flex justify-center items-center box-shadow'>
          <input placeholder='Search.. ' className='w-full rounded-lg outline-none text-black placeholder:text-[#979797] bg-transparent' onChange={e =>setQuery(e.target.value)}
            value={query}  onKeyPress={search}/> 
          
          
    </div>
  )
}

export default Search