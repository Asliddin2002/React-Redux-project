import React, {useCallback, useEffect} from 'react'
import ListingItem from './listingItem'
import { useSelector, useDispatch } from 'react-redux'
import Spinner from './Spinner'
// import {filtered} from '../Redux/Reducer'
import {useHttp} from '../hook/useHttp'
import { newsFetched, newsFetching, newsFetchingErro,newsDeleted } from '../Redux/Actions'

const Listings = () => {
  const {filteredNews, filterLoadingStatus} = useSelector(state => state)
  const dispatch = useDispatch()
  const {request} = useHttp()
  useEffect(() => {
    dispatch(newsFetching())
    request("http://localhost:3001/news")
      .then(data => dispatch(newsFetched(data)) )
      .catch(() => dispatch(newsFetchingErro()))
  },[])

    
  const onDelete = useCallback((id) => {
    request(`http://localhost:3001/news/${id}`,"DELETE")
      .then(data => console.log(data))
      .then(dispatch(newsDeleted(id)))
      .catch(err => console.log(err))
  }, [])

  if(filterLoadingStatus){
    return <Spinner/>
  }
  if(!filteredNews && filteredNews.length === 0){
    <h5>No items here yet</h5>
  }
  return ( 
    <div className='listing '>
        { filteredNews.map((item) => (
            <ListingItem onDelete={onDelete} key={item.id} item={item} />
        ))}
    </div>
  )
}

export default Listings