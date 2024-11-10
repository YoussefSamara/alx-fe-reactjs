import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';


function App() {
    return (
        <div>
            <WelcomeMessage />
            {/* Other components or content can go here */}
            <Header />
            <MainContent />
            <UserProfile 
                name="Alice" 
                age="25" 
                bio="Loves hiking and photography" 
            />
            <Footer />
        </div>
    );
}
