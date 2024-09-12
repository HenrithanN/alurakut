import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/libs/aluraKutCommons'
import ProfileRelationsBoxWrapper from '../src/components/ProfileRelations';
import { useConstCallback } from 'powerhooks'

function ProfileSideBar({ githubUser }){

  return (
    <Box>
      <img src={`https://github.com/${githubUser}.png`} alt="Foto de Perfil" style={{ borderRadius: "8px" }}/>
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${githubUser}`}>
          @{githubUser}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

function ProfileBox({ title, items }){
  return (
    <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              {title} ({items.length})
            </h2>
            <ul>
              {items.map((item) => {
                return (
                  <li key={item?.id}>
                    <a href={`/users/${item?.title}`}>
                      <img src={item?.avatar_url} />
                      <span>{ item.title }</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
  )
}
function FriendsBox({ title, items }){
  return (
    <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              { title } ({items.length})
            </h2>
            <ul>
              {items.map((item) => {
                return (
                  <li key={item?.id}>
                    <a href={`/users/${item?.login}`}>
                      <img src={item?.avatar_url} />
                      <span>{ item.login }</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
  )
}

export default function Home() {
  const [seguidores, setSeguidores] = React.useState([]);
  const [comunidades, setComunidades] = React.useState([{id:'123', title: 'Eu odeio Acordar Cedo', avatar_url: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'}]);
  const usuario = 'henrithanN';

  const BASE_URL = `https://api.github.com/users/${usuario}`
  
  const fetchFollowers = useConstCallback(async () => {
    const data = await fetch(`${BASE_URL}/followers`)
    .then((res)=>{
      return res.json();
    })
    .then((res)=>{
      
      return (res);
    })

    setSeguidores(data)
    return null
  })

  const fetchFavoritePeople = useConstCallback(async () => {
    const data = await fetch(`${BASE_URL}/following`)
    .then((res)=>{
      return res.json();
    })
    .then((res)=>{
      
      return (res);
    })

    setPessoasFavoritas(data)
    return null
  })
  React.useEffect(()=>{
    fetchFollowers()
    fetchFavoritePeople()

    //API GraphQL
    // fetch('https://graphql.datocms.com/', {
    //   method:'POST',
    //   headers:{
    //     'Authorization':'fe8dd1b981f83ae58d569edf3f33ef',
    //     'Content-Type':'application/json',
    //     'Accept':'application/json'
    //   }
    // })
  }, [fetchFollowers, fetchFavoritePeople])
  const [pessoasFavoritas, setPessoasFavoritas] = React.useState([]);

  return (
    <>
      <AlurakutMenu githubUser={usuario} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={usuario}/>
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem Vindo(a)
            </h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O Que você deseja Fazer ?</h2>
            <form onSubmit={function handleCriarComuniade(event){
              event.preventDefault();
              const dadosForm = new FormData(event.target);
              const novaComunidade = {
                id: new Date().toISOString(),
                title:  dadosForm.get('title'),
                avatar_url:  dadosForm.get('image')
              }

              const addComunidade = [...comunidades, novaComunidade]
              setComunidades(addComunidade);
            }}>
              <div>
                <input name="title" type="text" placeholder="Escolha um nome pra sua comunidade!" aria-label="Escolha um nome pra sua comunidade!"/>
              </div>
              <div>
                <input name="image" type="text" placeholder="Coloque uma URL para usarmos de capa!" aria-label="Coloque uma URL para usarmos de capa!"/>
              </div>
              <button>
                Criar Comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          

          <ProfileBox title="Amigos" items={pessoasFavoritas}/>
          <FriendsBox title="Comunidades" items={comunidades}/>
          <FriendsBox title="Seguidores" items={seguidores}/>

        </div>
      </MainGrid>
    </>
  )
}
