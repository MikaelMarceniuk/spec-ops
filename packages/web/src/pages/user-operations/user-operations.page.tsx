import { MainContainer } from '../../components/main-container'

import { UserOperationsProvider } from './user-operations.provider'
import { UserOperationsToolbar } from './user-operations.toolbar'

export const UserOperationsContent = () => {
  return (
    <MainContainer>
      <UserOperationsProvider>
        <UserOperationsToolbar />
      </UserOperationsProvider>
    </MainContainer>
  )
}
