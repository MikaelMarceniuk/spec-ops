'use client'

import { useAuth } from '@/src/providers/auth.provider'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Skeleton } from '../ui/skeleton'
import { getUserInitials } from '@/src/utils/get-user-initials.utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/src/components/animate-ui/components/radix/dropdown-menu'
import { IconLogout } from '@tabler/icons-react'
import { slugify } from '@/src/utils/slugify.utils'
import { useRouter } from 'next/navigation'
import { Spinner } from '../ui/spinner'

export const UserAvatar = () => {
  const { user, isFetchingUser, signOut, isSigningOut } = useAuth()
  const router = useRouter()

  if (isFetchingUser || !user) {
    return <Skeleton className="size-8 rounded-full" />
  }

  const goToDashboardHandler = () =>
    router.push(`${slugify(user!.name)}-operations`)

  const signOutHandler = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    await signOut()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={user?.image || ''} />
          <AvatarFallback>{getUserInitials(user!.name)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit mr-8">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="pb-0">{user?.name}</DropdownMenuLabel>
          <DropdownMenuLabel className="text-muted-foreground text-xs">
            {user?.email}
          </DropdownMenuLabel>
        </DropdownMenuGroup>

        <DropdownMenuGroup>
          <DropdownMenuItem onClick={goToDashboardHandler}>
            Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem>Configurações da conta</DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          variant="destructive"
          className="justify-between"
          onClick={signOutHandler}
          disabled={isSigningOut}
        >
          {isSigningOut ? (
            <>
              Deslogando...
              <Spinner />
            </>
          ) : (
            <>
              Deslogar <IconLogout />
            </>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
