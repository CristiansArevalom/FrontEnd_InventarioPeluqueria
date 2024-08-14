import '../styles/Home.css';
import homePhoto from '../assets/headerPhoto.jpg';

export const Home = () => {
    return (
        <>

<section className="featurette">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                Peluquería Mary, <span className="text-body-secondary">Belleza y Estilo a tu Alcance. </span>
              </h2>
              <p className="lead">Ven y descubre cómo realzar tu estilo con nuestro toque experto y atención personalizada.</p>
            </div>
            <div className="col-md-5">
            <img src={homePhoto} alt="Bootstrap" className="img-fluid rounded-circle" width="500" height="500" />
            {/*<svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
                <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">500x500</text>
              </svg>*/}
            </div>
          </div>
        </div>
      </section>

  {/* TOCA ES LEER EL ARREGLO DE PRODUCTOS Y ESCOGER LOS 3 PRIMEROS CON UN FOR. */}
      <hr className="featurette-divider" />
      <section className="marketing">
        <div className="container">
        <h2 className="pb-2 border-bottom">Productos</h2>
          <div className="row">
            <div className="col-lg-4">
              <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
              </svg>
              <h2 className="fw-normal">Heading</h2>
              <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
              <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
              <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
              </svg>
              <h2 className="fw-normal">Heading</h2>
              <p>Another exciting bit of representative placeholder content. This time, we’ve moved on to the second column.</p>
              <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
              <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
              </svg>
              <h2 className="fw-normal">Heading</h2>
              <p>And lastly this, the third column of representative placeholder content.</p>
              <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>
          </div>
        </div>


{/* TOCA ES LEER EL ARREGLO DE SERVICIOS Y ESCOGER LOS 3 PRIMEROS CON UN FOR. */}

<div className="container px-4 py-5" id="custom-cards">
    <h2 className="pb-2 border-bottom">Servicios</h2>

    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
      <div className="col">
        <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg" style={{ backgroundImage: "url('https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg')" }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
            <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h3>
            <ul className="d-flex list-unstyled mt-auto">
              <li className="me-auto">
                <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"/>
              </li>
              <li className="d-flex align-items-center me-3">
                <svg className="bi me-2" width="1em" height="1em"><use href="#geo-fill"/></svg>
                <small>Earth</small>
              </li>
              <li className="d-flex align-items-center">
                <svg className="bi me-2" width="1em" height="1em"><use href="#calendar3"/></svg>
                <small>3d</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      </div>

      </section>
      <hr className="featurette-divider" />
      <section>
          <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold text-body-emphasis">Sobre Peluqueria Mary</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        </div>
      </div>
      </section>

     <hr className="featurette-divider" />
    </>
      );
};

