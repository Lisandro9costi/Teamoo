import { useState } from "react";
import "./App.css";

function App() {
  const [activo, setActivo] = useState(false);

  const check = () => {
    setActivo(!activo);
  };

  return (
    <>
      <div className="reg">
        <div onClick={check} className="carta">
          <div className="linea"></div>
          <img src="/cora.png" alt="Corazón" className="corazon" />
          <div className="linea"></div>
        </div>

        <input type="checkbox" checked={activo} id="toggle" hidden />
        <div className="texto">
          <p className="msg">
            Hola Florrr, quise cambiar la forma en la que te doy las cartas y
            bueno pasé de papel a virtual JSJSJS, la verdad no tengo ni idea de
            qué decirte en esta carta porque ya te expresé todo lo que siento
            por vos y lo sigo haciendo, pero bueno nose, quiero que sepas, que
            yo realmente te admiro mucho en muchos aspectos, realmente a mí
            parecer sos una persona a la que vale la pena tomar de ejemplo,
            siempre me encantó y al mismo tiempo me dio ternura tu forma de ser,
            como podes ser la persona más cerrada del mundo y al segundo
            convertirte en la persona más expresiva que hay, me encanta
            completamente como sos, además la forma en la que te preocupas por
            mí y como me tratas, realmente no me alcanza una vida para
            agradecerte por tanto, quizás hubo un tiempo en el que por pensar
            todo la pasé mal, pero entre todo eso la única que siempre me dejó
            todo claro y se preocupo por cómo estaba fuiste vos, los mejores
            momentos para mí son los que paso a tu lado, por mucho tiempo quise
            esto y ahora me hace realmente feliz poder decir que estoy en algo
            con vos (no sé todavía que somos, solo sé q es hermoso y me
            encanta), además perdón por todas las veces q t haya provocado
            problemas, preocupaciones o cosas por el estilo, no lo hago con
            intención solo que aveces me pierdo en general y nose, no pienso
            mucho lo que hago, pero quiero que sepas que nada de lo que haga es
            con intenciones de hacerte mal y si es q lo hago perdón… nunca fue
            ni va a ser mi intención, pero bueno, te amo mucho Flor, te lo digo
            seguido pero tmb quiero que sepas que son las palabras más sinceras
            que digo, me encanta todo de vos, posta te agradezco con el corazón,
            gracias por ser Flor, por ser así como sos y quiero que sepas,
            siempre voy a estar para vos, para <strong>CUALQUIER</strong> cosa que necesites y
            bueno para cerrar, desde hace dos años, ahora y para siempre…
            <p className="love">Te amo 💖 💘</p>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
