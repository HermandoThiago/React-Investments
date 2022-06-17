import Description from "./Description";

import DataInvestments from "./DataInvestments";

export default function InvestmentsFunds({ 
    name = "Nome do fundo",
    data = []
}) {

  const sortData = data.sort((a, b) => {
    if(a.month < b.month){
        return -1
    }else{
        return true
    }
  });

  const calcIncome = (actualInvestment) => {
    const getPassInvestiment = data.filter((investment) => {
        return investment.month === actualInvestment.month - 1
    });

    const passInvestiment = getPassInvestiment[0] ? (((actualInvestment.value / getPassInvestiment[0].value)*100) - 100).toFixed(2) : (0).toFixed(2);

    return passInvestiment
  }

  const totalIcome = () => {
      
      const jan = data[0].value
      const dez = data[data.length - 1].value

      const incomeTotal = dez - jan;

      return incomeTotal.toFixed(2);
  }

  const percent = ((totalIcome()/data[0].value)*100).toFixed(2);

  const textMonth = (month) => {

    let textMonthActual = ""; 

    switch(month){
        case 1:
            textMonthActual = "Jan";
            break;
        case 2:
            textMonthActual = "Fev";
            break;
        case 3:
            textMonthActual = "Mar";
            break;
        case 4:
            textMonthActual = "Abr";
            break;
        case 5:
            textMonthActual = "Mai";
            break;
        case 6:
            textMonthActual = "Jun";
            break;
        case 7:
            textMonthActual = "Jul";
            break;
        case 8:
            textMonthActual = "Ago";
            break;
        case 9:
            textMonthActual = "Set";
            break;
        case 10:
            textMonthActual = "Out";
            break;
        case 11:
            textMonthActual = "Nov";
            break;
        case 12:
            textMonthActual = "Dez";
            break
        default:
            return false
    }

    return textMonthActual;
  }

  return (
    <div className="lg:w-2/5 lg:px-6 mt-5 border sm:w-full text-center mb-12 rounded-md py-2">
        <Description 
            name={name}
            totalIncome={totalIcome()}
            income={percent}
        />

        <table className="table-fixed w-full">
            <thead>
                <tr>
                    <th>Mês</th>
                    <th>Valor</th>
                    <th>Rendimento</th>
                </tr>
            </thead>
            <tbody>
                {sortData.map((investiment) => {
                    const { id, month, year, value } = investiment;
                    
                    return(
                        <DataInvestments 
                            id={id}
                            month={textMonth(month)}
                            year={year}
                            value={value.toFixed(2)}
                            income={calcIncome(investiment)}
                        />
                    )
                    })}
            </tbody>
        </table>    
    </div>
  )
}
