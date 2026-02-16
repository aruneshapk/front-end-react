import SearchBar from "./SearchBar";

function NavBar({ onSearch }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          Bucket List
        </a>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}

export default NavBar;
