import { MainContainer } from '@/src/components/main-container'
import { NewOperationForm } from './components/new-operation.form'

export const NewOperationContent = () => {
  return (
    <MainContainer>
      <NewOperationForm />

      {/* <Separator className="mt-6" />
      <div className="grid grid-cols-[1fr_auto_1fr] px-4">
        <div className="pt-4">
          <h2 className="text-xl font-semibold">Convidar Pessoas</h2>
        </div>
        <Separator
          orientation="vertical"
          className="mx-12"
        />
        <div className="pt-4">
          <h2 className="text-xl font-semibold">Clonar Templates</h2>
        </div>
      </div> */}
    </MainContainer>
  )
}
