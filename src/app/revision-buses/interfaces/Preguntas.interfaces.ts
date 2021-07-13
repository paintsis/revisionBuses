export interface Preguntas {
    preguntas: Pregunta[];
}

export interface Pregunta {
    number:        number;
    texto:         string;
    observaciones: Observacione[];
}

export enum Observacione {
    BuenEstado = "Buen Estado",
    Correcta = "Correcta",
    Funciona = "Funciona",
    Incorrecta = "Incorrecta",
    MalEstado = "Mal estado",
    NoFunciona = "No Funciona",
    NoTiene = "No Tiene",
    ObservacioneMalEstado = "Mal Estado",
    Tiene = "Tiene",
}
