import { useSelector } from "react-redux"
import { FavoritesContainer } from "./Favorites.styled"
import { selectFavorites } from "../../redux/teachers/selectors"
import { CardList } from "components/CardList/CardList"

const Favorites = ({authUser}) => {

const favorites = useSelector(selectFavorites)

return (
    <FavoritesContainer>
       <CardList teachers = {favorites} authUser={authUser}/>
    </FavoritesContainer>
)
}

export default Favorites 