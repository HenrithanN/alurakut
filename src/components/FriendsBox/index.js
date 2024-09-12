import ProfileRelationsBoxWrapper from '../../styledComponents/ProfileRelations';
import { CommonContext } from '../../context/CommonContext'
import { useContext } from 'react'

const FriendsBox = ({ title, items }) =>{
    const { selectedTheme } = useContext(CommonContext)

    return (
      <ProfileRelationsBoxWrapper theme={selectedTheme}>
        <h2 className="smallTitle">
        { title } ({items.length})
        </h2>
        <ul>
        {items.map((item) => (
        <li key={item?.id}>
            <a href={`/users/${item?.login}`}>
            <img src={item?.avatar_url} />
            <span>{ item.login ?? item.title }</span>
            </a>
        </li>
        ))}
        </ul>
        </ProfileRelationsBoxWrapper>
    )
}

export default FriendsBox