import { useDispatch, useSelector } from "react-redux"
import { FavoritesContainer, Text } from "./Favorites.styled"
import { selectErrorFav, selectFavorites, selectIsLoadingFav } from "../../redux/selectors"
import { CardList } from "components/CardList/CardList"
import { useEffect } from "react"
import { fetchFavorites } from "../../redux/favorites/operations"
import { MyLoader } from "components/MyLoader/MyLoader"

const Favorites = ({ authUser }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
const isLoadingFav = useSelector(selectIsLoadingFav);
const errorFav = useSelector(selectErrorFav);

  useEffect(() => {
    if (authUser && authUser.uid) {
    dispatch(fetchFavorites(authUser.uid));
  }
}, [dispatch, authUser]);

return (
    <FavoritesContainer>
          {isLoadingFav && !errorFav && <MyLoader/>}
    {favorites.length > 0 ? (
        <CardList teachers={favorites} authUser={authUser} />
      ) : (
        <Text>Favorite teachers haven't been selected yet</Text>
      )}
    </FavoritesContainer>
)
}

export default Favorites 


