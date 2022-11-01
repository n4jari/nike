import {
  Banner,
  Basketball,
  Footer,
  GearUp,
  Header,
  Latest,
  ListBottom,
  MoreItems,
  Nav,
  Trend,
} from "./Components";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Banner />
      <Trend />
      <Basketball />
      <GearUp />
      <Latest />
      <MoreItems />
      <ListBottom />
      <Footer />
    </div>
  );
};

export default App;
