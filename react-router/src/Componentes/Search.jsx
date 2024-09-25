import './Search.css'

const Search = () => {
  return (
    <div className='container'>
      <nav className='nav'>
          <div className="nav-wrapper">
            <form>
              <div className="input-field">
                <input id="search" type="search" placeholder="Em que podemos lhe ajudar?" required />
                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
    </div>
  )
}

export default Search
