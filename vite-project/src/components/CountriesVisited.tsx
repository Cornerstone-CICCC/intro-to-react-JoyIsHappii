type CountriesVisitedProps = {
  countries: { name: string; rating: number }[];
};

const CountriesVisited = ({ countries }: CountriesVisitedProps) => {
  return (
    <div className="countries-visited">
      <h2>Countries Visited</h2>
      <ul>
        {countries.map((c) => (
          <li key={c.name}>{c.name} - Rating: {c.rating}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesVisited;