import React from 'react'

const PaginationApp = 
({
    totalPosts, 
    postPerPage, 
    setCurrentPage,
     currentPage
    })  => {

    let pages = [];
    for(let i = 1 ; i<= Math.ceil(totalPosts/postPerPage); i++){
        pages.push(i)
    }
    
  return (
    <div style={{color:'white',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'}}>
        {pages.map((page, index)=>{
            return <button
          
            onClick={()=>setCurrentPage(page)}
            key={index}
            className={page == currentPage ? 'active' : ''}>{page}</button>
            
        })}
    </div>
  )
}

export default PaginationApp