import Accordion from './packages/accordion/Accordion'

const DUMMY_DATA = [
  {
    id: '1',
    title: 'Why does turning my device off and on again solve all issues?',
    content:
      "A common tech support joke, but there's a practical reason! Restarting a device clears temporary memory, resolves software conflicts, and can even apply pending updates. It's a quick and often effective troubleshooting step."
  },
  {
    id: '2',
    title: 'How to Build an Accordion Menu in React from Scratch?',
    content:
      'Expand your React skills! Learn how to create an accordion menu that allows users to click on headers and reveal/hide corresponding content. Perfect for FAQs, navigation menus, and more.'
  },
  {
    id: '3',
    title: 'Top 10 Must-Have Productivity Apps for 2024',
    content:
      "Boost your efficiency with these top-rated productivity applications. From task management and note-taking to communication and time tracking, there's something for everyone. Discover the best tools to streamline your workflow!"
  },
  {
    id: '4',
    title: 'The Fascinating History of Coffee: From Bean to Cup',
    content:
      'Delve into the world of coffee! Explore the origins of this beloved beverage, from its discovery in Ethiopia to its global spread. Learn about different brewing methods, cultivation practices, and the science behind a perfect cup.'
  },
  {
    id: '5',
    title: 'Cybersecurity Tips: Protecting Yourself Online in 2024',
    content:
      'Stay safe in the digital world! Learn essential cybersecurity practices to safeguard your data and privacy. Discover how to create strong passwords, avoid phishing scams, and keep your devices and accounts secure.'
  }
]
const App = () => {
  return (
    <div className="container mt-40 w-1/2">
      <h1 className="mb-4 text-2xl font-bold text-slate-900">Accordion</h1>
      <Accordion className="w-full overflow-hidden rounded [&>div]:border-b">
        {DUMMY_DATA.map(({ id, title, content }) => (
          <Accordion.Item id={id} key={id}>
            <Accordion.Trigger className="flex items-center">
              <button
                type="button"
                className="flex w-full items-center justify-between py-4 text-left font-semibold hover:underline"
              >
                {title}
              </button>
            </Accordion.Trigger>
            <Accordion.Content className="pb-4 pr-8 text-sm">
              {content}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

export default App
