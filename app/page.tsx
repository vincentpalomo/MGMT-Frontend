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
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData('/');
        const users = await fetchUsers('/users');
        const user = await fetchData('/users/id/1');

        setData(result);
        setUsers(users);
        setUser(user);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div>Fetch Data: ✌</div>
      {data ? (
        <pre>
          <h1>server health:</h1>
          <div>{JSON.stringify(data, null, 2)}</div>
          <h1>all users:</h1>
          <div>{JSON.stringify(users, null, 2)}</div>
          <h1>user 1:</h1>
          <div>{JSON.stringify(user, null, 2)}</div>
        </pre>
      ) : (
        'Loading...'
      )}
    </>
  );
}
