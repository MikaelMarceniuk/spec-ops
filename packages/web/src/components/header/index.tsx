import { UserAvatar } from '@/src/components/header/user-avatar'
import { UserTitle } from '@/src/components/header/user-title'
import { ThemeToggler } from '@/src/components/theme-toggler.component'
import { Separator } from '@/src/components/ui/separator'
import { IconTimeline } from '@tabler/icons-react'

export const Header = () => {
  return (
    <header className="h-16 bg-background border-b px-4">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center gap-4">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <IconTimeline />
          </div>

          <div>
            <Separator
              orientation="vertical"
              className="rotate-20 h-6 w-1"
            />
          </div>

          <UserTitle />
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggler />
          <UserAvatar />
        </div>
      </div>
    </header>
  )
}
