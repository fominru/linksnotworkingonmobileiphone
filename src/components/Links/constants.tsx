import React, {ReactNode} from "react"

export type HrefTextType = {
  href?: string
  text: ReactNode
}
export const links2: HrefTextType[] = [
  {text: "Page 1", href: "/page1"},
  {text: "Page 2", href: "/page2"},
]

