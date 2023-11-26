import { Header } from "../layouts/header"
import { ReactNode } from "react"

export const CommonTemplates = ({ children }: {
  children: ReactNode;
}) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}
