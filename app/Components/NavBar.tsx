import React from 'react';
import Link from 'next/link';

type Props = {
  user: any;
};

const NavBar = ({ user: user }: Props) => {
  console.log(user);
  return (
    <>
      <div className="flex justify-between">
        <div className="space-x-5">
          <Link href={'/'}>Home</Link>
          <Link href="/register">Register</Link>
          <Link href={'/login'}>Login</Link>
          <Link href={'/create-job'}>Track Job</Link>
          <Link href={'/update-job'}>Update Job</Link>
        </div>
        {user && <div>Welcome, {user.username} 👋</div>}
      </div>
    </>
  );
};

export default NavBar;
