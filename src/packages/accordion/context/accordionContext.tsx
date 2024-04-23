import { createContext, useContext, useState } from 'react'

interface AccordionProviderProps {
  children: React.ReactNode
}

interface AccordionStateContextProps {
  toggle: (id: string | null) => void
  triggerId: string | null
}

const AccordionStateContext = createContext<AccordionStateContextProps | null>(
  null
)

const AccordionProvider = ({ children }: AccordionProviderProps) => {
  const [triggerId, setTriggerId] = useState<string | null>(null)

  const toggle = (id: string | null) => {
    setTriggerId(triggerId === id ? null : id)
  }

  const defaultValue = {
    toggle,
    triggerId
  }

  return (
    <AccordionStateContext.Provider value={defaultValue}>
      {children}
    </AccordionStateContext.Provider>
  )
}

const useAccordion = () => {
  const ctx = useContext(AccordionStateContext)

  if (ctx === null) {
    throw new Error(
      'Accordion-related components must be wrapped in an <Accordion>'
    )
  }

  return ctx
}

export { AccordionProvider, useAccordion }
