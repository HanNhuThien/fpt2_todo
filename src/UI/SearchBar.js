import cz from "./SearchBar.module.css";

const SearchBar = (props) => {
  return (
    <input className={cz.searchBar} onChange={props.onChange}>
      {props.children}
    </input>
  );
};

export default SearchBar;
