import { MainContainer } from '../../components/main-container'
import { UserOperationsAlerts } from './user-operations.alerts'
import { UserOperationList } from './user-operations.list'

import { UserOperationsProvider } from './user-operations.provider'
import { UserOperationsRecentPreviews } from './user-operations.recent-previews'
import { UserOperationsToolbar } from './user-operations.toolbar'

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
