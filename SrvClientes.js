import Api from '../api/Api';


const srvClientes = () => {
	const endpoint = 'cliente';
	const getClientes = async (query) => {
		return await Api().all(endpoint,query).then(r => r.data);
	};

	const getCltbyId = async (id) => {
		return await Api().show(endpoint,id).then(r => r.data.data);
	};
	
	const getCltbyDesc = async (descr) => {
		return await Api().show(endpoint + '/descr',descr).then(r => r.data.data);
	};

	const getTipoClientes = async () => {
		return await Api().all('tipocliente').then(r => r.data.data);
	};
	
	const editCliente = async (body) => {
		var result;
		if (body.id===0){
			result = await Api().store(endpoint, body).then(r => r.data );
		} else {
			result  = await Api().edit(endpoint, body.id, body).then(r => r.data)
		}
		return result;
	};

	return 	{
		getClientes,
		getCltbyId,
		getCltbyDesc,
		getTipoClientes,
		editCliente
	}
}

export default srvClientes