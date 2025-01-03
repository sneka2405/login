
// import React from 'react';
// import { AppProvider } from './appcontext.jsx';
// import ButtonComponent from './buttoncomponent.jsx';
// import DisplayComponent from './displaycomponent.jsx';

// const App = () => {
//     return (
//         <AppProvider>
//             <ButtonComponent />
//             <DisplayComponent />
//         </AppProvider>
//     );
// };
// // ./appContext
// export default App;
import React from 'react';
import {  Router, Route, Routes } from 'react-router-dom';
// import HomePage from './homepage';
// import AboutPage from './aboutpage';
import Browse from './browserrouter';

const App = () => {
    return (
        // <Router>
        //     <Routes>
        //         <Route path="/" element={<HomePage />} />
        //         <Route path="/about" element={<AboutPage />} />
        //     </Routes>
        // </Router>
        <Browse/>
    );
};

export default App;