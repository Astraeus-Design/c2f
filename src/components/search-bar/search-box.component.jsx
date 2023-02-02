/*import { Component } from "react";*/
import "./search-box.styles.css";

function SearchBox(props){

  const { className,placeholder,onChangeHandler }=props;
  
    return (
      <div>
        {" "}
        <input
          className={`search-box ${className}`}
          type="search"
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
      </div>
    );
 }

export default SearchBox;
