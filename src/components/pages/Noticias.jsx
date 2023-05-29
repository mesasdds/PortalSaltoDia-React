import styles from './pagescss/Noticias.module.css'

function Noticias(){

    const url = "https://via.placeholder.com/550x400"
    const urlR = "https://via.placeholder.com/400x250"

    return(
        <main>
            <article className={styles.article_principal}>
                <h2>Subtitulo</h2>
                <h1>Noticia principal do h1</h1>
                </article>
            <div className={styles.container01}>
                <article className={styles.article_secondary}>
                    <img src={url} alt="" />
                    <h2>Subtitulo</h2>
                    <h1>Titulo</h1>
                </article>

                <article className={styles.article_third}>
                    <img src={url} alt="" />
                    <h2>Subtitulo</h2>
                    <h1>Titulo</h1>
                </article>
            </div>
            <div className={styles.container02}>
                <div className={styles.generics}>

                    <article className={styles.article_generics}>
                        <div><img src={urlR} alt="" /></div>
                        <h1>Titulo</h1>
                        <h2>Subtitulo</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates est a non odio eligendi. Repellendus similique ut sit dolorem, optio odio nesciunt illo enim reprehenderit maxime ex animi, est eius.</p>
                        <span><p>Time</p></span>
                    </article>

                    <article className={styles.article_generics}>
                    <div><img src={urlR} alt="" /></div>
                        <h1>Titulo</h1>
                        <h2>Subtitulo</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates est a non odio eligendi. Repellendus similique ut sit dolorem, optio odio nesciunt illo enim reprehenderit maxime ex animi, est eius.</p>
                        <span><p>Time</p></span>
                    </article>
                    <article className={styles.article_generics}>
                    <div><img src={urlR} alt="" /></div>
                        <h1>Titulo</h1>
                        <h2>Subtitulo</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates est a non odio eligendi. Repellendus similique ut sit dolorem, optio odio nesciunt illo enim reprehenderit maxime ex animi, est eius.</p>
                        <span><p>Time</p></span>
                    </article>

                </div>

                <div className={styles.recommends}>
                    <article className={styles.article_recoomends}>
                        <h1>Noai mportmnaf QJFNSADBGJN  MNO NSJOGNWS ONOJN</h1>
                        <div><img src={urlR} alt="" /></div>
                    </article>
                    <article className={styles.article_recoomends}>
                        <h1>loremNoai mportmnaf QJFNSADBGJN  MNO NSJOGNWS ONOJN</h1>
                        <div><img src={urlR} alt="" /></div>
                    </article>
                    <article className={styles.article_recoomends}>
                        <h1>Noai mportmnaf QJFNSADBGJN  MNO NSJOGNWS ONOJN</h1>
                        <div><img src={urlR} alt="" /></div>
                    </article>
                </div>
            </div>
        </main>
    )
}

export default Noticias