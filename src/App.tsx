import WeightCalculator from "./components/WeightCalculator/WeightCalculator";
import SpaceMissionForm from "./components/SpaceMissionForm/SpaceMissionForm";
import EffectExample from "./components/EffectExample/EffectExample";
import RandomJoke from "./components/RandomJoke/RandomJoke";
import AgeByName from "./components/AgeByName/AgeByName";
import GenderByName from "./components/GenderByName/GenderByName";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFount/NotFound";
import MainLayout from "./layouts/MainLayout";
import { ROUTES } from "./constants/routes";
import Cohort68 from "./pages/Cohort68/Cohort68";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import AccountLayout from "./layouts/AccountLayout";
import AccountSettings from "./pages/AccountSettings/AccountSettings";
import Account from "./pages/Account/Account";
import AccountUser from "./pages/AccountUser/AccountUser";
import Country from "./components/Country/Country";
import ProductsList from "./pages/ProductsList/ProductsList";
import ProductPage from "./pages/ProductPage/ProductPage";
import UserPage from "./pages/UserPage/UserPage";
import CatFacts from "./pages/CatFacts/CatFacts";
import Counter from "./components/counter/Counter";
import Parent from "./pages/Parent/Parent";
import SigninPage from "./pages/SigninPage/SigninPage";
import Profile from "./pages/Profile/Profile";
import Categories from "./pages/Categories/Categories";
import CreateCategory from "./pages/CreateCatigory/CreateCategory";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={ROUTES.GENDER_BY_NAME} element={<GenderByName />} />
            <Route path={ROUTES.SPACE_MISSION} element={<SpaceMissionForm />} />
            <Route path={ROUTES.AGE_BY_NAME} element={<AgeByName />} />
            <Route path={ROUTES.COUNTER} element={<Counter />} />
            <Route path={ROUTES.RANDOM_JOKE} element={<RandomJoke />} />
            <Route path={ROUTES.EFFECT_EXAMPLE} element={<EffectExample />} />
            <Route
              path={ROUTES.WEIGHT_CALCULATOR}
              element={<WeightCalculator />}
            />
            <Route path={ROUTES.COHORT_68} element={<Cohort68 />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />

            <Route path="*" element={<NotFound />} />
            <Route path="/countries/:id/:slug" element={<Country />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/products/:id" element={<ProductPage />} />
            {/* <Route path="/users" element={<Users />} /> */}
            <Route path="/users/:id" element={<UserPage />} />
            <Route path="/cats" element={<CatFacts />} />
            <Route path="/parent" element={<Parent />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/create" element={<CreateCategory />} />

          </Route>
          <Route path={ROUTES.ACCOUNT} element={<AccountLayout />}>
            <Route index element={<Account />} />
            <Route
              path={ROUTES.ACCOUNT_SETTINGS}
              element={<AccountSettings />}
            />
            <Route
              path={ROUTES.ACCOUNT_USER}
              element={<AccountUser />}
            />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

//Деструктуризация объекта
