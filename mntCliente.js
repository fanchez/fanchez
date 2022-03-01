import { useState,useEffect } from 'react';
import Sclientes from '../../service/SrvClientes';
import SVentas from '../../service/SrvVentas';

const initialForm = [
	{
		loading: false,
		vendedor:0,
		Modalvend:0,
		bvendedor:'',
		vendedorDesc:'',
		item:''
	}
];

// const initialListado = [
// 	{
// 		lstVendedores:{},
// 		lstModalVend:{},
// 		tipoclientes:{},
// 		vendedores:{},
// 		tiponcfs:{},
// 		lstEstadosCivil: {}, //this.$store.state.lstEstadosCivil,
// 		lstPrecios: {},//this.$store.state.lstPrecios,
// 	}
// ]

export default function MntCliente() {
	const [form, setForm] = useState(initialForm);
	// const [listados, setListados] = useState(initialListado);

	// const [lstVendedores, setLstVendedores] = useState([])
	// const [lstModalVend, setLstModalVend] = useState([])
	// const [tipoclientes, setTipoclientes] = useState([])
	// const [vendedores, setVendedores] = useState([])
	// const [tiponcfs, setTiponcfs] = useState([])


	const handleFormChange = (e) => {
		setForm({[e.target.name]:e.target.value });
	}
	// const handleListados = (nombre,valor) => {
	// 	setListados({[nombre]:valor});
	// }
	// const actualizarClt = () => {
	// 	if (listados.vendedores) {
	// 		const id = Number(form.vendedor);
	// 		var v = listados.vendedores.filter(c=> c.id===id);
	// 		handleListados('lstVendedores',v);

	// 		if (listados.lstVendedores.length>0)
	// 			form.vendedorDesc = listados.lstVendedores[0].nombre;
	// 		else
	// 			form.vendedorDesc = '';
	// 	}
	// }
	const guardar = () => {
		var msg='';
		if (this.cliente.nombre.trim() =='')
			msg +='|El nombre no puede estar en blanco.'
		if (this.cliente.ncfTipo<=0)
			msg +='|Debe seleccionar un tipo de NCF.'
		if (msg.trim().length>0)
			console.log(msg);
			// this.$store.dispatch('addMSG', {msg: msg.substring(1), tipo: 'warning'});
		else
		try {
			Sclientes.editCliente(this.cliente)
			.then(r => {
				var tipo='warning';
				if (r.isSuccess){
					tipo = 'success';
			}
				// this.$store.dispatch('addMSG', {msg: r.message, tipo: tipo});
				console.log(msg,tipo);
			})	
			.catch(error => { console.log(error);
				// this.$sktore.dispatch('addMSG', {msg: error.message, tipo: 'danger'});
			});		
		} catch (error) {
			console.log(error);
		}
	}


	// watch: {
	// 		'cliente.vendedor'(){
	// 			this.actualizarClt();
	// 		}
	// 	},

	// useEffect(() => {
	// 	actualizarClt();
	// },[form.vendedor])

	// async created () {
	// 	await Sclientes.getTipoClientes().then(data => this.tipoclientes = data );
	// 	await SVentas.getVendedores().then(data => this.vendedores = data );
	// 	await SVentas.LlenaCombos().then(data => this.tiponcfs = data.tiponcf );
	// 	await Sclientes.getCltbyId(this.$route.params.id).then(data =>  this.cliente = data);
	// },

	useEffect(() => {
	   	// Sclientes.getTipoClientes().then(data => setListados('tipoclientes',data ));
		// SVentas.getVendedores().then(data => setListados('vendedores',data));
		// SVentas.LlenaCombos().then(data => setListados('tiponcfs',data.tiponcf));
		Sclientes.getCltbyId(this.$route.params.id).then(data =>  setForm(data));
	}, [form.vendedor])
	

	
	return (
		<>
			<form v-if="cliente" className="p-3">
				<div className="form-row ">
					<div className="form-group col-md-4">
						<label htmlFor="txtNombre" >Nombre</label>
						<input type="text" className="form-control form-control-sm" id="txtNombre"  value={form.nombre} onChange={handleFormChange} />
					</div>
					<div className="form-group col-md-4">
						<label htmlFor="txtNegocio" >Negocio</label>
						<input type="text" className="form-control form-control-sm" id="txtNegocio"   value={form.negocio} onChange={handleFormChange}/>
					</div>
					<div className="form-group col-md-2">
						<label htmlFor="cboTipoIdentif" >Tipo Identif.</label>
						<select id="cboTipoIdentif" className="form-control form-control-sm"   value={form.tipoident} onChange={handleFormChange}>
							<option value="0" selected > Seleccione...</option>
							<option value="1">Cédula</option>
							<option value="2">RNC</option>
							<option value="3">Pasaporte</option>
						</select>
					</div>
					<div className="form-group col-md-2">
						<label for="txtIdentif" > Identificación</label>
						<input type="text" className="form-control form-control-sm" id="txtIdentif" placeholder=""  value={form.cedula} onChange={handleFormChange}/>
					</div>
				</div>
			</form>
			<button type="submit"  onClick={guardar} className="btn btn-outline-primary btn-sm text-center">
				<font-awesome-icon icon="save"/>Guardar</button>
		</>
	)
}