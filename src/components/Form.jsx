import React, {useState} from 'react'
import {newsCreated} from '../Redux/Actions'
import {useDispatch, useSelector} from 'react-redux'
import {v4 as uuidv4} from "uuid"
import {useHttp} from '../hook/useHttp'


const Form = () => {
  const {request} = useHttp()
const [name, setName] = useState("")
const [description, setDescription] = useState("")
const [category, setCategory]= useState("");
const [img, setImg] = useState("")
const {filters, filterLoadingStatus} = useSelector(state => state)
const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    const newinfo = {id:uuidv4, name, description, category}
    request("http://localhost:3001/news", "POST", JSON.stringify(newinfo) )
      .then(res => console.log("Success"))
      // .then(dispatch(newsCreated(newinfo)))
      .catch(err => console.log(err))
    dispatch(newsCreated(newinfo))
    setName("")
    setDescription("")
    setCategory("")
    setImg("")
  }
// const renderFilters = (filters, status) => {
//   if(status){
//     return <option>Loading options</option>
//   }
//   else if (!status){
//     return <option>Error options</option>
//   }

//   if(filters && filters.length > 0){
//     return filters.map(({name, label})=> {
//       if(name === "all") return ;
//       <option key={name} value ={label}>{label}</option>
//       return 
//     })
//   }
// }
  return (
    <form  className='border p-4 shadow-lg rounded' onSubmit={handleSubmit} >
        <div className="mb-2">
          <label htmlFor="name" className='form-label fs-4 text-light'> Name of news</label>
          <input
          onChange={(e)=> setName(e.target.value)} 
          type="text" 
          required 
          name="name"
          value={name} 
          className='form-control' 
          placeholder='Write the name for your news' />
        </div>
        <div className="mb-2">
          <label htmlFor="describtion" className='form-label fs-4 text-light'> Describtion of news</label>
          <textarea
          value={description}
          onChange={(e)=> setDescription(e.target.value)} 
          type="text" 
          required 
          name="describtion" 
          className='text-aria form-control' 
          placeholder='Describe the event...' />
        </div>
        <div className="mb-2">
          <label htmlFor="category" className='form-label fs-4 text-light'> Category of news</label>
            <select 
            required 
            name="select" 
            className='from-select w-100 p-2 border' 
            onChange={(e)=>setCategory(e.target.value)}
            >
              <option >select...</option>
              <option  value="SportNews">Sport news</option>
              <option  value="BreackingNews">Breaking news</option>
              <option  value="LocalNews">Local news</option>
              <option  value="WorldNews">World news</option>
            </select>
        </div>
        {/* <div className="mb-3">
          <label htmlFor="picture" className='form-label fs-4 text-light'> Picture of news</label>
          <input 
          onChange={(e)=> setImg(e.target.files[0])} 
          type="file"  name="describtion" className=' form-control' placeholder='Describe the event...' />
        </div> */}
        <button type="submit" className='btn btn-primary mt-3 w-100'>Add news</button>
    </form>
  )
}

export default Form