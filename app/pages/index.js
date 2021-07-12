import {Octokit} from "@octokit/rest"
import {Image, Link} from "blitz"
import {useEffect, useState} from "react"

import {ButtonLink} from "@/components/ButtonLink"
import {Header} from "@/components/Header"
import {Feature} from "@/components/home/Feature"
import {FeatureIcon} from "@/components/home/FeatureIcon"
import {FeatureIconTitle} from "@/components/home/FeatureIconTitle"
import {Footer} from "@/components/home/Footer"
import {Hand} from "@/components/home/Hand"
import {HeroCode} from "@/components/home/HeroCode"
import {StyledLink} from "@/components/home/StyledLink"
import {VideoPlayer} from "@/components/home/VideoPlayer"
import Scrollbar from "@/components/Scrollbar"
import {SocialCards} from "@/components/SocialCards"
import {SponsorPack} from "@/components/SponsorPack"
import {getGitHubFile} from "@/utils/getGitHubFile"

const Home = ({randomContributors}) => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = navIsOpen ? "hidden" : "unset"
  }, [navIsOpen])

  return (
    <div>
      <SocialCards imageUrl="/social-homepage.png" />
      <div className="overflow-hidden">
        <div>
          <a name="top" aria-hidden>
            {null}
          </a>
          <div className="relative grid grid-cols-1 py-1 md:py-3 gap-y-24 xl:gap-y-44">
            <div className="z-30 text-white col-span-full">
              <Header
                className="px-6 mx-auto max-w-7xl"
                onNavToggle={(isOpen) => {
                  setNavIsOpen(isOpen)
                }}
              />
            </div>
            <div
              className={
                "absolute w-full h-full row-start-1 row-end-5 background-to-video rounded-bl-3xl xl:rounded-bl-4xl bg-gradient-to-b from-purple-mid to-purple-primary dark:from-black dark:to-purple-off-black " +
                (navIsOpen ? "z-20 fixed" : "-z-10")
              }
            ></div>
            <div className="relative -mt-6 text-white col-span-full">
              <div className="grid grid-cols-1 gap-10 px-6 mx-auto max-w-7xl lg:grid-cols-3 xl:grid-cols-2 md:gap-6 xl:-mt-10">
                <div className="z-10 space-y-10 lg:w-full">
                  <h2 className="-mt-8 font-medium text-5xl-squashed lg:-mt-0 font-secondary xl:text-6xl xl:font-medium dark:text-transparent bg-clip-text bg-gradient-to-r from-blue-gradient-white to-blue-gradient-light-blue">
                    Das Fullstack React Framework
                  </h2>
                  <p className="text-lg xl:text-xl xl:font-medium text-off-white lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue xl:w-4/5">
<<<<<<< HEAD
                    Blitz ist ein auf Ruby on Rails basierendes Framework. Es bauf auf Next.js und
                    bietet eine"Zero-API" Datenschicht Abstraktion die kein REST/GraphQL benötigt.
=======
                    Blitz is a batteries-included framework that&apos;s inspired by Ruby on Rails,
                    is built on Next.js, and features a &quot;Zero-API&quot; data layer abstraction
                    that eliminates the need for REST/GraphQL.
>>>>>>> c1b92d0818d4176f1f2357d015b0d0dec5b3e954
                  </p>
                  <div className="flex space-x-4">
                    <ButtonLink className="w-2/3 lg:w-auto rounded-tl-xl" href="/docs/get-started">
                      Probiere Blitz in weniger als 5 Min aus
                    </ButtonLink>
                    <ButtonLink
                      href="https://github.com/blitz-js/blitz"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      className="w-1/3 lg:w-auto rounded-r-xl"
                    >
                      GitHub
                    </ButtonLink>
                  </div>
                </div>
                <div className="relative lg:col-span-2 xl:col-span-1">
                  <Hand variant="hero-squiggle" className="lg:hidden -right-6 -top-36" />
                  <Hand variant="hero-rightarm" className="hidden lg:block -left-36 top-32" />
                  <Hand
                    variant="hero-righthand"
                    className="z-20 hidden lg:block -left-4"
                    style={{top: "15.2rem"}}
                  />
                  <Hand
                    variant="hero-leftarm"
                    className="hidden lg:block"
                    style={{top: "30rem", right: "-4.8rem"}}
                  />
                  <Hand
                    variant="hero-lefthand"
                    style={{top: "26.6rem", right: "-2.2em"}}
                    className="z-20 hidden lg:block"
                  />
                  <HeroCode className="z-10" />
                </div>
              </div>
            </div>
            <div className="z-10 px-6 mx-auto space-y-12 text-lg text-center text-white lg:space-y-0 lg:space-x-12 lg:flex lg:text-left max-w-7xl xl:font-mediumxl:text-xl">
              <FeatureIcon icon="layers">
                “Zero-API” Datenschicht erlaubt es{" "}
                <strong>Server Code direkt in deine Komponenten zu importieren</strong> anstatt API
                Endpunkte, Client-seitiges Empfangen der Daten und Caching von Hand hinzufügen zu
                müssen.
              </FeatureIcon>
              <FeatureIcon icon="lighteningBolt">
                Neue Blitz Apps haben schon die ganzen{" "}
                <strong>langweiligen Sachen fertig aufgestzt für dich!</strong> Zum Beispiel ESLint,
                Prettier, Jest, Registrierung, LogIn und Passwort zurücksetzen.
              </FeatureIcon>
              <FeatureIcon icon="graphUp">
                Beinhaltet <strong>hilfreiche Standardwerte und Konventionen</strong> für Dinge wie
                Routing, Dateistruktur und Authentifizierung, bleibt dabei aber dennoch extrem
                flexibel.
              </FeatureIcon>
            </div>
            <div className="grid w-full gap-5 px-6 mx-auto text-white xl:gap-10 max-w-7xl lg:grid-cols-2">
              <Link href="/#" passHref>
                <StyledLink className="flex items-center justify-between pb-1 text-lg border-b border-opacity-50 border-blue-mid lg:col-span-2 font-secondary xl:text-xl">
                  <span>Beliebte Videos</span>

                  {/*
                  <span className="flex items-center">
                    <span className="hidden mr-2 lg:block">View News</span>{" "}
                    <BsArrowRight size="1.5rem" />
                  </span>
                    */}
                </StyledLink>
              </Link>
              <VideoPlayer url="https://www.youtube.com/watch?v=UHyx8MtCVVk" />
              <VideoPlayer url="https://www.youtube.com/watch?v=fIexr5UZfhU" />
            </div>

            <div className="relative w-full mx-auto space-y-10 lg:space-y-20 xl:space-y-36 max-w-7xl">
              <h2 className="px-6 text-3xl font-semibold xl:text-5xl xl:w-1/2">
                Alles was du für "Production Apps" braucht
              </h2>
              <div className="w-full">
                <Hand
                  variant="concepts-right"
                  className="hidden lg:block lg:-top-24 lg:-right-96 lg:w-8/12 xl:-top-14"
                />
                <Scrollbar className="lg:hidden" thumbHeight="4px">
                  <div className="grid pb-4 ml-6 features-grid lg:gap-y-14">
                    <Feature title="Fullstack & Monolithisch">
                      <p>
                        Enthält alles von der Datenbank bis zu dem Frontend in einer einzigen App.
                        Nur eine Applikation zu entwickeln. Nur eine Sache zu implementieren.
                      </p>
                      <p>Und man kann zu einem Server oder Serverless deployen.</p>
                    </Feature>
                    <Feature title="API nicht notwendig">
                      <p>
                        Anstatt Daten aus dem Backend abzurufen, wird der Servercode direkt in die
                        Komponenten importiert. Zum Zeitpunkt der Erstellung wird dieser
                        Funktionsimport mit einer automatisch generierten HTTP-API ausgetauscht.
                      </p>
                      <p>
                        Die generierte API kann auch von Apps und Drittanbietern verwendet werden.
                      </p>
                    </Feature>
                    <Feature title="Lose Vorgaben">
                      <p>
                        Das Out-of-the-Box-Erlebnis führt dich auf einen Weg, der für die meisten
                        Anwendungen bestens geeignet ist. Aber wenn man sich abseits der
                        ausgetretenen Pfade begeben muss, ist man total frei, dies zu tun.
                      </p>
                      <p>
<<<<<<< HEAD
                        Und fast alles ist zusammenführbar. Zum Beispiel schreiben wir nicht vor,
                        welche Styling- oder Formularbibliotheken, man zu verwenden hat.
=======
                        And nearly everything is pluggable. For example, we don&apos;t mandate which
                        styling or form libraries you use.
>>>>>>> c1b92d0818d4176f1f2357d015b0d0dec5b3e954
                      </p>
                    </Feature>
                    <Feature title="Konvention vor Konfiguration">
                      <p>
                        Blitz erledigt die langweilige Einrichtung und Konfiguration für dich. Die
                        gemeinsame Projektstruktur und Architekturmuster erleichtern es von einer
                        Blitz App zu einer Anderen zu wechseln und sich sofort zu Hause zu fühlen.
                      </p>
                    </Feature>
                    <Feature title="Einfach um zu starten, einfach zu skalieren">
                      <p>
                        Einfach für Anfänger und einfach, vorhandene Next.js-Apps auf Blitz zu
                        migrieren.
                      </p>
                      <p>
                        Einfach in verschiedenen Formen zu skalieren: Codezeilen, Anzahl der
                        Personen, die an der Codebasis arbeiten und in der Codeausführung.
                      </p>
                    </Feature>
                    <Feature title="Stabilität">
                      <p>
<<<<<<< HEAD
                        Sobald wir Version 1.0 erreicht haben, werden wir zu einem stabilen,
                        vorhersehbaren Releasezyklus mit mehreren Kanälen wie Stable, LTS und Beta
                        wechseln.
=======
                        Once we reach version 1.0, we&apos;ll switch to a stable, predictable
                        release cycle with multiple channels like stable, LTS, and beta.
>>>>>>> c1b92d0818d4176f1f2357d015b0d0dec5b3e954
                      </p>
                      <p>Wir lassen uns diesbezüglich sehr von Ember inspirieren.</p>
                    </Feature>
                  </div>
                </Scrollbar>
              </div>
            </div>
            <div className="absolute w-full h-full row-start-6 lg:h-codesandbox lg:mt-80 row-end-10 rounded-bl-3xl rounded-tr-3xl lg:rounded-bl-4xl lg:rounded-tr-4xl bg-gradient-to-b from-purple-mid to-purple-primary dark:from-purple-off-black dark:to-black"></div>
            <div className="relative hidden w-full px-6 mx-auto space-y-10 max-w-7xl lg:block">
              <h3 className="pb-1 text-xs border-b border-opacity-50 font-secondary border-blue-mid">
                Blitz CodeSandbox Beispiel
              </h3>
              <div>
                <Hand variant="sandbox-right" style={{right: "-13.2rem", bottom: "-35rem"}} />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://codesandbox.io/s/flamboyant-meninsky-j63yq?file=/app/projects/mutations/createProject.ts"
                  className="h-sandbox xl:h-xl-sandbox block relative"
                >
                  <Image
                    src="/img/sandbox-pic.png"
                    layout="fill"
                    className="object-cover"
                    alt="Codesandbox placeholder"
                  />
                  <div className="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-70 flex items-center justify-center text-white text-6xl font-bold">
                    Klicke, um in einem neuen Tab zu öffnen
                  </div>
                </a>
              </div>
            </div>
            <div className="xl:hidden">{/*spacer div*/}</div>
            <div className="relative flex flex-col px-6 mx-auto text-white lg:flex-row max-w-7xl space-y-14 lg:space-x-24 lg:space-y-0 xl:space-x-40">
              <div className="space-y-14 lg:w-1/2">
                <h2 className="z-10 font-medium text-transparent text-5xl-squashed font-secondary bg-clip-text bg-gradient-to-r from-blue-gradient-white to-blue-gradient-light-blue xl:text-6xl">
                  Die Blitz Community - Unser wichtigster Aspekt
                </h2>
                <div className="z-10 grid grid-cols-5 gap-1 md:grid-cols-6 lg:grid-cols-5 grid-rows-8 overflow-clip">
                  {randomContributors.map((contributor, i) => (
                    <a
                      href={`https://github.com/${contributor.login}`}
                      key={i}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        layout="intrinsic"
                        width="100%"
                        height="100%"
                        src={contributor.avatar_url}
                        alt={contributor.name}
                        title={contributor.name}
                        className="w-full"
                      />
                    </a>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 text-lg lg:relative gap-14 md:grid-cols-2 lg:row-span-2 lg:grid-cols-1 xl:text-xl lg:w-1/2">
                <Hand variant="community-squiggle" className="xl:hidden -right-18" />
                <div className="z-10 flex flex-col justify-between space-y-6 lg:justify-end">
                  <div className="flex flex-col space-y-6 lg:h-auto lg:text-transparent text-off-white">
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
                      Unsere Community ist freundlich, sicher, divers, inklusiv, und spaßig! LGBTQ+,
                      Frauen und Minderheiten sind besonders willkommen.
                    </p>
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
                      Bitte lies unseren{" "}
                      <Link href="/docs/code-of-conduct" passHref>
                        <StyledLink className="underline text-off-white hover:text-blue-light">
                          Verhaltenskodex
                        </StyledLink>
                      </Link>
                      .
                    </p>
                  </div>
                  <ButtonLink
                    href="https://discord.blitzjs.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-bl-none rounded-xl lg:w-max"
                  >
                    Trete unserer Discord Community bei
                  </ButtonLink>
                </div>
                <div className="z-10 flex flex-col justify-between space-y-6 lg:justify-start">
                  <div className="flex flex-col space-y-6 lg:h-auto lg:text-transparent text-off-white lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue">
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
                      Wir sind hier alle zusammen dabei, von jung bis alt. Wir sind uns alle
                      ähnlicher, als wir anders sind. Wir lieben es zusammenzuarbeiten.
                    </p>
                    <p className="lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue lg:bg-clip-text">
<<<<<<< HEAD
                      Wir laden dich ein, Blitz zum besten Framework zu machen, das wir je hatten!
=======
                      We invite you to help make Blitz the best framework we&apos;ve ever had!
>>>>>>> c1b92d0818d4176f1f2357d015b0d0dec5b3e954
                    </p>
                  </div>
                  <Link href="/docs/contributing" passHref>
                    <ButtonLink className="rounded-bl-none rounded-xl lg:w-max">
                      Lerne wie du unterstützen kannst.
                    </ButtonLink>
                  </Link>
                </div>
              </div>
            </div>
            <div className="z-10 w-full mx-auto text-white space-y-7 max-w-7xl">
              <h2 className="px-6 text-2xl font-medium text-white font-secondary lg:text-3xl">
                Architektur-Diagramm
              </h2>
              <div className="w-full">
                <Scrollbar className="lg:hidden" thumbHeight="4px" thumbColor="white">
                  <div className="px-6 architecture-diagram" style={{paddingBottom: "2px"}}>
                    <img src="img/architecture.svg" alt="Architecture diagram" />
                  </div>
                </Scrollbar>
              </div>
            </div>
            <div className="relative col-span-full">
              <Hand variant="features-squiggle" className="-right-6 -top-10 xl:hidden -z-10" />
            </div>
            <div className="absolute w-full h-full row-start-8 row-end-19 xl:row-end-19 -z-20 bg-purple-mid dark:bg-purple-off-black"></div>
            <div className="relative px-6 mx-auto my-6 space-y-12 text-white xl:my-0 max-w-7xl xl:space-y-36">
              <h2 className="text-3xl font-semibold lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue xl:text-5xl">
                Alles End-to-End, von <br className="hidden xl:block" />
                der Datenbank bis zum Frontend
              </h2>
              <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
                <Hand
                  variant="features-right"
                  className="hidden xl:block xl:-top-40 xl:-right-52"
                />
                <FeatureIconTitle icon="thumbsUp" title="Authentifizierung & Autorisierung">
                  Die integrierte Authentifizierung ist sehr einfach und sehr sicher. Funktioniert
                  mit jedem Identity-Provider, einschließlich einer selbst gehosteten "Benutzername
                  und Passwort" Lösung, sowie Drittanbieter wie Auth0.
                </FeatureIconTitle>
                <FeatureIconTitle icon="database" title="Databankagnostisch">
                  Du kannst jede gewünschte Datenbank verwenden. Prisma 2 ist jedoch der
                  Standard-Datenbankclient Du kannst diesen jedoch entfernen und andere Datenbanken
                  wie Fauna oder DynamoDB verwenden.
                </FeatureIconTitle>
                <FeatureIconTitle icon="fileCode" title="Rezepte">
                  Ein Befehl zum Installieren von Code und / oder Paketen in einer Blitz-App.
                  Beispiele: `blitz install tailwind` oder `blitz install chakra-ui`. Rezepte können
                  von jedem erstellt werden.
                </FeatureIconTitle>
                <FeatureIconTitle icon="plugin" title="Backend Architektur">
                  Blitz ist für serverintensive Aufgaben wie das Senden von E-Mails, Cron-Jobs,
                  Hintergrundverarbeitung, Generieren von PDFs usw. vorbereitet. Derzeit haben wir
                  nur wenig Backend Anleitungen, arbeiten aber daran, mehr Muster zu entwickeln und
                  eine bessere Dokumentation bereitzustellen.
                </FeatureIconTitle>
                <FeatureIconTitle icon="typescript" title="Erstklassiger Typescript Support">
                  Blitz wurde mit Typescript erstellt und die Blitz-Datenschicht ist durchgängig
                  typsicher. Alle Typen sind vollständig statisch, ohne dass ein separater Typ
                  Generierungsprozess erforderlich ist!
                </FeatureIconTitle>
                <FeatureIconTitle icon="scaffolding" title="Code Scaffolding">
                  Es ist noch früh, aber das Blitz-Code-Scaffolding wird extrem leistungsfähig sein.
                  Ideal sowohl für das Prototyping als auch für die Erstellung realer Apps. Man wird
                  jede Vorlage überschreiben und für das Projekt anpassen können.
                </FeatureIconTitle>
              </div>
            </div>
            <div className="absolute w-full h-full bg-white dark:bg-black row-start-11 row-end-13 rounded-tr-3xl xl:rounded-tr-4xl -z-10" />
            <div className="relative col-span-full">
              <Hand
                variant="sponsors-squiggle"
                className="-right-24 xl:hidden"
                style={{top: "-5.3rem"}}
              />
            </div>
            <div className="px-6 mx-auto text-center max-w-7xl ">
              <div className="space-y-7 xl:space-y-10">
                <h2 className="relative text-3xl font-semibold xl:text-5xl">
                  <Hand
                    variant="sponsors-left"
                    className="hidden xl:block -left-80 pointer-events-none"
                    style={{top: "-18.05rem"}}
                  />
                  Unsere Sponsoren
                </h2>
                <p className="text-lg xl:text-xl">
                  Deine finanzielle Unterstützung trägt dazu bei, dass Blitz weiterentwickelt und
                  <br className="hidden lg:block" />
                  gepflegt wird! Wir bieten monatliche Sponsoring-Optionen ab $5 / Monat an.{" "}
                </p>
                <div>
                  <ButtonLink
                    variant="solid-dark"
                    href="https://github.com/sponsors/blitz-js"
                    className="mx-auto rounded-bl-none rounded-xl lg:w-max md:w-1/3 lg:m-auto lg:mt-4 xl:mt-18"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Unterstütze Blitz
                  </ButtonLink>
                </div>
              </div>

              <div className="xl:max-w-2xl mx-auto">
                <SponsorPack />
              </div>
            </div>

            <div className="w-full px-6 mx-auto space-y-12 text-white lg:space-x-4 lg:space-y-0 lg:flex lg:items-center max-w-7xl">
              <h2 className="pr-2 text-3xl font-semibold lg:w-full lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-blue-gradient-white lg:to-blue-gradient-light-blue xl:text-5xl">
                Was kommt als Nächstes?
              </h2>
              <div className="flex flex-col w-full space-y-4 md:flex-row md:space-y-0 md:space-x-2">
                <ButtonLink
                  href="/docs/get-started"
                  className="w-full text-lg py-18 rounded-t-2xl md:rounded-tr-none"
                >
                  Blitz in unter 5 Minuten ausprobieren
                </ButtonLink>
                <ButtonLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.blitzjs.com"
                  className="w-full text-lg py-18 rounded-br-2xl md:rounded-tr-2xl"
                >
                  Trete Discord bei
                </ButtonLink>
              </div>
            </div>
            <Footer className="dark:bg-purple-off-black bg-purple-mid text-white" />
          </div>
        </div>
      </div>
    </div>
  )
}

const getStaticProps = async () => {
  const MAX_CONTRIBUTORS = 30

  const octokit = new Octokit({
    auth: process.env.GITHUB_AUTH_TOKEN,
  })

  const {contributors} = await getGitHubFile({
    octokit,
    owner: "blitz-js",
    repo: "blitz",
    path: ".all-contributorsrc",
    json: true,
  })

  let randomIndexes = []
  while (randomIndexes.length < MAX_CONTRIBUTORS) {
    var r = Math.floor(Math.random() * contributors.length)
    if (randomIndexes.indexOf(r) === -1) randomIndexes.push(r)
  }

  let randomContributors = randomIndexes.map((i) => contributors[i])

  return {
    props: {randomContributors},
    revalidate: 60 * 30, // 30 minutes
  }
}

Home.meta = {
    title: "Blitz.js - Das Fullstack React Framework",
    description: `Blitz ist ein hyper-productive Fullstack React framework, welches auf Next.js aufbaut und eine "Zero-API" Datenschicht bietet.`,
}

export default Home
export {getStaticProps}
