import Head from "next/head";
import { ProjectsPage } from "../components/ProjectsPage";

export default function Projects() {
  return ( 
    <>
      <Head>
        <title>Projetos</title>
      </Head>
      <ProjectsPage />
    </>
  )
}