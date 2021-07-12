import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/libs/aluraKutCommons'
import ProfileRelationsBoxWrapper from '../src/components/ProfileRelations';

function ProfileSideBar(propriedades){
  console.log(propriedades)
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} alt="Foto de Perfil" style={{ borderRadius: "8px" }}/>
    </Box>
  )
}

export default function Home() {
  const pessoasFavoritas = [ 
    'henrithanN', 'CabecaDeCenoura', 'GuilOliveira',
    'miolivc', 'gabrielDuete', 'omariosouto'
  ];
  const usuario = 'henrithanN';

  return (
    <>
      <AlurakutMenu/>
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
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Amigos ({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((item) => {
                return (
                  <li>
                    <a href={`/users/${item}`} key={item}>
                      <img src={`https://github.com/${item}.png`} />
                      <span>{ item }</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>
            Comunidades
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
