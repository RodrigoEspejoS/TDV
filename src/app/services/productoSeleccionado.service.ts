import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductoSeleccionadoService {
    private _productoId: number = 0;

    constructor() {
        // Recuperar el id del producto al iniciar el servicio
        const id = localStorage.getItem('productoId');
        this._productoId = id ? Number(id) : 0;
    }

    set productoId(id: number) {
        this._productoId = id;
        localStorage.setItem('productoId', id.toString());
    }

    get productoId(): number {
        return this._productoId;
    }
}
