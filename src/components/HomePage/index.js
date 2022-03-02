import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import mypic from "./../../../public/images/im.png";
import {
  AiFillGithub,
  AiOutlineBehance,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function HomePage() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div className={styles.cardSolo}>
        <div className={styles.gradient}>
          <div className={styles.gradiente1}></div>
          <div className={styles.gradiente2}></div>
          <div className={styles.gradiente3}></div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardContainer}>
            <div
              data-aos="fade-down"
              data-aos-delay="300"
              className={styles.cardPerson}
            >
              <Image
                src={mypic}
                alt="Im"
                className={styles.image}
                width={120}
                height={120}
                unoptimized={true}
              />

              <h2 className={styles.title}>Hi! i’m a Front-End developer 👋</h2>

              <Link href="/projects">
                <a className={styles.btn}>Ver projetos</a>
              </Link>

              <div className={styles.icons}>
                <a
                  href="https://www.behance.net/jlsnjnr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineBehance size={24} />
                </a>
                <a
                  href="https://github.com/jlsnjnr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub size={24} />
                </a>

                <a
                  href="https://api.whatsapp.com/send?phone=5512981872315&"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineWhatsApp size={24} />
                </a>

                <a
                  href="https://www.linkedin.com/in/jlsnjnr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
