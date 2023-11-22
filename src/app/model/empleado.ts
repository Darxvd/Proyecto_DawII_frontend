import { Cargo } from "./cargo";
import { Distrito } from "./distrito";
import { Sexo } from "./sexo";

export interface Empleado {
    id_empleado: number;
    nom_empleado: string;
    apl_empleado: string; 
    edad_empleado: number;
    id_sexo: number,
    dni_empleado: string;
    dir_empleado: string;
    id_cargo: number,
    id_distrito: number,
    objDistrito?: Distrito;
    objCargo?: Cargo;
    objSexo?: Sexo;
}
