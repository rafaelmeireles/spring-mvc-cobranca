$('#modalExclusao').on('show.bs.modal', function(event) {
	
	var button = $(event.relatedTarget);
	var codigoDoTitulo = button.data('codigo');
	var descricaoDoTitulo = button.data('descricao');
	
	var modal = $(this);
	var form = modal.find('form');
	var action = form.data('base-url');
	
	action += '/' + codigoDoTitulo;
	
	form.attr('action', action);
	
	modal.find('.modal-body span').html(
			'Tem certeza que deseja remover o registro: <strong>' + descricaoDoTitulo + '</strong>?'
	);
});

$(function() {
	$('[rel="tooltip"]').tooltip();
	$('.js-currency').maskMoney({thousands : '.', decimal : ','});
	$('.js-atualizar-status').on('click', function(event) {
		event.preventDefault();
		var botaoReceber = $(event.currentTarget);
		var urlReceber = botaoReceber.attr('href');
		
		$.ajax({
			url: urlReceber,
			type: 'PUT',
			success: function(e) {
				var codigoTitulo = botaoReceber.data('codigo');
				botaoReceber.hide();
				$('[data-role=' + codigoTitulo + ']').html('<span class="label label-success">' + e + '</span>');
			}
		});
	});
})