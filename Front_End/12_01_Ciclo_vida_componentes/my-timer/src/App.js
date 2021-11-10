import React from "react";
import Timer from "./components/Timer";
import "./App.css";

class App extends React.Component {
  render() {

    return (
      <div class="conteiner-exercicio">
        <div class="conteiner-cubo2">
          <div class="face_1"><p class="face_nome"><Timer /></p></div>
          <div class="face_2"><p class="face_nome"><Timer /></p></div>
          <div class="face_3"><p class="face_nome"><Timer /></p></div>
          <div class="face_4"><p class="face_nome"><Timer /></p></div>
          <div class="face_5"><p class="face_nome"><Timer /></p></div>
          <div class="face_6"><p class="face_nome"><Timer /></p></div>
        </div>
      </div>
    );
  }
}

export default App;