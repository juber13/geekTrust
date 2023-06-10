import React, { useState, useEffect } from "react";
import "./home.css";
import Sidebar from "../components/sidebar";
import Products from "../components/productList";
import { BiSearch } from "react-icons/bi";

const filterData = [
  {
    name: "Color",
    category: [
      { staus: false, filterName: "Red" },
      { status: false, filterName: "Blue" },
      { status: false, filterName: "Green" },
    ],
  },
  {
    name: "Gender",
    category: [
      { staus: false, filterName: "Men" },
      { status: false, filterName: "Women" },
    ],
  },
  {
    name: "Price",
    category: [
      { status: false, filterName: "250" },
      { status: false, filterName: "251 - 405" },
      { status: false, filterName: "450" },
    ],
  },
  {
    name: "Type",
    category: [
      { stauts: false, filterName: "Polo" },
      { status: false, filterName: "Hoodie" },
      { status: false, filterName: "Basic" },
    ],
  },
];

const Home = () => {
  const [data, setData] = useState([]);
  const [loding, setLoding] = useState(false);
  const [filterArray, setFilterArray] = useState([]);
  const [inputValue, setValue] = useState('');

  



  const filterUpDation = (target , index) => {
    const value = target.value;
    const checked = target.checked;
    if(checked == true) setFilterArray([...filterArray , value]);
    else setFilterArray(filterArray.filter(name => name !== value));
    // const newData = data;
    const newData = data.filter((item , index) => item.name === value || item.type === value || item.color == value);
    console.log(newData);
    if(newData.length > 0){
      setData(newData);
    }

    setData(data);
};


// useEffect(() => {
//   // filterUpDation();
// },[filterArray])

useEffect(() => {
  const fetchData = async () => {
    try {
      setLoding(true);
      const res = await fetch(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      );
      const result = await res.json();
      if(result) setData(result);
      setLoding(false);
    } catch (err) {
      console.error(err);
    }
  };
  fetchData();
}, []);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="search-bar">
          <input name="" value={inputValue} type="text" placeholder="search for products..." onChange={(e) => setValue(e.target.value)}/>
          <button><BiSearch /></button>
        </div>
        <div className="product-wrapper">
          <Sidebar filterData={filterData} filterUpDation={filterUpDation} />
          <Products data={data.filter((item) => item.color.toLowerCase().includes(inputValue.toLowerCase()))} loding={loding} />
        </div>
      </div>
    </div>
  );
};

export default Home;
