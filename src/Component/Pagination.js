// import React, { useState, useEffect } from 'react';


// const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, setCurrentPage }) => {
//     const pageNumbers = [];


//     for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//         pageNumbers.push(i);
//         // console.log(pageNumbers)
//     }

    





//     return (
//         <>
//             <nav aria-label="Page navigation example">
//                 <ul className="pagination">
//                     <button className="btn btn-primary mr-4" onClick={() => {
//                         pageNumbers.includes(currentPage - 1) &&
//                             setCurrentPage(currentPage - 1);
//                         paginate(currentPage - 1);
//                     }}>Pervious</button>

//                     {pageNumbers.map(number => (
//                         <li key={number} className='page-item'>
//                             <a onClick={() => paginate(number)} className='page-link' >
//                                 {number}
//                             </a>
//                         </li>
//                     ))}
                
//                     <button className="btn btn-primary" onClick={() => {
//                         pageNumbers.includes(currentPage + 1) &&
//                             setCurrentPage(currentPage + 1);
//                         paginate(currentPage + 1);
//                     }}>Next</button>

//                 </ul>
//             </nav>

//             {/* <nav>
//                 <ul className='pagination'>
//                     {pageNumbers.map(number => (
//                         <li key={number} className='page-item'>
//                             <a onClick={() => paginate(number)} className='page-link' >
//                                 {number}
//                             </a>
//                         </li>
//                     ))}
//                 </ul>
//             </nav> */}
//         </>
//     );
// };

// export default Pagination