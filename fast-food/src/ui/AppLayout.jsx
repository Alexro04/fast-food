import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loading from "./Loading";

export default function AppLayout() {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  
  return (
    <>
      { isLoading && <Loading />}
      <Header />
      <main>
        <Outlet />
      </main>
      
    </>
  )
}
