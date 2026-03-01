import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <nav className=" container mx-auto my-4 flex items-center justify-between text-1xl font-bold  bg-black text-white p-5">
        <Link href="/">
          <h1  >Ak Academy</h1>
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link href="/monday">Monday</Link>
          </li>
          <li>
            <Link href="/sunday">Sunday</Link>
          </li>
          <li>
            <Link href="/mpc">mpc</Link>
          </li>
          <li>
            <Link href="/bpc">bpc</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header