import Header from "../components/Header";
import Main from "../components/Main";
import { useEffect } from "react";
import { Investiments } from "../data/Investments";
import { Reports } from "../data/Reports";
import { useState } from "react";
import InvestmentsFunds from "../components/InvestmentsFunds";

export default function Home() {

  const [investiments, setInvestments] = useState(Investiments);
  const [reports, setReports] = useState(Reports);

  useEffect(() => {
    document.title = "React investiments";
  }, [])

  const filterFound = (id) => {
    const filterInvestents = reports.filter((report) => report.investmentId === id);
    return filterInvestents;
  }

  return (
    <>
        <Header>
            React-Investiments
        </Header>
        <Main>
            {investiments.map((found) => (
                <InvestmentsFunds
                    data={filterFound(found.id)} 
                    name={found.description}
                    key={found.id}
                />
            ))}
        </Main>
    </>
  )
}
