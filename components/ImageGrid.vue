<template>
  <div class="content relative overflow-hidden">
    <div
      class="pointer-events-none z-10 absolute top-0 left-0 right-0 bottom-0 flex justify-center"
    >
      <img class="hidden jojo-width h-auto" src="/JOJOLOGO.svg" alt="" />
    </div>
    <div class="grid">
      <div
        v-for="(image, index) in 10"
        :key="`imageGrid-${image}`"
        :class="`grid__item pos-${index + 1}`"
      >
        <div
          class="grid__item-img"
          :style="`background-image:url(/img-grid/img-${index + 1}.jpg)`"
        ></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.jojo-width {
  width: 50%;
}

@media screen and (min-width: 53em) {
  .jojo-width {
    width: 17%;
  }
}
</style>
<script>
import { gsap } from 'gsap'
import {
  preloadImages,
  lerp,
  getMousePos,
  map,
  calcWinsize,
  getRandomNumber,
} from '@/assets/image-grid/utils'

export default {
  mounted() {
    // Preload  images
    preloadImages('.grid__item-img, .bigimg').then(() => {
      // Remove loader (loading class)
      document.body.classList.remove('loading')
      this.initGrid()
    })
  },
  methods: {
    initGrid() {
      // Calculate the viewport size
      let winsize = calcWinsize()
      // eslint-disable-next-line no-return-assign
      window.addEventListener('resize', () => (winsize = calcWinsize()))

      // Track the mouse position
      let mousepos = { x: winsize.width / 2, y: winsize.height / 2 }
      // eslint-disable-next-line no-return-assign
      window.addEventListener('mousemove', (ev) => (mousepos = getMousePos(ev)))

      class GridItem {
        constructor(el) {
          this.DOM = { el }
          this.move()
        }

        // Move the items when moving the cursor
        move() {
          // amounts to move in each axis
          const translationVals = { tx: 0, ty: 0 }
          // get random start and end movement boundaries
          const xstart = getRandomNumber(15, 60)
          const ystart = getRandomNumber(15, 60)

          // infinite loop
          const render = () => {
            // Calculate the amount to move.
            // Using linear interpolation to smooth things out.
            // Translation values will be in the range of [-start, start] for a cursor movement from 0 to the window's width/height
            translationVals.tx = lerp(
              translationVals.tx,
              map(mousepos.x, 0, winsize.width, -xstart, xstart),
              0.07
            )
            translationVals.ty = lerp(
              translationVals.ty,
              map(mousepos.y, 0, winsize.height, -ystart, ystart),
              0.07
            )

            gsap.set(this.DOM.el, {
              x: translationVals.tx,
              y: translationVals.ty,
            })
            requestAnimationFrame(render)
          }
          requestAnimationFrame(render)
        }
      }

      class Grid {
        constructor(el) {
          this.DOM = { el }
          this.gridItems = []
          this.items = [...this.DOM.el.querySelectorAll('.grid__item')]
          this.items.forEach((item) => this.gridItems.push(new GridItem(item)))

          this.showItems()
        }

        // Initial animation to scale up and fade in the items
        showItems() {
          gsap
            .timeline()
            .set(this.items, { scale: 0.7, opacity: 0 }, 0)
            .to(
              this.items,
              {
                duration: 2,
                ease: 'Expo.easeOut',
                scale: 1,
                stagger: { amount: 0.6, grid: 'auto', from: 'center' },
              },
              0
            )
            .to(
              this.items,
              {
                duration: 3,
                ease: 'Power1.easeOut',
                opacity: 0.6,
                stagger: { amount: 0.6, grid: 'auto', from: 'center' },
              },
              0
            )
        }
      }

      // Initialize grid
      // eslint-disable-next-line no-unused-vars
      const grid = new Grid(document.querySelector('.grid'))
    },
  },
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - 105px);
  position: relative;
  align-items: center;
  justify-content: center;
  min-height: 300px;
}

.grid {
  pointer-events: none;
  position: absolute;
  width: 110%;
  height: 110%;
  top: -5%;
  left: -5%;
  display: grid;
  grid-template-columns: repeat(50, 2%);
  grid-template-rows: repeat(50, 2%);
}

@media screen and (min-width: 53em) {
  .grid {
    grid-template-columns: repeat(50, 2%);
    grid-template-rows: repeat(50, 2%);
  }
}

.grid__item {
  position: relative;
}

.grid--img .grid__item {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
}

.grid__item-img {
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50% 50%;
}

.grid--img .grid__item-img {
  flex: none;
  width: calc(100% + 100px);
  height: calc(100% + 100px);
  will-change: transform;
}

/* Shorthand grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end */

.pos-1 {
  grid-area: 10 / 1 / 26 / 7;
}

@media screen and (min-width: 53em) {
  .pos-1 {
    grid-area: 10 / 1 / 26 / 7;
  }
}

.pos-2 {
  grid-area: 1 / 18 / 9 / 27;
}

.pos-3 {
  grid-area: 1 / 36 / 14 / 42;
}

.pos-4 {
  grid-area: 13 / 11 / 32 / 18;
}

@media screen and (max-width: 53em) {
  .pos-4 {
  }
}

.pos-5 {
  grid-area: 17 / 32 / 32 / 38;
}

@media screen and (max-width: 53em) {
  .pos-5 {
  }
}

.pos-6 {
  grid-area: 20 / 46 / 28 / 51;
}

.pos-7 {
  grid-area: 43 / 1 / 51 / 10;
}

.pos-8 {
  grid-area: 38 / 14 / 46 / 22;
}

@media screen and (max-width: 53em) {
  .pos-8 {
    grid-area: 38 / 14 / 46 / 35;
  }
}

.pos-9 {
  grid-area: 40 / 26 / 51 / 32;
}

.pos-10 {
  grid-area: 37 / 39 / 48 / 47;
}

.content__title {
  font-family: bely-display, sans-serif;
  font-weight: 400;
  font-size: 10vw;
  margin: 0;
  line-height: 1;
  position: relative;
}

.content__title-sub {
  color: var(--color-content-title-sub);
  font-size: 4.5vw;
  display: block;
  margin-left: 3vw;
  line-height: 0.5;
}

.cursor {
  display: none;
}

@media screen and (min-width: 53em) {
  .message {
    display: none;
  }

  .frame {
    position: fixed;
    text-align: left;
    z-index: 100;
    top: 0;
    left: 0;
    display: grid;
    align-content: space-between;
    width: 100%;
    max-width: none;
    height: 100%;
    padding: 3rem;
    pointer-events: none;
    grid-template-columns: 75% 25%;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      'title links'
      '... ...'
      '... demos';
  }

  .frame__title-wrap {
    grid-area: title;
    display: flex;
  }

  .frame__title {
    margin: 0;
  }

  .frame__tagline {
    position: relative;
    margin: 0 0 0 1rem;
    padding: 0 0 0 1rem;
    opacity: 0.5;
  }

  .frame__demos {
    margin: 0;
    grid-area: demos;
    justify-self: end;
  }

  .frame__links {
    grid-area: links;
    padding: 0;
    justify-self: end;
  }

  .frame a {
    pointer-events: auto;
  }

  .content {
    height: calc(100vh - 105px);
    justify-content: center;
    max-height: none;
  }
}

@media (any-pointer: fine) {
  .cursor {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    pointer-events: none;
  }

  .cursor__inner {
    fill: var(--cursor-fill);
    stroke: var(--cursor-stroke);
    stroke-width: var(--cursor-stroke-width);
  }
}
</style>
