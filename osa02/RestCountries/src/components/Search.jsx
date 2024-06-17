const Search = ({setSearch }) => { 

    return (
        <>
            <p>find countries <input type="text" onChange={(e) => setSearch(e.target.value)}/></p>
        </>
    );
};

export default Search;