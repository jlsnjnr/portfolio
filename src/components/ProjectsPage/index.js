import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import { AiOutlineCheck, AiOutlineLeft } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import LaParrilla from "./../../../public/images/LaParrila.png";
import pixelTrue from "./../../../public/images/pixelTrue.png";
import muzli from "./../../../public/images/muzli.png";
import upservicos from "./../../../public/images/upservicos.png";
import bobs from "./../../../public/images/bobs.png";

export function ProjectsPage() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div className={styles.container}>
        <Link href="/">
          <a data-aos="fade-up" data-aos-delay="200" className={styles.btn}>
            <AiOutlineLeft size={18} />
          </a>
        </Link>

        <h1 data-aos="fade-up" data-aos-delay="300" className={styles.title}>
          Portfólio
        </h1>
        <p data-aos="fade-up" data-aos-delay="400" className={styles.desc}>
          Cada tarefa contém uma grande dose de entusiasmo e conhecimento. Eu
          continuo a desenvolver e a acompanhar as últimas tendências. Esse é o
          resultado.
        </p>

        <Image
          src={LaParrilla}
          alt="Im"
          width={1089}
          height={710}
          unoptimized={true}
          objectFit="contain"
          style={{ paddingTop: "40px !important" }}
          data-aos="fade-up"
          data-aos-delay="500"
        />

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className={styles.containerDesc}
        >
          <h3>LaParrilla</h3>
          <div className={styles.checkIcon}>
            <AiOutlineCheck />
            <p>Um novo design</p>
          </div>
          <div className={styles.checkIcon}>
            <AiOutlineCheck />
            <p>Combinando com a identidade corporativa elegante</p>
          </div>
          <Link
            href="https://laparrilla.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <a className={styles.btn}>Quero dar uma olhadinha 👀</a>
          </Link>
        </div>

        <Image
          src={pixelTrue}
          alt="Im"
          width={1089}
          height={710}
          unoptimized={true}
          objectFit="contain"
          style={{ paddingTop: "40px !important" }}
          data-aos="fade-up"
          data-aos-delay="200"
        />

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className={styles.containerDesc}
        >
          <h3>PixelTrue</h3>
          <div className={styles.checkIcon}>
            <AiOutlineCheck />
            <p>Um novo design</p>
          </div>
          <div className={styles.checkIcon}>
            <AiOutlineCheck />
            <p>
              Combinando com a identidade corporativa elegante (Site feito para
              estudo)
            </p>
          </div>
          <Link
            href="https://landind-company-linkedin.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <a className={styles.btn}>Quero dar uma olhadinha 👀</a>
          </Link>
        </div>

        <Image
          src={muzli}
          alt="Im"
          width={1089}
          height={710}
          unoptimized={true}
          objectFit="contain"
          style={{ paddingTop: "40px !important" }}
          data-aos="fade-up"
          data-aos-delay="200"
        />

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className={styles.containerDesc}
        >
          <h3>Muzli</h3>
          <div className={styles.checkIcon}>
            <AiOutlineCheck />
            <p>Um novo design</p>
          </div>
          <div className={styles.checkIcon}>
            <AiOutlineCheck />
            <p>
              Combinando com a identidade corporativa elegante (Site feito para
              estudo)
            </p>
          </div>
          <Link
            href="https://site-muzli-linkedin.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            <a className={styles.btn}>Quero dar uma olhadinha 👀</a>
          </Link>
        </div>

        <Image
          src={upservicos}
          alt="Im"
          width={1089}
          height={710}
          unoptimized={true}
          objectFit="contain"
          style={{ paddingTop: "40px !important" }}
          data-aos="fade-up"
          data-aos-delay="200"
        />

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className={styles.containerDesc}
        >
          <h3>Up Serviços</h3>
          <div className={styles.checkIcon}>
            <AiOutlineCheck />
            <p>Um novo design</p>
          </div>
          <div className={styles.checkIcon}>
            <AiOutlineCheck />
            <p>Combinando com a identidade corporativa elegante</p>
          </div>
          <Link
            href="https://upservicos.net.br/"
            target="_blank"
            rel="noreferrer"
          >
            <a className={styles.btn}>Quero dar uma olhadinha 👀</a>
          </Link>
        </div>

        <Image
          src={bobs}
          alt="Im"
          width={1089}
          height={710}
          unoptimized={true}
          objectFit="contain"
          style={{ paddingTop: "40px !important" }}
          data-aos="fade-up"
          data-aos-delay="200"
        />

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className={styles.containerDesc}
        >
          <h3>Bobs</h3>
          <div className={styles.checkIcon}>
            <AiOutlineCheck />
            <p>Um novo design</p>
          </div>
          <div className={styles.checkIcon}>
            <AiOutlineCheck />
            <p>
              Combinando com a identidade corporativa elegante para o grupo
              alemã
            </p>
          </div>
          <Link
            href="https://grupoalema.com.br/?page_id=26"
            target="_blank"
            rel="noreferrer"
          >
            <a className={styles.btn}>Quero dar uma olhadinha 👀</a>
          </Link>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className="container">
          <h2 className={styles.titleFooter}>Vamos conversar!</h2>

          <div className={styles.linksContainer}>
            <Link
              href="mailto:contato.joelsonjunior@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <a className={styles.btn}>Mande um e-mail</a>
            </Link>

            <Link
              href="https://www.linkedin.com/in/jlsnjnr/"
              target="_blank"
              rel="noreferrer"
            >
              <a className={styles.btn}>Se conecte no LinkedIn</a>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
