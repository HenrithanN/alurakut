import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import NextLink from 'next/link';
import { CommonContext } from '../context/CommonContext'
import { Switch } from '@mui/material'
import { styled as styledMUI } from '@mui/material/styles';


const BASE_URL = 'http://alurakut.vercel.app/';
const v = '1';


function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      <a {...props}>
        {children}
      </a>
    </NextLink>
  )
}

const MaterialUISwitch = styledMUI(Switch)(({ theme }) => ({
  width: 60,
  height: 24,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(36px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        ...theme.applyStyles('dark', {
          backgroundColor: '#8796A5',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 22,
    height: 22,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#003892',
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
    ...theme.applyStyles('dark', {
      backgroundColor: '#8796A5',
    }),
  },
}));
// ================================================================================================================
// Menu
// ================================================================================================================
export function AlurakutMenu({ githubUser }) {
  const { selectedTheme, changeTheme } = useContext(CommonContext)
  

  const [isMenuOpen, setMenuState] = React.useState(false);
  return (
    <AlurakutMenu.Wrapper isMenuOpen={isMenuOpen} theme={selectedTheme}>
      <div className="container">
        <AlurakutMenu.Logo src={`${BASE_URL}/logo.svg`} />
        <nav style={{ flex: 1 }}>
          {[{ name: 'Inicio', slug: '/'}, {name: 'Amigos', slug: '/amigos'}, {name: 'Comunidades', slug: '/comunidades'}].map((menuItem) => (
            <Link key={`key__${menuItem.name.toLocaleLowerCase()}`} href={`${menuItem.slug.toLocaleLowerCase()}`}>
              {menuItem.name}
            </Link>
          ))}
        </nav>

        <nav>
          <a href={`/logout`}>
            Sair
          </a>
          <div>
            <input style={{ backgroundColor: 'inherit', border: '1px solid white' }} placeholder="Pesquisar no Orkut" />
          </div>

        </nav>

        <nav>

        </nav>
        <button onClick={() => setMenuState(!isMenuOpen)}>
          {isMenuOpen && <img src={`${BASE_URL}/icons/menu-open.svg?v=${v}`} />}
          {!isMenuOpen && <img src={`${BASE_URL}/icons/menu-closed.svg?v=${v}`} />}
        </button>
      </div>
      <AlurakutMenuProfileSidebar githubUser={githubUser} />
    </AlurakutMenu.Wrapper>
  )
}
AlurakutMenu.Wrapper = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.nav ? theme.nav.bgColor : 'none'};
  .alurakutMenuProfileSidebar {
    background: #ffffff;
    position: absolute;
    height: 1080px;
    z-index: 100;
    padding: 46px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 48px;
    transition: .3s;
    pointer-events: ${({ isMenuOpen }) => isMenuOpen ? 'all' : 'none'};
    opacity: ${({ isMenuOpen }) => isMenuOpen ? '10' : '0'};
    transform: ${({ isMenuOpen }) => isMenuOpen ? 'translateY(0)' : 'translateY(calc(-100% - 48px))'};
    @media(min-width: 860px) {
      display: none;
    }
    > div {
      max-width: 400px;
      margin: auto;
      max-height:800px;
    }
    a {
      font-size: 18px;
    }
    .boxLink {
      font-size: 18px;
      color: #2E7BB4;
      -webkit-text-decoration: none;
      text-decoration: none;
      font-weight: 800;
    }
    hr {
      margin-top: 12px;
      margin-bottom: 8px;
      border-color: transparent;
      border-bottom-color: ${({ theme }) => theme.nav ? theme.nav.bgColor : 'none'};
    }
  }
  .container {
    background-color: ${({ theme }) => theme.nav ? theme.nav.bgColor : 'none'};
    padding: 7px 16px;
    max-width: 1110px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    position: relative;
    z-index: 101;
    @media(min-width: 860px) {
      justify-content: flex-start;
    }
    button {
      border: 0;
      background: transparent;
      align-self: center;
      display: inline-block;
      @media(min-width: 860px) {
        display: none;
      }
    }
    nav {
      display: none;
      @media(min-width: 860px) {
        display: flex;
      }
      a {
        font-size: 12px;
        color: ${({ theme }) => theme.nav ? theme.nav.primary : 'none'};
        padding: 10px 16px;
        position: relative;
        text-decoration: none;
        &:after {
          content: " ";
          background-color: ${({ theme }) => theme.nav ? theme.nav.primary : 'none'};
          display: block;
          position: absolute;
          width: 1px;
          height: 12px;
          margin: auto;
          left: 0;
          top: 0;
          bottom: 0;
        }
      }
    }
    input {
      color: #ffffff;
      background: #616161;
      padding: 10px 42px;
      border: 0;
      background-image: url(${`${BASE_URL}/icons/search.svg`});
      background-position: 15px center;
      background-repeat: no-repeat;
      border-radius: 1000px;
      font-size: 12px;
      ::placeholder {
        color: #ffffff;
        opacity: 1;
      }
    } 
  }
`;
AlurakutMenu.Logo = styled.img`
  background-color: #ffffff;
  padding: 9px 14px;
  border-radius: 1000px;
  height: 34px;
`;

function AlurakutMenuProfileSidebar({ githubUser }) {
  return (
    <div className="alurakutMenuProfileSidebar">
      <div>
        <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px' }} />
        <hr />
        <p>
          <a className="boxLink" href={`/user/${githubUser}`}>
            @{githubUser}
          </a>
        </p>
        <hr />

        <AlurakutProfileSidebarMenuDefault />
      </div>
    </div>
  )
}

// ================================================================================================================
// AlurakutProfileSidebarMenuDefault
// ================================================================================================================
export function AlurakutProfileSidebarMenuDefault() {
  const { selectedTheme, changeTheme } = useContext(CommonContext)

  return (
    <AlurakutProfileSidebarMenuDefault.Wrapper theme={selectedTheme}>
      <nav>
        <a href="/">
          <img src={`${BASE_URL}/icons/user.svg`} />
            Perfil
          </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/book.svg`} />
            Recados
          </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/camera.svg`} />
            Fotos
          </a>
        <a href="/">
          <img src={`${BASE_URL}/icons/sun.svg`} />
            Depoimentos
          </a>
      </nav>
      <hr />
      <nav>
        <a href="/">
          <img src={`${BASE_URL}/icons/plus.svg`} />
            GitHub Trends
          </a>
        <a href="/logout">
          <img src={`${BASE_URL}//icons/logout.svg`} />
            Sair
          </a>
      </nav>
      <hr />
      <nav>
          <a style={{ textWrap: 'nowrap'}}>

          Modo escuro: 
          <MaterialUISwitch onClick={changeTheme}/>
          </a>

      </nav>
    </AlurakutProfileSidebarMenuDefault.Wrapper>
  )
}
AlurakutProfileSidebarMenuDefault.Wrapper = styled.div`
  a {
    font-size: 12px;
    color: ${({ theme }) => theme.body ? theme.body.primary : 'none'};
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    @media(max-width: 860px) {
          color: #000000;
    }
    img {
      width: 16px;
      height: 16px;
      margin-right: 5px; 
    }
  }
`;

// ================================================================================================================
// OrkutNostalgicIconSet
// ================================================================================================================
export function OrkutNostalgicIconSet(props) {
  const { selectedTheme } = useContext(CommonContext)

  return (
    <OrkutNostalgicIconSet.List theme={selectedTheme}>
      {[
        { name: 'Recados', slug: 'recados', icon: 'book' },
        { name: 'Fotos', slug: 'fotos', icon: 'camera' },
        { name: 'Videos', slug: 'videos', icon: 'video-camera' },
        { name: 'Fãs', slug: 'fas', icon: 'star' },
        { name: 'Mensagens', slug: 'mensagens', icon: 'email' },
      ].map(({ name, slug, icon }) => (
        <li key={`orkut__icon_set__${slug}`}>
          <span style={{ gridArea: 'title' }} className="OrkutNostalgicIconSet__title">
            {name}
          </span>
          <span className="OrkutNostalgicIconSet__number" style={{ gridArea: 'number' }}>
            <img key={`orkut__icon_set__${slug}_img`} className="OrkutNostalgicIconSet__iconSample" src={`https://alurakut.vercel.app/icons/${icon}.svg`} />
            {props[slug] ? props[slug] : 0}
          </span>
        </li>
      ))}
      {[
        { name: 'Confiável', slug: 'confiavel', icon: 'smile' },
        { name: 'Legal', slug: 'legal', icon: 'cool' },
        { name: 'Sexy', slug: 'sexy', icon: 'heart' },
      ].map(({ name, slug, icon }) => {
        const total = props[slug] ? props[slug] : 2;
        return (
          <li key={`orkut__icon_set__${slug}`}>
            <span className="OrkutNostalgicIconSet__title">
              {name}
            </span>
            <span className="OrkutNostalgicIconSet__iconComplex" className="OrkutNostalgicIconSet__number" style={{ gridArea: 'number' }}>
              {[0, 1, 2].map((_, index) => {
                const isHeartActive = index <= (total - 1);
                return <img key={`orkut__icon_set__${slug}_img_${index}`} src={`https://alurakut.vercel.app/icons/${icon}.svg`} style={{ marginRight: '2px', opacity: isHeartActive ? 1 : '0.5' }} />
              })}
            </span>
          </li>
        );
      })}
    </OrkutNostalgicIconSet.List>
  )
}
OrkutNostalgicIconSet.List = styled.ul`
  margin-top: 32px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  li {
    font-size: 12px;
    color: ${({ theme }) => theme.body ? theme.body.primary : 'none'};
    display: grid;
    grid-template-areas:
      "title title"
      "number number"; 
    
    &:not(:last-child) {
      margin-right: 5px;
    }
    .OrkutNostalgicIconSet__title {
      display: block;
      font-style: italic; 
    }
    .OrkutNostalgicIconSet__number {
      min-width: 15px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      .OrkutNostalgicIconSet__iconSample {
        margin-right: 7px;
      }
    }
  }
`;

// ================================================================================================================
// Login Page
// ================================================================================================================
const AlurakutLoginScreen = css`
  :root {
    --backgroundPrimary: #D9E6F6;
    --backgroundSecondary: #F1F9FE;
    --backgroundTertiary: #FFFFFF;
    --backgroundQuarternary: #BBCDE8;
    --colorPrimary: #2E7BB4;
    --colorSecondary: #388BB0;
    --colorTertiary: #2F4A71;
    --colorQuarternary: #D81D99;
    --textPrimaryColor: #333333;
    --textSecondaryColor: #FFFFFF;
    --textTertiaryColor: #5A5A5A;
    --textQuarternaryColor: #C5C6CA;
    --commonRadius: 8px;
  }
  .loginScreen {
    padding: 16px;
    max-width: 1110px;
    display: grid;
    --gap: 12px;
    --gutter: 16px;
    grid-gap: var(--gap);
    grid-template-areas: 
      "logoArea"
      "formArea"
      "footerArea";
    @media(min-width: 860px) {
      grid-template-columns: 2fr 1fr;
      grid-template-areas: 
              "logoArea formArea"
              "logoArea formArea"
              "footerArea footerArea";
    }
    .logoArea {
      grid-area: logoArea;
      background-color: var(--backgroundTertiary);
      border-radius: var(--commonRadius);
      padding: var(--gutter);
      text-align: center;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      min-height: 263px;
      @media(min-width: 860px) {
        min-height: 368px;
      }
      p {
        font-size: 12px;
        line-height: 1.2;
        &:not(:last-child) {
          margin-bottom: 12px;
        }
        strong {
          color: var(--colorQuarternary);
        }
      }
      img {
        max-height: 45px;
        margin-bottom: 36px;
      }
    }
    .formArea {
      grid-area: formArea;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      .box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: var(--gutter);
        padding-left: 50px;
        padding-right: 50px;
        background-color: var(--backgroundSecondary);
        border-radius: var(--commonRadius);
        flex: 1;
        &:not(:last-child) {
          margin-bottom: var(--gap);
        }
        &:first-child {
          min-height: 224px;
          @media(min-width: 860px) {
            min-height: 282px;
          }
        }
        p {
          font-size: 14px;
        }
        a {
          text-decoration: none;
          color: var(--colorPrimary);
        }
        input {
          width: 100%;
          display: block;
          border: 1px solid var(--textQuarternaryColor);
          padding: 12px;
          background-color: var(--backgroundTertiary);
          border-radius: var(--commonRadius);
          margin-top: 24px;
          margin-bottom: 16px;
        }
        button {
          width: 100%;
          display: block;
          border: 0;
          padding: 12px;
          border-radius: var(--commonRadius);
          background-color: var(--colorPrimary);
          color: var(--textSecondaryColor);
        }
      }
    }
    .footerArea {
      grid-area: footerArea;
      background-color: var(--backgroundQuarternary);
      border-radius: var(--commonRadius);
      padding: 8px;
      p {
        font-size: 12px;
        text-align: center;
        a {
          text-decoration: none;
          color: var(--colorPrimary);
        }
      }
    }
  }
`;

// ================================================================================================================
// Reset Styles
// ================================================================================================================
export const AlurakutStyles = css`
  *::-webkit-scrollbar {
    width: 8px;
  }
  *::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  *::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 10px;
  }
  *::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }
  a,
  button {
    cursor: pointer;
    transition: .3s;
    outline: 0;
    &:hover,
    &:focus {
      opacity: .8;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: .5;
    }
  }
  input {
    transition: .3s;
    outline: 0;
    &:disabled {
      cursor: not-allowed;
      opacity: .5;
    }
    &:hover,
    &:focus {
      box-shadow: 0px 0px 5px #33333357;
    }
  }
  ${AlurakutLoginScreen}
`;