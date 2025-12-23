import { ThemeToggler } from '../components/theme-toggler.component'
import { Button } from '../components/ui/button'

const HomePage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black gap-2">
      <ThemeToggler />
      <Button>Hello World!</Button>
    </div>
  )
}

export default HomePage
