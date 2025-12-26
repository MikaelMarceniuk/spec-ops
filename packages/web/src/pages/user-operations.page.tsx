'use client'

import { useAuth } from '../providers/auth.provider'
import { MainContainer } from '../components/main-container'

export const UserOperationsContent = () => {
  const { user } = useAuth()

  return (
    <MainContainer>
      <div className="flex flex-col gap-2">
        <span>
          Autenticado como: <b>{user?.name}</b>
        </span>
      </div>
    </MainContainer>
  )
}
