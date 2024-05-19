'use client';

import { useState } from 'react';
import { fetchCreateUser } from '@/services/api';
import Link from 'next/link';

interface UserData {
  username: string;
  password: string;
  email: string;
  avatar: string;
  prevState: null;
}

export default function Page() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any | null>(null);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Call your API function to create user
      const newUser = await fetchCreateUser('/users/register', username, password, email, avatar);
      console.log('New User:', newUser);
      // Reset form fields
      setUsername('');
      setPassword('');
      setEmail('');
      setAvatar('');
      setError(null);
    } catch (error) {
      setError('Failed to create user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="space-x-5">
        <Link href="/">home</Link>
        <Link href="/login">login</Link>
      </div>

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
        <label>
          Email:
          <input className="text-black" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Avatar:
          <input className="text-black" type="text" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
        </label>
        <button type="submit" disabled={loading}>
          Create User
        </button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
}
