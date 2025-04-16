import React, { lazy, Suspense, useState, useEffect }  from "react";
import ReactDOM from "react-dom";

import "./index.css";

const Welcome = lazy(() => import('users/Welcome').catch(() => {
  return { default: () => <div className='error'>Component Welcome is not available!</div> };
})
);
 
const UserLogin = lazy(() => import('users/UserLogin').catch(() => {
  return { default: () => <div className='error'>Component UserLogin is not available!</div> };
})
);
const TaskList = lazy(() => import('tasks/TaskList').catch(() => {
  return { default: () => <div className='error'>Component TaskList is not available!</div> };
})
);
/* const UsersTestControl = lazy(() => import('users/UsersTestControl').catch(() => {
  return { default: () => <div className='error'>Component TaskList is not available!</div> };
})
);
const TasksTestControl = lazy(() => import('tasks/TasksTestControl').catch(() => {
  return { default: () => <div className='error'>Component TaskList is not available!</div> };
})
); */

const App = () => {
  const [jwt, setJwt] = useState('');

  const handleJwtChange = event => { // Эта функция получает нотификации о событиях изменения jwt
    setJwt(event.detail)
  }

  useEffect(() => {
    addEventListener("jwt-change", handleJwtChange); // Этот код добавляет подписку на нотификации о событиях изменения localStorage
    return () => removeEventListener("jwt-change", handleJwtChange) // Этот код удаляет подписку на нотификации о событиях изменения localStorage, когда в ней пропадает необходимость
  }, []);

  return <div className="container">
    <header className='App-header'>
        Лабораторная работа по микрофронтендам
    </header>
    <section className='App-content'>
        {jwt ? ( <><div>11</div></>
            // <>
            //     <Suspense fallback="loading…">
            //       <Welcome jwt={jwt} />
            //     </Suspense>
            //     <Suspense fallback="loading…">
            //       <TaskList jwt={jwt} />
            //     </Suspense>
            // </>
        ) : ( 
            <Suspense fallback="loading…">
              <UserLogin/>
            </Suspense>
        )}
    </section>
  </div>
};

ReactDOM.render(<App />, document.getElementById("app"));
