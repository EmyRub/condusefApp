import styles from './ParticlesBackground.module.css'

export default function ParticlesBackground() {
  return (
    <>
      <div className={`${styles.burbuja} bg-white opacity-5 rounded-full absolute   animate-burbuja`}></div>

    </>
  )
}
