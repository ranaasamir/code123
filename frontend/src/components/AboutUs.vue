<template>
  <body>
  <home></home>
<h1>About Us:</h1>
<p>Founded on 30 April 2013</p>
<h1>Nawwar in a nutshell:</h1>
<p>Nawwar teaches youth animation and motion graphics which are booming trends for entertainment and communicating ideas. We aim at turning the traditional boring way of studying into an entertaining and engaging learning experience by producing educational videos and infographics for free for the public.</p>
<h1>Why learn animation?</h1>
<p>Animated GIFs are now flooding social media websites and new businesses want to inform customers of their products using promotional videos.</p>
<p>Web developers include animation in their websites to engage viewers.</p>
<p>Some movies and short films productions are entirely animated.</p>
<p>Games rely greatly on good design and animation. </p>
<p>Animators earn good money working in media production companies or as freelancers working online from home.</p>
<h1>Nawwar Animation School:</h1>
<p>We organize an animation school periodically in which we teach beginners the basics and many advanced techniques of 2D motion graphics.</p>
<p>We adopt a blended learning model: the sessions’ tutorials are available online so students can learn at home and review the session any time, there are weekly face-to-face workshops to practice the new techniques and work on the graduation project of the course</p>
<p>Students will have coaches to follow up on their progress and assist them when they need.</p>
<p>Graduates of the animation school can work with us to produce educational videos.</p>
<h1>Nawwar Educational Mission:</h1>
<p>
We create educational animated videos and infographics which use humorous analogies and visualization to simplify the difficult concepts and make them memorable.
Currently, we produce videos about general topics that interest everyone. We plan on producing whole academic courses in the near future.</p>
<foot></foot>
</body>
</template>
<style>
body {
    background: url('../assets/blur.jpg') no-repeat center center fixed;
    background-size: cover;
    height: 100%;
}
p {
    line-height: 20px;
    margin-bottom: 20px;
    color: #3B0101;
    font-size: 25px;
}
h1 {
    font-family: 'Crete Round', serif;
    font-weight: bold;
    color: #444;
    font-size: 45px;
    margin-bottom: 20px;
}
</style>
<script>
import Home from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    'home': Home,
    'foot': Footer
  }

}

</script>
