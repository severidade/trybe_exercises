import React, { Component } from 'react';

class ListadeTarefas extends Component {
	render() {
		const Task = (value) => {
			return (
				<li key={value}>{value}</li>
			);
		}
		const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];
		return (
			<header>
				<h2>Lista de Tarefas</h2>
				<ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
			</header>
		);
	}
}

export default ListadeTarefas;
// obs: O nome do componente precisa sempre vir em maúscula