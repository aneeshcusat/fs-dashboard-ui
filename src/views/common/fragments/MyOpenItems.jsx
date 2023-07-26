import React, { useState, useEffect } from 'react';

const MyOpenItems = ({openItems}) => {
  //const openItemsData = openItems;
  const pageSize = 5; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate start and end indices for pagination
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Get the data for the current page
  const currentData = openItems.slice(startIndex, endIndex);

  // Function to handle pagination buttons
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (



<div className="container">
{currentData.map((item) => (
  <div className="item" key={item.id}>
    <div> <div className="item-name">{item.name} - ({item.team.teamName})</div> <div className="item-actions">
      <button className="action-button complete">Close</button>
    </div></div>
    <div className="item-status"></div>
    <div className="item-priority">Type: {item.type}</div>
    <div className="">{item.comments}</div>
    
  </div>
))}
</div>

  );
};

export default MyOpenItems;