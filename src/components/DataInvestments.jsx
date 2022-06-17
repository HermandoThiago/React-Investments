export default function DataInvestments({
    id, month, year, value, income
}) {
  return (
    <tr className="border-b-2 hover:bg-gray-100 cursor-pointer" key={id}>
        <td>{month}/{year}</td>
        <td>R$ {value}</td>
        <td className={income > 0 ? "text-green-500 font-semibold" : "text-red-500 font-semibold"}>{income}%</td>
    </tr>
  )
}
