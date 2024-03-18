<template>
  <div ref="iviewBg" id="iviewBg"></div>
</template>

<script>
import * as THREE from 'three'
import { ref, onMounted } from 'vue'

export default {
  props: {
    amountX: {
      type: Number,
      default: 50,
    },
    amountY: {
      type: Number,
      default: 50,
    },
    color: {
      type: String,
      default: 'ffffff',
    },
    top: {
      type: Number,
      default: 350,
    },
  },

  setup(props) {
    const iviewBg = ref(null)
    const SEPARATION = 100

    let container, camera, scene, renderer
    let particles,
      count = 0
    let mouseX = 0
    let windowHalfX = window.innerWidth / 2

    function init() {
      container = document.createElement('div')
      iviewBg.value.appendChild(container)

      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        1,
        10000,
      )

      camera.position.z = 1000

      scene = new THREE.Scene()

      const numParticles = props.amountX * props.amountY

      const positions = new Float32Array(numParticles * 3)
      const scales = new Float32Array(numParticles)

      let i = 0,
        j = 0

      for (let ix = 0; ix < props.amountX; ix++) {
        for (let iy = 0; iy < props.amountY; iy++) {
          positions[i] = ix * SEPARATION - (props.amountX * SEPARATION) / 2
          positions[i + 1] = 0
          positions[i + 2] = iy * SEPARATION - (props.amountY * SEPARATION) / 2
          scales[j] = 1
          i += 3
          j++
        }
      }

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1))

      const material = new THREE.ShaderMaterial({
        uniforms: {
          color: { value: new THREE.Color(props.color) },
        },
        vertexShader:
          'attribute float scale; void main() {vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );gl_PointSize = scale * ( 300.0 / - mvPosition.z );gl_Position = projectionMatrix * mvPosition;}',
        fragmentShader:
          'uniform vec3 color;void main() {if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;gl_FragColor = vec4( color, 1.0 );}',
      })

      particles = new THREE.Points(geometry, material)
      scene.add(particles)

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setClearAlpha(0)
      renderer.setSize(window.innerWidth, window.innerHeight)
      container.appendChild(renderer.domElement)

      container.style.touchAction = 'none'
      container.addEventListener('pointermove', onPointerMove)

      container.style.position = 'relative'
      container.style.top = `${props.top}px`

      window.addEventListener('resize', onWindowResize)
    }

    function render() {
      camera.position.x += (mouseX - camera.position.x) * 0.05
      camera.position.y = 400
      camera.lookAt(scene.position)

      const positions = particles.geometry.attributes.position.array
      const scales = particles.geometry.attributes.scale.array

      let i = 0,
        j = 0
      for (let ix = 0; ix < props.amountX; ix++) {
        for (let iy = 0; iy < props.amountY; iy++) {
          positions[i + 1] =
            Math.sin((ix + count) * 0.3) * 50 +
            Math.sin((iy + count) * 0.5) * 50

          scales[j] =
            (Math.sin((ix + count) * 0.3) + 1) * 10 +
            (Math.sin((iy + count) * 0.5) + 1) * 10

          i += 3
          j++
        }
      }

      particles.geometry.attributes.position.needsUpdate = true
      particles.geometry.attributes.scale.needsUpdate = true

      renderer.render(scene, camera)

      count += 0.1
    }

    function onWindowResize() {
      windowHalfX = window.innerWidth / 2
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    function onPointerMove(event) {
      if (event.isPrimary === false) return
      mouseX = event.clientX - windowHalfX
    }

    function animate() {
      requestAnimationFrame(animate)
      render()
    }

    onMounted(() => {
      init()
      animate()
    })

    return { iviewBg }
  },
}
</script>

<style lang="scss" scoped>
#iviewBg {
  width: 100%;
  height: 100vh;
  background: url('../../../../assets/images/login-background.png') no-repeat;
  overflow: hidden;
}
</style>
