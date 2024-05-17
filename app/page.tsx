'use client';

import { useEffect, useState } from 'react';
import { fetchData, fetchUsers } from '@/services/api';

interface DataType {
  message: string;
  users: string;
  jobs: string;
}

export default function Home() {
  const [data, setData] = useState<DataType | null>(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData('/');
        const users = await fetchUsers('/users');

        setData(result);
        setUsers(users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div>Fetch Data:</div>
      {data ? (
        <pre>
          <div>{JSON.stringify(data, null, 2)}</div>
          <div>{JSON.stringify(users, null, 2)}</div>
        </pre>
      ) : (
        'Loading...'
      )}
    </>
  );
}
