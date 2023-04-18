import Layout from "../componenst/Layout";
import Image from "next/image";
import Skills from "../componenst/Skills";

const Index = () => (
  <Layout>
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary">
          <div className="row">
            <div className="col-md-2">
              <img
                src="https://avatars.githubusercontent.com/u/23020718?v=4"
                alt="Picture of the author"
                className="img-fluid"
              />
            </div>
            <div className="col-md-10">
              <h1>Homero Cabrera Araque</h1>
              <h3>FullStack Developer</h3>
              <p>
                Soy tecnólogo en análisis y desarrollo de sistemas de
                información, actualmente estudiante de ingeniería e software 7TO
                semestre y aprendo rápido y me apasiona la tecnología. Me
                encanta el desarrollo web, Móvil y simplificar los procesos.
                actualmente estoy trabajando realizando automatizaciones con C#.
                y reactJS me parece genial. estoy buscando nuevos retos
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/** Second section **/}

    <div className="row py-4">
      <div className="col-md-3">
        <div className="card bg-ligth">
          <div className="card-body">
            <h1>Skills</h1>
            <Skills name="Javascript" progressbar="70" />
            <Skills name="C#" progressbar="80" />
            <Skills name="Java" progressbar="20" />
            <Skills name="Python" progressbar="20" />
          </div>
        </div>
      </div>
      <div className="col-md-9">
        <div className="card bg-ligth">
          <div className="card-body">
            <h1>Experience</h1>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;