import React, { useState, useEffect } from 'react';
import { dashboardService } from '../../../_services';

const LiveFeed = () => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await dashboardService.fetchFeed();
        setFeedData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch data immediately
    fetchData();

    // Fetch data every 10 seconds (adjust the interval as needed)
    const interval = setInterval(fetchData, 60000);

    // Clean up interval when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (

    
    <div className="activity1 vscroll h-300">
        {feedData.map((item) => (
          <div className="activity-blog" key={item.feedId}>
            <div className="activity-img brround bg-primary-transparent text-primary">
                <i className="fa fa-user-plus fs-20"></i>
            </div>
            <div className="activity-details d-flex">
                <div><b><span className="text-dark"> {item.user.name} </span> </b> {item.text} <span className="d-flex text-muted fs-11">{item.time}</span></div>
                <div className="ms-auto fs-13 text-dark fw-semibold"><span className="badge bg-primary text-white">{item.team.name}</span></div>
            </div>
        </div>
        ))}
        
    </div>
  );
};

export default LiveFeed;