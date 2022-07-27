import "./CurrentPage.css";

interface ICurrentPage {
  currentPage: any;
  baseValue: number;
  loading: boolean;
}

function CurrentPage({ loading, currentPage, baseValue }: ICurrentPage) {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <div className="rates-list">
        <ul className="list-group list-group-flush list-custom">
          {currentPage.map((rate: any) => (
            <li className="list-group-item li-custom">
              1 {rate[0]} = <b>{(baseValue / +rate[1]).toFixed(4)}</b> RUB
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default CurrentPage;
