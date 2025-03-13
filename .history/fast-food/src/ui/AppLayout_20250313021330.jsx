import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Loading from "./Loading";
import Footer from "./Footer";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loading />}
      <Header />
      <main className="overflow-y-scroll text-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
