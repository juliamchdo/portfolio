<template>
  <div class="container">
    <h2 class="title">Sobre mim</h2>
    <p class="about-me">
      Após aproximadamente três anos de dedicação como professora de Inglês,
      deparei-me com a fascinante área da programação e explorei as vastas
      possibilidades que o desenvolvimento web oferece. Em 2022, conquistei
      minha primeira oportunidade como Desenvolvedora Front End.
    </p>
    <p class="about-me">
      Desde então, venho aprimorando meus conhecimentos em diversas tecnologias,
      visando criar aplicações que alcancem os melhores resultados possíveis.
      Meu enfoque principal está na usabilidade, responsividade e alto
      desempenho, complementado pela busca constante das melhores práticas em
      código limpo, reutilizável, seguro e de fácil manutenção.
    </p>
    <p class="about-me">
      Atualmente, sou graduada em Análise e Desenvolvimento de Sistemas pela
      UNIVALI. Contudo, mantenho-me dedicada à constante evolução, buscando
      oportunidades para aprofundar e ampliar minhas habilidades como
      desenvolvedora.
    </p>
  </div>
</template>

<style lang="scss" scoped>
@media screen and (max-width: 430px) {
  .container {
    width: 90%;
  }
}

@media screen and (min-width: 431px) {
  .container {
    width: 60%;
  }
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .about-me {
    font-size: 1.8rem;
    line-height: 2.5rem;
    text-indent: 5rem;
    text-align: justify;
  }
}
</style>
