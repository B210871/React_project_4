import styled from "styled-components"
import { useState } from "react";
import { useEffect } from "react";
import {Searchresult} from "./components/Searchresult/Searchresult"
export const BASE_URL="http://localhost:9000"


function App() {


  const array=[
    {
      name:"All",
      type:"all",
    },
    {
      name:"Breakfast",
      type:"breakfast",
    },
    {
      name:"Lunch",
      type:"lunch",
    },
    {
      name:"Dinner",
      type:"dinner",
    },
  ]


const [filtered,setFiltered]= useState(null);
const [button,setButton]= useState('all');

const [data, setData] = useState(null)
const [error,setError]=useState(null)
const [loading,setLoading]=useState(false)
  const FetchFoodData =async ()=>{
    setLoading(true)
    try {
      const response = await fetch(BASE_URL);
    const json =  await response.json();
    setData(json);
    setFiltered(json);
    // console.log(json);
    setLoading(false);
    } catch (error) {
      setError("Unable to fetch")
  
    }
  }
  
  useEffect(() => {
  FetchFoodData();
 
}, [])

const searchData=(e)=>{
  e.preventDefault();
  const search=e.target.value;
  console.log(search);

if(search===""){
  setFiltered(null);
}

const filterData= data?.filter((d)=>
d.name.toLowerCase().includes(search.toLowerCase()))


 
setFiltered(filterData);

}

if(data !== null) 
{
  
  console.log(data);
  
}


const searchbtn=(value)=>{
  if(value==="all")
  {
    setFiltered(data);
    setButton(value);
    return;
  }
  const filterData= data?.filter((d)=>
d.type.toLowerCase().includes(value.toLowerCase()))


 
setFiltered(filterData);
setButton(value);


}
if(error) return <div>{error}</div>
if(loading) return <div>loading.....</div>

  return (
    <>
    <Container>
      <TopContainer>

<div className="logo">
  <img src="/logo.svg" alt="logo" />
</div>
<div className="search">
  <input type="search" onChange={searchData} placeholder="Search Here" />
</div>
      </TopContainer>
    <FilterContainer>

      {
        array.map((a)=>{
          return <Button  key={a.name} onClick={()=>searchbtn(a.type)}>{a.name}</Button>
        })
      }
    </FilterContainer>
    </Container>
   <Searchresult data={filtered}/></>
  );
}

export default App;


export const Container = styled.div`
max-width:1200px;
margin:0 auto;`
const TopContainer = styled.section`
display:flex;
justify-content:space-between;
height:140px;
padding:16px;
align-items:center;

.search {
  input{
    background-color:transparent;
    border:1px solid red;
    color:white;
    font-size:16px;
    height:40px;
    padding:0 10px;
    border-radius:5px;
    &::placeholder{
      color:white;
    }
  }
 
}
@media(0<width<600px){
  flex-direction:column;
  height:120px;
}
`
const FilterContainer = styled.section`
display:flex;
justify-content:center;
gap:12px;
padding-bottom:40px;
`
 export const Button = styled.button`
background-color:#ff4343;
border-radius:5px;
padding:6px 12px;
border:none;
color:white;
cursor:pointer;
&:hover{
background-color:#f22f2
}
`



