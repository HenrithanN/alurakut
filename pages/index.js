import React from 'react';
import { useEffect, useState} from 'react'
import MainGrid from '../src/styledComponents/MainGrid'
import Box from '../src/styledComponents/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/libs/aluraKutCommons'
import { useConstCallback } from 'powerhooks'
import FriendsBox  from '../src/components/FriendsBox'
import ProfileBox  from '../src/components/ProfileBox'
import ProfileSideBar  from '../src/components/ProfileSideBar'

export default function Home() {
  const [seguidores, setSeguidores] = useState([]);
  const [comunidades, setComunidades] = useState([{id:'123', title: 'Eu odeio Acordar Cedo', avatar_url: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'}]);
  const [pessoasFavoritas, setPessoasFavoritas] = useState([]);

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

  useEffect(()=>{
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
