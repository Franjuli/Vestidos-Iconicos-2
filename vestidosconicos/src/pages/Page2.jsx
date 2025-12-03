import "./Page2.css";
import vestido1 from "../assets/Princess Diana (1981).jpg";

export default function Page2() {
  return (
    <div className="page2">
      <h2 className="page2-title">Conheça vestidos iconiĉos da cultura pop</h2>

      <p className="page2-text">
A moda passa, o estilo permanece" - Coco Chanel
      </p>

      {/* BLOCO 1 */}
      <section className="spread left">
      <img src={vestido1} alt="Vestido de casamento da princesa Diana" />

        <div className="spread-text">
          <h3>Vestido de casamento da princesa Diana</h3>
          <p>O desenho inicial já apontava para um modelo clássico da década de 1980: mangas bufantes e uma longa cauda.</p>
            <p>O detalhe chamou atenção, visto que a barra do vestido tinha nada menos que 7 metros, e foi a maior já vista em um casamento real. O tecido recebeu detalhes especiais, como 10 mil lantejoulas e pérolas.
</p>
        </div>
      </section>

      {/* BLOCO 2 */}
      <section className="spread right">
        <div className="spread-text">
          <h3>Vestido de Sissi</h3>
          <p>A tela apresenta Sissi em um vestido de cetim branco sobre crinolina, coberto por uma fina camada de tule salpicado de estrelas em folhas de prata. O traje, possivelmente confeccionado pela Casa Worth </p>
          <p>(fundada pelo estilista inglês Charles Frederick Worth), do topo de seu cabelo trançado até a barra da saia, a roupa da soberana era coberta por estrelas reluzentes, que denotavam seu status imperial.

</p>
        </div>
        <img src="/img2.jpg" alt="Vestido de Sissi" />
      </section>

      {/* BLOCO 3 */}
      <section className="spread left">
        <img src="/img3.jpg" alt="Vestido da Cinderela" />
        <div className="spread-text">
          <h3>Vestido da Cinderela</h3>
          <p>
Com oito versões, o vestido azul criado pela Fada Madrinha de Helena Bonham Carter, na verdade, foi produzido por 18 costureiros e demorou 500 horas para ficar pronto. Foram mais de 240 metros de tecido (afinal, a saia tem 12 camadas) e 10 mil cristais.
</p>
        </div>
      </section>

      {/* BLOCO 4 */}
      <section className="spread right">
        <div className="spread-text">
          <h3>Vestido da Bela e a Fera 2014 </h3>
          <p>
Figurinista responsável: Pierre-Yves Gayraud
O figurino de Bela no filme foi criado de forma a refletir o tom fantástico e histórico-folclórico da história —
</p>
           <p ou seja, há uma mistura de referências históricas (como moda inspirada no passado) com toques de fantasia.
</p>
        </div>
        <img src="/img4.jpg" alt="Vestido da Bela e a Fera 2014" />
      </section>

      {/* BLOCO 5 */}
      <section className="spread left">
        <img src="/img5.jpg" alt="Elizabeth frankenstein 2025" />
        <div className="spread-text">
          <h3>Elizabeth frankenstein 2025</h3>
          <p>Aqui o vestido em questão é inspirado em uma imagem radiográfica , ela está adornada com um azul cerúleo e um colar de escaravelho da Tiffany & Co.</p>
          <p>, peça de arquivo .Os desenhos de Hawley evocam claramente a botânica, os besouros e todo tipo de pequenas e complexas criaturas pelas quais Elizabeth é tão fascinada.
</p>
        </div>
      </section>

      {/* BLOCO 6 */}
      <section className="spread right">
        <div className="spread-text">
          <h3>Vestido de casamento  da Branca de Neve</h3>
          <p>Vestido de noiva de Branca de Neve concebido por Eiko Ishioka para “Espelho, Espelho Meu”  foge do branco tradicional e aposta em um ousado contraste de azuis claros e vibrantes, realçado por um laço laranja de proporções generosas nas costas.</p>
           <p>Com decote sutil e corte inspirado na moda histórica do século XVII, o vestido mistura elegância e simbolismo: o azul sugere renascimento e liberdade, enquanto o laço laranja a transforma visualmente numa “oferta viva” ao príncipe e ao público.
</p>
        </div>
        <img src="/img6.jpg" alt="Vestido de casamento  da Branca de Neve" />
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


