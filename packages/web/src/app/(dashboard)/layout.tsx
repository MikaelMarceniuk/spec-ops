import { Header } from '@/src/components/header'
import { withChildren } from '@/src/types/with-children.type'

const DashboardLayout: React.FC<withChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default DashboardLayout
