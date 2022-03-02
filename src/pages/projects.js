import Head from "next/head";
import { ProjectsPage } from "../components/ProjectsPage";

export default function Projects() {
  return ( 
    <>
      <Head>
        <title>Projetos</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ProjectsPage />
    </>
  )
}