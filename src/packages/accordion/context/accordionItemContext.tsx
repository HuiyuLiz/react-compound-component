import { createContext, useContext } from 'react'

interface AccordionItemProviderProps {
  id: string | null
  children: React.ReactNode
}

export const AccordionItemContext = createContext<{
  id: string | null
} | null>(null)

const AccordionItemProvider = ({
  id,
  children
}: AccordionItemProviderProps) => {
  return (
    <AccordionItemContext.Provider value={{ id }}>
      {children}
    </AccordionItemContext.Provider>
  )
}

const useAccordionItem = () => {
  const ctx = useContext(AccordionItemContext)

  if (ctx === null) {
    throw new Error(
      'AccordionItem-related components must be wrapped in <Accordion.Item>'
    )
  }

  return ctx
}

export { AccordionItemProvider, useAccordionItem }
