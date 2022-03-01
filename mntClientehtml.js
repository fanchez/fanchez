	<div class="card m-0 p-0 col-md-12 col-lg-8">
		<div class="card-header bg-secondary text-white m-0 p-0 pl-2">
			<div class="float-left">Maestro de Clientes</div>
			<div class="float-right pr-3">
				<b-link :to="{name:'cliente'}" class="text-white"><font-awesome-icon icon="caret-left"/>Volver al listado</b-link>
			</div>
		</div>
	<div class="card-body bg-light m-1 p-1">
		<div v-if="!cliente"  class="loading">Loading...</div>
		<form v-if="cliente" v-on:submit.prevent class="p-3">
			<div class="form-row ">

				<div class="form-group col-md-4">
					<label for="txtNombre" >Nombre</label>
					<input type="text" class="form-control form-control-sm" id="txtNombre"  v-model="cliente.nombre">
				</div>
				<div class="form-group col-md-4">
					<label for="txtNegocio" >Negocio</label>
					<input type="text" class="form-control form-control-sm" id="txtNegocio"   v-model="cliente.negocio" >
				</div>
				<div class="form-group col-md-2">
					<label for="cboTipoIdentif" >Tipo Identif.</label>
					<select id="cboTipoIdentif" class="form-control form-control-sm"   v-model="cliente.tipoident" >
						<option value="0" selected > Seleccione...</option>
						<option value="1">Cédula</option>
						<option value="2">RNC</option>
						<option value="3">Pasaporte</option>
					</select>
				</div>
				<div class="form-group col-md-2">
					<label for="txtIdentif" > Identificación</label>
					<input type="text" class="form-control form-control-sm" id="txtIdentif" placeholder=""  v-model="cliente.cedula" >
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-md-6">
					<label for="txtDireccion" >Direcci&oacute;n</label>
					<input type="text" class="form-control form-control-sm" id="txtDireccion"  v-model="cliente.direccion1" >
				</div>
				<div class="form-group col-md-3">
					<label for="txtCiudad">Ciudad</label>
					<input type="text" class="form-control form-control-sm" id="txtCiudad" placeholder=""  v-model="cliente.direccion2" >
				</div>
				<div class="form-group col-md-3">
					<label for="txtPais">Pa&iacute;s</label>
					<input type="text" class="form-control form-control-sm" id="txtPais" placeholder=""  v-model="cliente.direccion3" >
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-md-3">
					<label for="txtTelefono">Teléfono</label>
					<input type="tel" class="form-control form-control-sm" id="txtTelefono" placeholder=""  v-model="cliente.telefono" >
				</div>
				<div class="form-group col-md-3">
					<label for="cboSexo">Sexo</label>
					<select id="cboSexo" class="form-control form-control-sm"  v-model="cliente.sexo" >
						<option selected>Seleccione...</option>
						<option value="M">Masculino</option>
						<option value="F">Femenino</option>
					</select>
				</div>
				<div class="form-group col-md-3">
					<label for="cboEstadoCivil">Estado Civil</label>
					<select id="cboEstadoCivil" class="form-control form-control-sm"  v-model="cliente.estadoCivil" >
						<option value='' selected>Seleccione...</option>
						<option v-for="item in lstEstadosCivil" :key="item.id" v-bind:value="item.id">
							{{ item.descripcion}}
						</option>
					</select>
				</div>
				<div class="form-group col-md-3">
					<label for="txtFechaNac">Fecha Nac.</label>
					<b-form-datepicker id="txtFechaNac"  v-model="cliente.fechanac" class="" size="sm"  locale="es"
						:date-format-options="{ year: 'numeric', month: '2-digit', day: '2-digit'}" ></b-form-datepicker>
				</div>
			</div>
		<div class="form-row">
			<div class="form-group col-md-3">
				<label for="txtFechaIng">Fecha Ing.</label>
				<b-form-datepicker id="txtFechaIng"  v-model="cliente.fechaing" class="" size="sm" locale="es"
					:date-format-options="{ year: 'numeric', month: '2-digit', day: '2-digit'}" ></b-form-datepicker>
			</div>
			<div class="form-group col-md-5">
				<label for="cboTipo">Tipo Cliente</label>
				<select id="cboTipo" class="form-control form-control-sm"  v-model="cliente.tipo" >
					<option selected>Seleccione...</option>
					<option v-for="item in tipoclientes" :key="item.id" v-bind:value="item.id">
						{{ item.nombre}}
					</option>
				</select>
			</div>
			<div class="form-group col-md-2">
				<label for="txtLimite">Monto Límite</label>
				<input type="number" class="form-control form-control-sm" id="txtLimite" placeholder=""  v-model="cliente.limitecre" >
			</div>
			<div class="form-group col-md-2">
				<label for="txtDias">Días Límite</label>
				<input type="number" class="form-control form-control-sm" id="txtDias" placeholder=""  v-model="cliente.diasCredito" >
			</div>
		</div>
			<div class="form-row">
				<div class="form-group col-md-4">
					<label for="cboNCF">Tipo Comprobante</label>
					<select id="cboNCF" class="form-control form-control-sm"  v-model="cliente.ncfTipo">
						<option value=0 selected>Seleccione ...</option>
						<option v-for="item in tiponcfs" :key="item.id" v-bind:value="item.id">
							{{ item.descripcion}}
						</option>
					</select>
				</div>
				<div class="form-group col-md-2">
					<label for="cboPrecio">Tipo Precio</label>
					<select id="cboPrecio" class="form-control form-control-sm"  v-model="cliente.precioFactura" >
						<option v-for="item in lstPrecios" :key="item.id" v-bind:value="item.id">
							{{ item.descripcion}}
						</option>
					</select>
				</div>
				<div class="form-group col-md-6">
					<label for="txtVendedor">Vendedor</label>
					<div class="input-group-prepend">
						<input type="number" id="txtVendedor" placeholder=""  v-model.number="cliente.vendedor" 
							class="form-control form-control-sm col-sm-2"/>
						<button v-b-modal.modalPopover id="btnVendedor" type="button" class="btn btn-outline-primary btn-sm col-sm-1"><font-awesome-icon icon="search"/></button>
						<input type="text" id="txtVendedorDesc" placeholder=""  v-model="vendedorDesc" disabled='true' 
							class="form-control form-control-sm col-sm-9" >
					</div>
				</div>
			</div>
			<div class="form-row">
				<div class="form-group col-md-12">
					<label for="txtObservacion">Observación</label>
					<textarea class="form-control form-control-sm" id="txtObservacion" placeholder=""  v-model="cliente.observacion" ></textarea>
				</div>
			</div>
			<button type="submit" @click="guardar()" class="btn btn-outline-primary btn-sm text-center">
				<font-awesome-icon icon="save"/>Guardar</button>
		</form>
	</div>
	<b-modal id="modalPopover" title="Buscar Vendedor" ok-only>
		<autocomplete :search="search" placeholder="Buscar Vendedor" :get-result-value="getResultValue"
			:debounce-time="500"></autocomplete>
		<template v-slot:modal-footer="{ ok, cancel }">
			<!-- Emulate built in modal footer ok and cancel button actions -->
			<b-button size="sm" variant="success" @click="setModalValue(); ok()">
				Aceptar
			</b-button>
			<b-button size="sm" variant="danger" @click="cancel()">
				Cancelar
			</b-button>
		</template>
	</b-modal>
	</div>
</template> */}