import React from "react"
import { Link } from "gatsby"
import { Button, Purchase } from "../styles/components"
import { SEO } from "../components"

export default function cancelacion() {
  return (
    <div>
      <SEO title="Compra cancelada" />
      <Purchase>
        <h2>Compra cancelada</h2>
        <p>Lo sentimos pero su transaccion fue rechazada</p>
        <Link to="/">
          <Button>Volver al catalogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
