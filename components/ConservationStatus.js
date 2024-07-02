import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const ConservationStatus = ({ speciesName }) => {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    // Commenting out the IUCN API call for now
    // const apiKey = 'YOUR_IUCN_API_KEY';

    // const fetchConservationStatus = async () => {
    //   try {
    //     const response = await axios.get(
    //       `https://apiv3.iucnredlist.org/api/v3/species/status?name=${speciesName}&token=${apiKey}`
    //     );
    //     if (response.data.result && response.data.result.length > 0) {
    //       setStatus(response.data.result[0].category);
    //     } else {
    //       setStatus('Not Found');
    //     }
    //   } catch (error) {
    //     console.error('Error fetching conservation status:', error);
    //     setStatus('Error');
    //   }
    // };

    // Temporary static status for demonstration
    setStatus('Data not available');

    // fetchConservationStatus();

    // Placeholder for periodic updates
    // const interval = setInterval(() => {
    //   fetchConservationStatus();
    // }, 30 * 24 * 60 * 60 * 1000); // Update every month

    // return () => clearInterval(interval);
  }, [speciesName]);

  return (
    <div>
      <p>Conservation Status: {status}</p>
    </div>
  );
};

export default ConservationStatus;
