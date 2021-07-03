import { Link } from "gatsby"
import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"

export default function gracias() {
  return (
    <div>
      <SEO title="Compra Exitosa" />
      <Purchase>
        <h2>Compra exitosa</h2>
        <p>Espero disfrutes tu nuevo swag</p>
        <p>Te esperamos de vuelta, nunca pares de aprender</p>
        <span role="img" aria-label="emoji">
          ♥
        </span>
        <Link to="/">
          <Button>Volver al catalogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
