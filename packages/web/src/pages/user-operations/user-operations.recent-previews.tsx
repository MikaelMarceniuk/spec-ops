import { IconEyeSearch } from '@tabler/icons-react'

export const UserOperationsRecentPreviews = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-sm">Vistos Recentemente</h2>

      <div className="border rounded h-20 flex flex-col items-center justify-center">
        <IconEyeSearch className="text-muted-foreground" />
        <span className="text-muted-foreground">
          Widget de vistos recentemente em desenvolvimento
        </span>
      </div>
    </div>
  )
}
