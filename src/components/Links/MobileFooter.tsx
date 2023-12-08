import React, {FC} from 'react'
import Link from 'next/link'
import {HrefTextType} from "@/components/Links/constants"


const links = [
  {text: "Page 1", href: "/page1"},
  {text: "Page 2", href: "/page2"},
]
export const Links: FC = () => {
  return (
    <div>
      {links?.map((link, key) => <FooterLink key={key} links={link}/>)}
    </div>
  )

  function FooterLink({links}: {links: HrefTextType}) {
    return (
      <div className={'flex flex-col pb-8'}>
        <div className={'flex justify-between'}>
          {links.href &&
            <Link href={links.href}
                  className={'text-primary ease-in-out duration-200 hover:text-main-green mb-4'}>
              <div className={'text-base2 font-semibold'}>{links.text}</div>
            </Link>}
          {!links.href && <div className={'text-base2 font-semibold mb-4'}>{links.text}</div>}
        </div>
      </div>
    )
  }
}


