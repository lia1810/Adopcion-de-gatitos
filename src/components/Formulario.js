import React from 'react'
const Formulario = () => {
    return (
        <>
        <section class="form">
        <form>
  
          <div class="checkbox">
            <label>
            <input type="checkbox" name="color" value="negro"/>
            Negro
          </label>
          <label>
            <input type="checkbox" name="color" value="blanco"/>
            Blanco
          </label>
          <label>
            <input type="checkbox" name="color" value="gris"/>
            Gris
          </label>
          <label>
            <input type="checkbox" name="color" value="naranja"/>
            Naranja
          </label>
          <label>
            <input type="checkbox" name="color" value="rayado"/>
            Rayado
          </label>
          </div>
  
          <div class="radio">
            <label>
            <input type="radio" name="sexo" value="f"/>
            Femenino
          </label>
          <label>
            <input type="radio" name="sexo" value="m"/>
            Masculino
          </label>
          <label><input type="radio" name="sexo" value="i"/>
            Indiferente
          </label>
          </div>
  
          <div class="name">Nombre
            <input type="text" name="name" placeholder=""/>
          </div>
  
          <div class="phone">Telefono
            <input type="text" name="phone" placeholder=""/>
          </div>
  
          <input type="submit" value="Filtrar"/>
  
        </form>
      </section>
  </>
    )
}
export default Formulario