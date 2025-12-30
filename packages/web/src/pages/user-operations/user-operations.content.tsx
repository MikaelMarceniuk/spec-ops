import { MainContainer } from '../../components/main-container'
import { UserOperationsAlerts } from './components/user-operations.alerts'
import { UserOperationList } from './components/user-operations.list'

import { UserOperationsProvider } from './providers/user-operations.provider'
import { UserOperationsRecentPreviews } from './components/user-operations.recent-previews'
import { UserOperationsToolbar } from './components/user-operations.toolbar'

export const UserOperationsContent = () => {
  return (
    <MainContainer>
      <UserOperationsProvider>
        <UserOperationsToolbar />

        <div className="pt-6 grid gap-8 grid-cols-[30%_1fr]">
          <div className="space-y-8">
            <UserOperationsAlerts />
            <UserOperationsRecentPreviews />
          </div>

          <UserOperationList />
        </div>
      </UserOperationsProvider>
    </MainContainer>
  )
}
