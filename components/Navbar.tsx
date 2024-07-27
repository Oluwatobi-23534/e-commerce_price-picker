import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navIcons = [
  { src: '/assets/icons/search.svg', alt: 'Search' },
  { src: '/assets/icons/black-heart.svg', alt: 'Heart' },
  { src: '/assets/icons/user.svg', alt: 'User' },
]


const Navbar = () => {
  return (
    <header className='w-full'>
      <nav className='nav'>
        <Link href="/" className='flex items-center gap-1'>
          <Image src="/assets/icons/logo.svg" width={27} height={27} alt='logo' />

          <p className="nav-logo">
            Price <span className='text-primary'>Tracker</span>
          </p>
        </Link>

        <div className="flex items-center gap-5">
          {
            navIcons.map((icon) => (
              <Image key={icon.alt} height={28} width={28} src={icon.src} alt={icon.alt} className='object-contain' />
            ))
          }
        </div>
      </nav>
    </header>
  )
}

export default Navbar