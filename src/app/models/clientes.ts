import { CodigosOrdenCompra } from "./CodigosOrdenCompra"

export interface Clientes {
    id: number
    codigo: string
    nombre: string
    razonSocial: string
    nombreClienteFT: string
    rut: string
    gln: string
    esContado: boolean
    direccion: string
    localidad: string
    departamento: string
    telefono: string
    email: string
    condicionPago: number
    lugarDeEntrega: string
    agencia: string
    listadePrecio: string
    grupoClientes: string
    descuento: number
    vendedor: number
    codigosOrdenCompra: CodigosOrdenCompra
    comisiones: string
    aliasPlanilla: string
    notifyVencido: boolean
    notifyTarget: string
    eeccActivado: boolean
    eeccListadoRSS: any[]
    eeccConfirmarEnvio: boolean
}
