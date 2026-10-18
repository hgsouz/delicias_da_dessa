import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Input } from "../components/input";

function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="grow">
        <h1 className="text-center my-10 text-3xl font-bold">Fale conosco</h1>

        <form action="" className="flex flex-col mx-5 ">
          <Input id="name" label="Nome completo" />
          <Input id="email" label="E-mail" />
          <Input
            id="message"
            label="Mensagem"
            placeholder="Deixe aqui sua mensagem completa"
          />
        </form>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
