import { useState } from 'react';

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = async (url, method = 'GET', body = null) => {
    try {
      setLoading(true);
      setError(null);

      const options = {
        method,
        headers: {
          'Content-Type': 'application/json', // You can adjust the headers as needed
        },
        body: body ? JSON.stringify(body) : null,
      };

      const response = await fetch(url, options);
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Something went wrong');
      }

      setData(responseData);
    } catch (error) {
      setError(error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, fetchData };
};

