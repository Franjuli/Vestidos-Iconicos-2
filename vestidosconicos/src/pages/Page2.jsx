import "./Page2.css";
import vestido1 from "../assets/Princess Diana (1981).jpg";

export default function Page2() {
  return (
    <div className="page2">
      <h2 className="page2-title">Nossos Modelos Especiais</h2>

      <p className="page2-text">
        A Once Upon a Dress transforma vestidos em narrativas de elegância,
        criando peças que unem história, moda e emoção.
      </p>

      {/* BLOCO 1 */}
      <section className="spread left">
      <img src={vestido1} alt="Vestido Clássico" />

        <div className="spread-text">
          <h3>Vestido Clássico</h3>
          <p>Inspirado nos grandes ícones do cinema clássico.</p>
        </div>
      </section>

      {/* BLOCO 2 */}
      <section className="spread right">
        <div className="spread-text">
          <h3>Vestido Moderno</h3>
          <p>Linhas contemporâneas para mulheres ousadas.</p>
        </div>
        <img src="/img2.jpg" alt="Vestido Moderno" />
      </section>

      {/* BLOCO 3 */}
      <section className="spread left">
        <img src="/img3.jpg" alt="Vestido Romântico" />
        <div className="spread-text">
          <h3>Vestido Romântico</h3>
          <p>Delicado, fluído e perfeito para momentos inesquecíveis.</p>
        </div>
      </section>

      {/* BLOCO 4 */}
      <section className="spread right">
        <div className="spread-text">
          <h3>Vestido Luxo</h3>
          <p>Alta costura com brilho, presença e sofisticação.</p>
        </div>
        <img src="/img4.jpg" alt="Vestido Luxo" />
      </section>

      {/* BLOCO 5 */}
      <section className="spread left">
        <img src="/img5.jpg" alt="Vestido Vintage" />
        <div className="spread-text">
          <h3>Vestido Vintage</h3>
          <p>Uma viagem no tempo em forma de tecido.</p>
        </div>
      </section>

      {/* BLOCO 6 */}
      <section className="spread right">
        <div className="spread-text">
          <h3>Vestido Editorial</h3>
          <p>Criação artística para capas e editoriais de moda.</p>
        </div>
        <img src="/img6.jpg" alt="Vestido Editorial" />
      </section>

      {/* LISTA FINAL */}
      <ul className="page2-list">
        <li>Modelos exclusivos</li>
        <li>Inspiração cinematográfica</li>
        <li>Design autoral</li>
        <li>Acabamento premium</li>
      </ul>
    

    </div>
    
  );
}

