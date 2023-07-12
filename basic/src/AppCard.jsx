import React from 'react'

export default function AppCard() {
  return (
    <>
      <Card>
        <p>Crad1</p>
      </Card>
      <Card>
        <p>Crad2</p>
        <p>Hiiiii</p>
      </Card>
    </>
  )
}

function Card({ children }) {
  return (
    <div style={{
      backgroundColor: "black",
      borderRadius: "20px",
      color: "white",
      minHeight: "200px",
      minWidth: "200px",
      margin: "1rem",
      padding: "1rem",
      textAlign: "center",
    }}>
      {children}
    </div>
  )
}