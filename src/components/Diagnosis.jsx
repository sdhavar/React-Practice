const data = [
    { id: 1, type: "Debilidades", items: ["Debilidad 1", "Debilidad 2", "Debilidad 3"] },
    { id: 2, type: "Oportunidades", items: ["Oportunidad 1", "Oportunidad 2", "Oportunidad 3"] },
    { id: 3, type: "Fortalezas", items: ["Fortaleza 1", "Fortaleza 2", "Fortaleza 3"] },
    { id: 4, type: "Amenazas", items: ["Amenaza 1", "Amenaza 2", "Amenaza 3"] },
  ];
  
  export default function Diagnosis() {
    return (
      <section className="p-4 grid grid-cols-2 gap-4">
        {data.map((category) => (
          <div key={category.id}>
            <h3 className="font-bold">{category.type}</h3>
            <ul>
              {category.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    );
  }
  