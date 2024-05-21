import React from 'react';
import Link from 'next/link';

type Props = {};

const NavBar = (props: Props) => {
  return (
    <>
      <div className="space-x-5">
        <Link href="/register">Register</Link>
        <Link href={'/login'}>Login</Link>
        <Link href={'/create-job'}>Track Job</Link>
        <Link href={'/update-job'}>Update Job</Link>
      </div>
    </>
  );
};

export default NavBar;
