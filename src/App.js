import React,{Component} from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import {connect} from "react-redux";
import './App.css';
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {setCurrentUser} from "./redux/user/user-actions";
import ImageSlider from "./components/image-slider/image-slider.component";
import isPlainObject from "react-redux/es/utils/isPlainObject";

const App = class App extends Component{

    unsubscribe = null;

    componentDidMount() {

        const {setCurrentUser} = this.props;

        this.unsubscribe = auth.onAuthStateChanged(async userAuth => {
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }});
                });
            }else {
                setCurrentUser(userAuth);
            }

        });
    }

    componentWillUnmount() {
        if(this.unsubscribe) {
            this.unsubscribe();
        }
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/shop" component={ShopPage}/>
                    <Route path="/signin" render={
                        () => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInSignUpPage/>)
                    }/>
                </Switch>
            </div>
        );
    }
};

const mapStateToProps = store => ({
   currentUser: store.user.currentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);


