import { Footer } from "../components/footer";
import { Header } from "../components/header";

import personalPicture from "../assets/about/personalPicture.png";

function About() {
  return (
    <>
      <Header />

      <section className="my-10 mx-5">
        <h1 className="text-2xl font-bold text-center">Sobre nós</h1>
        <img src={personalPicture} alt="" className="max-h-100 mx-auto my-10" />
        <p>
          Olá! Que bom ter você por aqui. Sou a Andressa. Muitos me conhecem
          hoje pelo meu trabalho na confeitaria, mas por trás de cada doce
          existe uma história de muita luta, coragem e, acima de tudo, amor
          incondicional. Fui mãe muito jovem. Com a maternidade precoce vieram
          as responsabilidades e os desafios que tantas famílias conhecem bem.
          Houve momentos difíceis, em que a falta de recursos apertava e a
          sensação de impotência diante das necessidades básicas me fazia
          chorar. Mas, em meio às dificuldades, eu tinha meus maiores tesouros:
          os meus filhos. Fiz questão de estar presente em cada fase, criando-os
          com todo o meu carinho. <br />
          <br />
          Foi nos aniversários deles que tudo começou. Mesmo sem poder oferecer
          muito, eu fazia questão de assar um bolinho simples para que eles
          pudessem sentir a alegria e o amor daquela data. Ver o brilho nos
          olhinhos deles me dava a força e a segurança que eu tanto precisava.
          Aos poucos, comecei a fazer bolos para familiares que faziam
          aniversário, sem cobrar nada — apenas pelo desejo de não deixar
          nenhuma data passar em branco e ver estampada a felicidade em quem eu
          amava. Até que chegou o dia em que abri os olhos e decidi: eu não vou
          ficar onde estou. Quero um futuro melhor para mim e para minha
          família. <br />
          <br />
          Compreendi que, se sair da zona de conforto fosse a única alternativa,
          eu iria tentar. Transformar a confeitaria na minha profissão foi a
          realização de um grande sonho, fruto de muito amor e carinho. Esse
          sentimento é o meu principal ingrediente: eu coloco amor em cada bolo
          que preparo, transformando momentos simples em memórias inesquecíveis
          para você e sua família. Seja muito bem-vindo(a) à minha história e ao
          meu trabalho!
        </p>
      </section>

      <Footer />
    </>
  );
}

export default About;
