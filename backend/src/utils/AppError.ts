/** Clase personalizada para manejar los errores */
export class AppError extends Error {
  public code: number;
  constructor(message: string, code: number) {
    super(message);
    this.code = code;
    /** Linea para arreglar el tipo de  instancia al monmento de instanciar la clase AppError*/
    Object.setPrototypeOf(this, AppError.prototype);
  }
}
