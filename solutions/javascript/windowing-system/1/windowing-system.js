// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

// Clase Size que acepta width y height como parametros
// su valor inicial son 80 y 60 respectivamente
// tiene el método resize para poder cambiar los valores
export class Size {
  constructor(width = 80, height = 60) {
    this.width = width
    this.height = height
  }

  resize(newWidth, newHeight) {
    this.width = newWidth
    this.height = newHeight
  }
}

export class Position {
  constructor(x = 0, y = 0) {
    this.x = x
    this.y = y
  }

  move(newX, newY) {
    this.x = newX
    this.y =  newY
  }
}

export class ProgramWindow {
  constructor(screenSize, size, position) {
    this.screenSize = new Size(800, 600)
    this.size = new Size()
    this.position = new Position()
  }

  resize(newSize) {
    // Para calcular el maxWidth es restando la nueva posición
    // a el largo de la pantalla 
    const maxWidth = this.screenSize.width - this.position.x
    const maxHeight = this.screenSize.height - this.position.y

    // Para 'posicionarlo' se usa Math.max porque no debe ser negativo
    // y Math.min para saber que newSize no sea mayor que el maxWidth o Height
    this.size.width = Math.max(1, Math.min(newSize.width, maxWidth))
    this.size.height = Math.max(1, Math.min(newSize.height, maxHeight))
  }

  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width
    const maxY = this.screenSize.height - this.size.height

    this.position.x = Math.max(0, Math.min(newPosition.x, maxX))
    this.position.y = Math.max(0, Math.min(newPosition.y, maxY))
  }
}

export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300))
  programWindow.move(new Position(100, 150))

  return programWindow
}