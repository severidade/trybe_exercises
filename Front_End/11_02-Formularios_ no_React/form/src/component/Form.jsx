import React, { Component } from 'react';

class Form extends Component {
	render() {
		return (
			<div>
				<h1>Estados e Ract: ferramenta incrivél ou reagindo a regionalismos</h1>
				<form className="formulario">
					<label>
						Diga qual é o seu Estado vavorito! Do brasil ou do React, Você quem sabe!
						<textarea name="estadoFavorito"></textarea>
					</label>
					<label>
						Email
						<input name="email" type="email" />
					</label>
					<label>
						Nome
						<input name="nome" type="text" />
					</label>
					<label>
						Idade
						<input name="idade" type="number" />
					</label>

					<label>
						Vai comparecer à conferência?
						<input type="checkbox"name="vaiComparecer" />
					</label>
					<label>
						Escolha sua palavra chave favorita:
						<select name="PalavraChaveFavorita">
							<option value="estado">Estado</option>
							<option value="evento">Evento</option>
							<option value="props">Props</option>
							<option value="hooks">Hooks</option>
						</select>
					</label>
				</form>
			</div>
		);
	}
}

export default Form;
// obs: O nome do componente precisa sempre vir em maúscula