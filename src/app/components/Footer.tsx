import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '../constants'

function Footer() {
  return (
    <div className='mb-24'>
        <div className='max-container padding-container flex flex-col w-full gap-14'>
            <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
                <Link href="/">
                    <Image
                    src="hilink-logo.svg"
                    alt='logo'
                    width={74}
                    height={29}
                    className='mb-10'
                    />
                </Link>
                <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
                    {FOOTER_LINKS.map((column)=> (
                        <FooterColumn title={column.title}>
                            <ul className='flex flex-col gap-4 text-gray-700'>
                                {column.links.map((link)=> (
                                    <Link href='/'>
                                        {link}
                                    </Link>
                                ))}
                            </ul>
                        </FooterColumn>
                    ))}

                    <div className='flex flex-col gap-5'>
                        <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                            {FOOTER_CONTACT_INFO.links.map((link)=> (
                                <Link 
                                href='/' 
                                key={link.label}
                                className='flex gap-4 md:flex-col lg:flex-row'
                                >
                                    <p className='whitespace-nowrap'>
                                        {link.label}
                                    </p>
                                    <p className='whitespace-nowrap font-bold'>
                                        {link.value}
                                    </p>
                                </Link>
                            ))}
                        </FooterColumn>
                    </div>

                    <div className='flex flex-col gap-5'>
                        <FooterColumn title={SOCIALS.title}>
                            <ul className='flex text-gray-800 gap-4'>
                                {SOCIALS.links.map((link)=>(
                                    <Link href='/' key={link}>
                                        <Image
                                        src={link}
                                        alt='logo'
                                        width={24}
                                        height={24}
                                        className='hover:scale-100'
                                        />
                                    </Link>
                                ))}
                            </ul>
                        </FooterColumn>
                    </div>
                </div>
            </div>

            <div className='border border-gray-300' />
            
            <p className='text-center text-gray-800'>2023 Hilink | All rights reserved</p>
        </div >  
    </div>
  )
}
interface footerProps {
    title : string,
    children : React.ReactNode
}
function FooterColumn ({title, children} : footerProps){
    return(
        <div className='flex flex-col gap-5'>
            <h4 className='bold-20'>{title}</h4>
            {children}
        </div>
    )
}

export default Footer