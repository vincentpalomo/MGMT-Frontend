import React from 'react';
import Link from 'next/link';

type Props = {
  user: any;
};

const NavBar = ({ user: user }: Props) => {
  console.log(user?.id);
  console.log(user?.jobs[0].id);
  const user_id = user?.id;
  const post_id = user?.jobs[0].id;
  return (
    <>
      <div className="flex justify-between">
        <div className="space-x-5">
          <Link href={'/'}>Home</Link>
          <Link href="/register">Register</Link>
          <Link href={'/login'}>Login</Link>
          <Link href={'/create-job'}>Track Job</Link>
          <Link
            href={{
              pathname: '/update-job',
              query: { user_id: JSON.stringify(user_id), post_id: JSON.stringify(post_id) },
            }}
          >
            Update Job
          </Link>
        </div>
        {user && <div>Welcome, {user.username} 👋</div>}
      </div>
    </>
  );
};

export default NavBar;
