import { AuthProvider } from "./contexts/AuthContext";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import NewsCards from "./components/NewsCards/NewsCards";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect } from "react";
import { useState } from "react";
import wordsToNumbers from "words-to-numbers";

const alanKey =
  "b396cf5407e5567665fc1679669eab0e2e956eca572e1d8b807a3e2338fdd0dc/stage";

function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles , number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          console.log(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }else if(command === 'open'){
          const parsedNumber = number.lenght > 2 ? wordsToNumbers(number,{fuzzy:true}) : number;
          const article = articles[parsedNumber - 1]
          if(parsedNumber>20){
            alanBtn().playText('Please try that again.')
          }else if(article)
          window.open(article.url,'_blank');
          alanBtn().playText('Opening...')
        }
      },
    });
  }, []);
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/news-cards">
            <NewsCards articles={newsArticles} activeArticle={activeArticle} />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
