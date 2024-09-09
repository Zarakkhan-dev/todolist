import "@/styles/globals.css";
import  "@/Component/ActiveTask/activetask.css";
import "@/Component/CompletedTask/complete_task.css";
import "@/Component/HomePage/homepage.css";
import "@/Component/AllTask/allTask.css"
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
