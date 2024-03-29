import React from 'react'

import SketchContainer from 'react-p5'

import Tablero from '../../../assets/images/Tablero.png'
import Dado1 from '../../../assets/images/Dado_1.png'
import Dado2 from '../../../assets/images/Dado_2.png'
import Dado3 from '../../../assets/images/Dado_3.png'
import Dado4 from '../../../assets/images/Dado_4.png'
import Dado5 from '../../../assets/images/Dado_5.png'
import Dado6 from '../../../assets/images/Dado_6.png'

const Sketch = () => {

  let BackgroundImage
  let dado = [1, 1]
  let ImagenDados = []
  let FichaTablero = []
  let colorDeFicha = ['#d9020f', '#0069b4', '#3aaa35', '#ffed00']
  let posicionInicialX = [ 75, 106, 137, 168, 534, 565, 595, 626, 75, 106, 137, 168, 534, 565, 595, 626]
  let posicionInicialY = [158, 158, 158, 158, 158, 158, 158, 158, 564, 564, 564, 564, 564, 564, 564, 564]
  //                        1,   2,   3,   4,   5,   6,   7,   8,   9,  10,  11,  12,  13,  14,  15,  16

  let Velocidad = 1

  const preload = p5 => {
    BackgroundImage = p5.loadImage(Tablero)
    ImagenDados[0] = p5.loadImage(Dado1)
    ImagenDados[1] = p5.loadImage(Dado2)
    ImagenDados[2] = p5.loadImage(Dado3)
    ImagenDados[3] = p5.loadImage(Dado4)
    ImagenDados[4] = p5.loadImage(Dado5)
    ImagenDados[5] = p5.loadImage(Dado6)
  }

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(720, 720).parent(canvasParentRef)

    for (let i = 0; i < 16; i++) {
      if (i >= 0 && i < 4) FichaTablero[i] = new Ficha(p5, posicionInicialX[i], posicionInicialY[i], colorDeFicha[0], i, 'RED')
      else if (i >= 4 && i < 8) FichaTablero[i] = new Ficha(p5, posicionInicialX[i], posicionInicialY[i], colorDeFicha[1], i, 'BLUE')
      else if (i >= 8 && i < 12) FichaTablero[i] = new Ficha(p5, posicionInicialX[i], posicionInicialY[i], colorDeFicha[2], i, 'GREEN')
      else FichaTablero[i] = new Ficha(p5, posicionInicialX[i], posicionInicialY[i], colorDeFicha[3], i, 'YELLOW')
      FichaTablero[i].AsignaPosiciones()
    }

  }

  const draw = p5 => {
    p5.imageMode(p5.CORNER)
    p5.background(BackgroundImage)
    p5.textFont('monospace')

    p5.textSize(15.5)
    p5.textAlign(p5.CENTER, p5.CENTER)
    p5.fill(255)
    p5.text('JUGADOR 1', 120, 29)
    p5.text('JUGADOR 2', 580, 29)
    p5.text('JUGADOR 3', 120, 694)
    p5.text('JUGADOR 4', 580, 694)

    p5.imageMode(p5.CENTER)
    p5.image(ImagenDados[dado[0] - 1], 336, 348, 50, 50)
    p5.image(ImagenDados[dado[1] - 1], 377, 384, 50, 50)

    FichaTablero.map(({ Id }) => {
      FichaTablero[Id].Mostrar()
      if (FichaTablero[Id].PrevPosicion !== FichaTablero[Id].ContadorDePosicion) {
          if (FichaTablero[Id].PostX === FichaTablero[Id].X && FichaTablero[Id].PostY === FichaTablero[Id].Y) {
            if (FichaTablero[Id].ContadorDePosicion > FichaTablero[Id].PrevPosicion) {
              FichaTablero[Id].PostX = FichaTablero[Id].PosicionesX[FichaTablero[Id].PrevPosicion + 1]
              FichaTablero[Id].PostY = FichaTablero[Id].PosicionesY[FichaTablero[Id].PrevPosicion + 1]
              FichaTablero[Id].PrevPosicion += 1
            }
            else {
              FichaTablero[Id].PostX = FichaTablero[Id].PosicionesX[FichaTablero[Id].PrevPosicion - 1]
              FichaTablero[Id].PostY = FichaTablero[Id].PosicionesY[FichaTablero[Id].PrevPosicion - 1]
              FichaTablero[Id].PrevPosicion -= 1
            }
          }
        }
        if (FichaTablero[Id].X < FichaTablero[Id].PostX && FichaTablero[Id].X !== FichaTablero[Id].PostX) {
          if (FichaTablero[Id].PostX - FichaTablero[Id].X >= 6) FichaTablero[Id].X += 5
          else FichaTablero[Id].X += Velocidad
        }
        if (FichaTablero[Id].Y < FichaTablero[Id].PostY && FichaTablero[Id].Y !== FichaTablero[Id].PostY) {
          if (FichaTablero[Id].PostY - FichaTablero[Id].Y >= 6) FichaTablero[Id].Y += 5
          else FichaTablero[Id].Y += Velocidad
        }
        if (FichaTablero[Id].X > FichaTablero[Id].PostX && FichaTablero[Id].X !== FichaTablero[Id].PostX) {
          if (FichaTablero[Id].X - FichaTablero[Id].PostX >= 6) FichaTablero[Id].X -= 5
          else FichaTablero[Id].X -= Velocidad
        }
        if (FichaTablero[Id].Y > FichaTablero[Id].PostY && FichaTablero[Id].Y !== FichaTablero[Id].PostY) {
          if (FichaTablero[Id].Y - FichaTablero[Id].PostY >= 6) FichaTablero[Id].Y -= 5
          else FichaTablero[Id].Y -= Velocidad
        }
        return 0
  })
  }

  const mousePressed = p5 => {
    VerificarFichaSeleccionada(p5)
  }

  const VerificarFichaSeleccionada = (p5) => {
    FichaTablero.forEach(({ Id }) => {
      let d = p5.dist(p5.mouseX, p5.mouseY, FichaTablero[Id].X, FichaTablero[Id].Y)
      if (d < FichaTablero[Id].R) {
        FichaTablero[Id].Mover(1)
        return Id
      }
    })
  }

  function Ficha(p5, X, Y, ColorFondo, Id, Color) {
    this.X = X
    this.Y = Y
    this.R = 13
    this.ColorFondo = ColorFondo
    this.Id = Id
    this.PostX = X
    this.PostY = Y
    this.PosicionesX = []
    this.PosicionesY = []
    this.ContadorDePosicion = 0
    this.PrevPosicion = 0
    this.Color = Color
  
    this.Mostrar = () => {
      p5.strokeWeight(1)
      p5.stroke('black')
      p5.fill(this.ColorFondo)
      p5.ellipse(this.X, this.Y, this.R * 2)
    }
  
    this.Mover = Avance => {
      this.ContadorDePosicion += Avance
    }
  
    this.AsignaPosiciones = () => {
      if (this.Id >= 0 && this.Id <= 3) {
        this.PosicionesX = [0, 263, 263, 263, 270, 249, 216, 185, 153, 121, 89, 58, 26, 26, 26, 58, 89, 121, 153, 185, 216, 248, 270, 263, 263, 263, 263, 263, 263, 263, 351, 439, 439, 439, 439, 439, 439, 439, 431, 453, 485, 516, 548, 580, 612, 643, 675, 675, 675, 643, 612, 580, 548, 516, 485, 453, 431, 439, 439, 439, 439, 439, 439, 439, 351, 351, 351, 351, 351, 351, 351, 351, 349]
        this.PosicionesY = [0, 158, 190, 223, 255, 279, 270, 270, 270, 270, 270, 270, 270, 361, 451, 451, 451, 451, 451, 451, 451, 443, 466, 499, 531, 564, 597, 629, 662, 694, 694, 694, 662, 629, 597, 564, 531, 499, 466, 443, 451, 451, 451, 451, 451, 451, 451, 361, 270, 270, 270, 270, 270, 270, 270, 279, 255, 223, 190, 158, 125, 93, 60, 27, 27, 60, 93, 125, 158, 190, 223, 260, 304]
                    //      0,   1,   2,   3,   4,   5,   6,   7,   8,   9,  10,  11,  12,  13,  14,  15,  16,  17,  18,  19,  20,  21,  22,  23,  24,  25,  26,  27,  28,  29,  30,  31,  32,  33,  34,  35,  36,  37,  38,  39,  40,  41,  42,  43,  44,  45,  46,  47,  48,  49,  50,  51,  52,  53,  54,  55,  56,  57,  58,  59,  60,  61,  62,  63,  64,  65,  66,  67,  68,  69,  70,  71,  72
      }
      else if (this.Id >= 4 && this.Id <= 7) {
        this.PosicionesX = [0, 548, 516, 485, 453, 431, 439, 439, 439, 439, 439, 439, 439, 351, 263, 263, 263, 263, 263, 263, 263, 270, 249, 216, 185, 153, 121, 89, 58, 26, 26, 26, 58, 89, 121, 153, 185, 216, 248, 270, 263, 263, 263, 263, 263, 263, 263, 351, 439, 439, 439, 439, 439, 439, 439, 431, 453, 485, 516, 548, 580, 612, 643, 675, 675, 643, 612, 580, 548, 516, 485, 449, 406]
        this.PosicionesY = [0, 270, 270, 270, 279, 255, 223, 190, 158, 125, 93, 60, 27, 27, 27, 60, 93, 125, 158, 190, 223, 255, 279, 270, 270, 270, 270, 270, 270, 270, 361, 451, 451, 451, 451, 451, 451, 451, 443, 466, 499, 531, 564, 597, 629, 662, 694, 694, 694, 662, 629, 597, 564, 531, 499, 466, 443, 451, 451, 451, 451, 451, 451, 451, 361, 361, 361, 361, 361, 361, 361, 361, 361]
                    //      0,   1,   2,   3,   4,   5,   6,   7,   8,   9,  10,  11,  12,  13,  14,  15,  16,  17,  18,  19,  20,  21,  22,  23,  24,  25,  26,  27,  28,  29,  30,  31,  32,  33,  34,  35,  36,  37,  38,  39,  40,  41,  42,  43,  44,  45,  46,  47,  48,  49,  50,  51,  52,  53,  54,  55,  56,  57,  58,  59,  60,  61,  62,  63,  64,  65,  66,  67,  68,  69,  70,  71,  72
      }
      else if (this.Id >= 8 && this.Id <= 11) {
        this.PosicionesX = [0, 153, 185, 216, 248, 270, 263, 263, 263, 263, 263, 263, 263, 351, 439, 439, 439, 439, 439, 439, 439, 431, 453, 485, 516, 548, 580, 612, 643, 675, 675, 675, 643, 612, 580, 548, 516, 485, 453, 431, 439, 439, 439, 439, 439, 439, 439, 351, 263, 263, 263, 263, 263, 263, 263, 270, 249, 216, 185, 153, 121, 89, 58, 26, 26, 58, 89, 121, 153, 185, 216, 252, 295]
        this.PosicionesY = [0, 451, 451, 451, 443, 466, 499, 531, 564, 597, 629, 662, 694, 694, 694, 662, 629, 597, 564, 531, 499, 466, 443, 451, 451, 451, 451, 451, 451, 451, 361, 270, 270, 270, 270, 270, 270, 270, 279, 255, 223, 190, 158, 125, 93, 60, 27, 27, 27, 60, 93, 125, 158, 190, 223, 255, 279, 270, 270, 270, 270, 270, 270, 270, 361, 361, 361, 361, 361, 361, 361, 361, 361]
                    //      0,   1,   2,   3,   4,   5,   6,   7,   8,   9,  10,  11,  12,  13,  14,  15,  16,  17,  18,  19,  20,  21,  22,  23,  24,  25,  26,  27,  28,  29,  30,  31,  32,  33,  34,  35,  36,  37,  38,  39,  40,  41,  42,  43,  44,  45,  46,  47,  48,  49,  50,  51,  52,  53,  54,  55,  56,  57,  58,  59,  60,  61,  62,  63,  64,  65,  66,  67,  68,  69,  70,  71,  72
      }
      else {
        this.PosicionesX = [0, 439, 439, 439, 431, 453, 485, 516, 548, 580, 612, 643, 675, 675, 675, 643, 612, 580, 548, 516, 485, 453, 431, 439, 439, 439, 439, 439, 439, 439, 351, 263, 263, 263, 263, 263, 263, 263, 270, 249, 216, 185, 153, 121, 89, 58, 26, 26, 26, 58, 89, 121, 153, 185, 216, 248, 270, 263, 263, 263, 263, 263, 263, 263, 351, 351, 351, 351, 351, 351, 351, 351, 351]
        this.PosicionesY = [0, 564, 531, 499, 466, 443, 451, 451, 451, 451, 451, 451, 451, 361, 270, 270, 270, 270, 270, 270, 270, 279, 255, 223, 190, 158, 125, 93, 60, 27, 27, 27, 60, 93, 125, 158, 190, 223, 255, 279, 270, 270, 270, 270, 270, 270, 270, 361, 451, 451, 451, 451, 451, 451, 451, 443, 466, 499, 531, 564, 597, 629, 662, 694, 694, 662, 629, 597, 564, 531, 499, 462, 419]
                    //      0,   1,   2,   3,   4,   5,   6,   7,   8,   9,  10,  11,  12,  13,  14,  15,  16,  17,  18,  19,  20,  21,  22,  23,  24,  25,  26,  27,  28,  29,  30,  31,  32,  33,  34,  35,  36,  37,  38,  39,  40,  41,  42,  43,  44,  45,  46,  47,  48,  49,  50,  51,  52,  53,  54,  55,  56,  57,  58,  59,  60,  61,  62,  63,  64,  65,  66,  67,  68,  69,  70,  71,  72
      }
    }
  }

  return <SketchContainer 
            preload={preload} setup={setup} 
            draw={draw} mousePressed={mousePressed} />
}

export default Sketch