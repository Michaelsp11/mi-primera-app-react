function App() {
  const titularNoticia = "Titular de la noticia";
  const cuerpoNoticia =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam, iusto omnis minima corrupti est officiis natus nam, adipisci commodi quo autem magnam sequi magni odio soluta temporibus velit quas!";
  const categorias = [
    "Noticias de deporte",
    "Noticias de ocio",
    "Noticias de política",
    "Noticias de espectáculos",
  ];
  const otrasCosas = ["Nosequé", "Nosecuánto", "Talycual"];
  const copyright = true;
  return (
    <div className="container">
      <header className="cabecera text-white row align-items-center">
        <h1 className="col m-0">Título</h1>
        <nav className="col text-right">
          <ul className="links-navegacion list-inline m-0">
            <li className="list-inline-item">hola</li>
            <li className="list-inline-item">adiós</li>
            <li className="list-inline-item">ciao</li>
          </ul>
        </nav>
      </header>
      <div className="contenedor-principal row">
        <main className="principal col-12 col-sm-7 col-md-8 py-4">
          <h2>{titularNoticia}</h2>
          <p>{cuerpoNoticia}</p>
          <p>{cuerpoNoticia}</p>
        </main>
        <aside className="sidebar col-12 col-sm-5 col-md-4 py-4">
          <section className="listado">
            <h3>Categorías</h3>
            <ul className="list-unstyled">
              {categorias.map((categoria) => (
                <li key={categoria}>{categoria}</li>
              ))}
            </ul>
          </section>
          <section className="listado">
            <h3>Otras cosas</h3>
            <ul className="list-unstyled">
              {otrasCosas.map((otraCosa) => (
                <li key={otraCosa}>{otraCosa}</li>
              ))}
            </ul>
          </section>
        </aside>
      </div>
      <footer className="pie text-white row align-items-center">
        <p className="col text-center">
          Texto del footer
          {copyright && (
            <span> - Ningún derecho reservado, copia lo que quieras</span>
          )}
        </p>
      </footer>
    </div>
  );
}

export default App;
