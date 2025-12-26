import { withChildren } from '../types/with-children.type'

export const MainContainer: React.FC<withChildren> = ({ children }) => {
  return (
    <div className="px-[clamp(1rem,5vw,4rem)] py-6 bg-zinc-50 dark:bg-black min-h-[calc(100vh-64px)]">
      <main>{children}</main>
    </div>
  )
}
