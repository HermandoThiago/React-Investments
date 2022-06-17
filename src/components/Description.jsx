export default function Description({
    name = "nome do fundo",
    totalIncome = "0",
    income = "0"
}) {
  return (
        <div className="mb-4">
            <h1 className="font-semibold">{name}</h1>
            <h3 className="font-semibold">Rendimentos total de 
                <span className="text-green-600"> R$ {totalIncome}</span>
                <span className={income >= 0 ? "text-green-500 font-semibold" : "text-red-500 font-semibold"}> ({income}%)</span>
            </h3>
        </div>
  )
}
