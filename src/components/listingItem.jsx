import React from 'react'




const ListingItem = ({item, onDelete}) => {
    let bgColor;
  switch(item.category){
    case "BreackingNews":
        bgColor="bg-danger bg-gradient"
      break;
    case "LocalNews":
        bgColor="bg-primary bg-gradient"
      break;
    case "SportNews":
      
        bgColor="bg-success bg-gradient"
      break;
    default:
        bgColor="bg-warning "
  }
// console.log(item.img);
// if(!item){
//   return <h5>No items here</h5>
// }


  return (
    <div className={`mb-2  card  shadow-lg text-white ${bgColor}`}>
        <img 
        src={
          // item.img ? 
          // URL.createObjectURL(item.img):
          "https://images.unsplash.com/photo-1585282263861-f55e341878f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" }
        alt="image"
        className='img-fluid  d-inline'
        style={{"objectFit":"cover"}}/>
      <div className="card-body">
        <h3 className="card-title">{item.name}</h3>
        <div className="card-text">{item.description}</div>

      </div>
      <span className='position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light'>
        <button onClick={()=> onDelete(item.id)}  type='botton' className='btn-close' aria-label='Close'></button>
      </span>
    </div>
  )
}

export default ListingItem