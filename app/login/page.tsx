'use client';
import { useState } from 'react';
import { fetchLoginUser } from '@/services/api';
import Link from 'next/link';

export default function Page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [currentUser, setCurrentUser] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const loginUser = await fetchLoginUser('/users/login', username, password);
      console.log('logged in', loginUser);

      if (loginUser) setCurrentUser(loginUser.user.username);

      setUsername('');
      setPassword('');
    } catch (error) {
      console.error('Error logging in', error);
    }
  };
  return (
    <div>
      <div className="space-x-5">
        <Link href="/">home</Link>
        <Link href="/register">register</Link>
      </div>
      <div>login page</div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input className="text-black" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input
            className="text-black"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">login</button>
      </form>
      {currentUser !== '' && <span>Hello, {currentUser}!</span>}
    </div>
  );
}
