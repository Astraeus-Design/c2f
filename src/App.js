import "./App.css";
/*import { Component } from "react";*/
import {useState,useEffect} from 'react';
import axios from "axios";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-bar/search-box.component";

// original class component converted to a functional based react component 

function App(){


  /* set up two independent useStates for the input search and monster array */

  const [ monsters, updateMonsters] = useState([]);
  const [ searchField, updateSearchField] = useState('');
  const [ initArray,setInitStatus]= useState(true);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let filterMonsters=[];    
  const url="https://jsonplaceholder.typicode.com/users";  // monsters url
  


  // Get the data from the API once the app is rendered
  // use a useFetch which acts post render for unpredictable operations
  // such as network request,file ops etc. Had to change to axios based 
  // url data acquisition due to issues with fetch but the issues
  // may also be applicable to current method, namely rerendering causing
  // multiple empty api calls due to too small a time for receipt of data



  // experiment with axios after issues with fetch, useFetch triggered on
  // re-render 
 
  useEffect(() => {
    //if (url === null) return;
    (async function () {
      try {
        setLoading(true);
        const res = await axios.get(url);
        console.log(res.data);
        updateMonsters(res.data);
        
      } catch (error) {
        console.log("Error from fetch", error);
        //setError(error);  // not required for this test code
      } finally {
        //setLoading(false); // not reuired for this test code
        console.log('completed async call');

      }
    })();
  }, []);   // in theory should render once due to empty args array


console.log(monsters);

//useEffect(()=>{

// if first creation create monster array
//useEffect(()=>{
 // if (initArray){
/*    console.log("3 componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) =>{if (users.length>0) updateMonsters(users)});
    console.log('exiting fetch routine');
    setInitStatus(false);*/
  //  }  
 // },[] )


// onSearchChange is the event listener( well callback) for search box  
  
const onSearchChange=(e)=>{

const searchFieldValue = e.target.value.toLocaleLowerCase();

console.log('in the search event',searchFieldValue);

// remap monsters array now moved back to main return block

//  filterMonsters = monsters.filter((monster) => {
//  return monster.name.toLocaleLowerCase().includes(searchFieldValue);
// });

 console.log(filterMonsters);

// update searchField trigger re-render

updateSearchField(searchFieldValue);
};



  
  
  

    if (monsters===[]){

      // if currently empty data array due to non acquisition over network
      // return an empty div

      return(<div></div>);

    }
    else{


      // complete a re-map of monsters array using current searchField value

        filterMonsters = monsters.filter((monster) => {
          return monster.name.toLocaleLowerCase().includes(searchField);
          });
          
        // return filtered monsters based on current typed letters in search box 

        return (
 
         <div className="App">
           <h1 className="app-title">Monsters Index</h1>
           <SearchBox
             onChangeHandler={onSearchChange}
             placeHolder="Search Monsters"
             className="monsters-search-box"
           />
          <CardList monsters={filterMonsters} />
        </div>
       )
    }    // end of return of filtered monsters
}

export default App;
