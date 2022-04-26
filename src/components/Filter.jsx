import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {useHttp} from '../hook/useHttp'
import Spinner from './Spinner'
import { filtersFetching, filtersFetched, activeFilterChanged} from '../Redux/Actions'
import classNames from "classnames"


const Filter = () => {
  const {filters, filterLoadingStatus, activeFilter} = useSelector(state => state)
  const dispatch = useDispatch()
  const {request} = useHttp();

  useEffect(() => {
    dispatch(filtersFetching())
    request("http://localhost:3001/filters")
      .then( data => dispatch(filtersFetched(data)))
      .catch(err => console.log(err))
  }, [])

  if(filterLoadingStatus){
    return <Spinner/>
  }

  const renderFilter = (arr) => {
    if(arr.length === 0){
      return <h5 className='text-center mt-5'> Oops, Filters does not found</h5>
    }
    return arr.map(({name, className, label}) => {
      const btnClasses = classNames("btn", className,{"active": name === activeFilter})
    return (<button 
    key={name} 
    id ={name}
    onClick = {() => dispatch(activeFilterChanged(name))} 
    className={btnClasses}>{label}
    </button>
    )
    })
    
  }
  const elements = renderFilter(filters)
  return (
    <div className='btn-group mb-3 ms-2'>
      {elements}
      {/* <button   className=' btn btn-success'>All</button>
      <button  className=' btn btn-dark'>Breaking</button>
      <button  className=' btn btn-primary'>Local</button>
      <button  className='btn btn-danger'>Sport</button> */}
    </div>
  )
}

export default Filter