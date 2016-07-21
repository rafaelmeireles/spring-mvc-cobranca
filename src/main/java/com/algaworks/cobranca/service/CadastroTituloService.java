package com.algaworks.cobranca.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.algaworks.cobranca.model.StatusTitulo;
import com.algaworks.cobranca.model.Titulo;
import com.algaworks.cobranca.repository.Titulos;

@Service
public class CadastroTituloService {
	
	@Autowired
	private Titulos titulos;
	
	public void salvar(Titulo titulo) {
		titulos.save(titulo);
	}

	public void excluir(Long codigo) {
		titulos.delete(codigo);
	}

	public Titulo receber(Long codigo) {
		return receber(titulos.findOne(codigo));
	}

	public Titulo receber(Titulo titulo) {
		titulo.setStatus(StatusTitulo.RECEBIDO);
		titulos.save(titulo);
		return titulo;
	}

}
