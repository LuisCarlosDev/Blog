/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'

import Emoji from '../Emoji';
import Footer from '../Footer';

import { Container, Dots } from './styles';

export default function Presentation({ full }) {
  return (
    <Container>
      <div itemScope itemType="http://schema.org/Person">

      <h1>Fala Dev! <Emoji heading label="Foguete">🚀</Emoji> </h1>

      <p>Sou Luis Carlos, 20, <i><span itemProp="jobTitle">Developer FrontEnd</span></i>. Comecei a estudar programação com 17 anos. Desde esse tempo venho acreditando que a tecnologia é poderosa o suficiente para mudar nossas vidas.</p>
      <p>Atualmente estou trabalhando junto ao um colega meu em um projeto de delivery, nesse projeto estou atuando com React Native, não sei muito da tecnologia, mas com tempo vou aumentando o nível de conhecimento da stack.
        {full ? '.' : (
          <Dots to="/sobre-mim">...</Dots>
        )}
      </p>

      {full && (
        <>

          <p>Sonho em viver feliz <b>por ser quem sou</b>. Não há nada mais gratificante que notar o impacto positivo que causei na vida de alguém.</p>
          <p>No tempo livre continuo estudando <b>novas tecnologias</b> e me divirto aprendendo.</p>
          <p>Por fim, sou competitivo e busco evoluir o mais rápido no menor tempo possível.</p>

          <p>Nos próximos anos, pretendo produzir <b>muito conteúdo!</b></p>
        </>
      )}
      </div>
      <Footer />
    </Container>
  )
}

Presentation.defaultProps = {
  full: false,
}

Presentation.propTypes = {
  full: PropTypes.bool,
}
