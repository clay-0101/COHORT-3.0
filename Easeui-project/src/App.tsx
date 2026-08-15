import AppRouter from "./router/AppRouter";

type Props = {};

function App({}: Props) {
  return (
    <div className="min-h-screen w-full">
      <AppRouter />
    </div>
  );
}

export default App;
