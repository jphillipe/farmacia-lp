import { Header } from '@/components/header'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold">Bem-vindo à Farmácia</h1>
        <p className="mt-4 text-muted-foreground">
          Encontre os melhores produtos para sua saúde e bem-estar
        </p>
      </main>
    </div>
  )
}
