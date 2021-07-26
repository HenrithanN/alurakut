import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/libs/aluraKutCommons'
import ProfileRelationsBoxWrapper from '../src/components/ProfileRelations';

function ProfileSideBar(propriedades){
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} alt="Foto de Perfil" style={{ borderRadius: "8px" }}/>
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

function ProfileBox(propriedades){
  return (
    <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              {propriedades.title} ({propriedades.items.length})
            </h2>
            <ul>
              {propriedades.items.map((item) => {
                return (
                  <li key={item?.id}>
                    <a href={`/users/${item?.title}`}>
                      <img src={item?.image} />
                      <span>{ item.title }</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
  )
}

export default function Home() {
  
  React.useEffect(()=>{
    //API Github
    fetch('https://api.github.com/users/henrithanN/followers')
      .then((res)=>{
        return res.json();
      })
      .then((res)=>{
        
        return setSeguidores(res);
      })

    //API GraphQL
    fetch('https://graphql.datocms.com/', {
      method:'POST',
      headers:{
        'Authorization':'fe8dd1b981f83ae58d569edf3f33ef',
        'Content-Type':'application/json',
        'Accept':'application/json'
      }
    })
  })
  const [seguidores, setSeguidores] = React.useState([]);
  const pessoasFavoritas = ['henrithanN', 'CabecaDeCenoura', 'GuilOliveira','miolivc', 'gabrielDuete', 'omariosouto'];
  const [comunidades, setComunidades] = React.useState([{id:'123', title: 'Eu odeio Acordar Cedo', image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'}]);;
  const usuario = 'henrithanN';

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
                image:  dadosForm.get('image')
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
          <ProfileRelationsBoxWrapper >
            <h2 className="smallTitle">
              Amigos ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((item) => {
                return (
                  <li key={item}>
                    <a href={`/users/${item}`}>
                      <img src={`https://github.com/${item}.png`} />
                      <span>{ item }</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileBox title="Comunidades" items={comunidades}/>
          <ProfileBox title="Seguidores" items={seguidores}/>

        </div>
      </MainGrid>
    </>
  )
}
