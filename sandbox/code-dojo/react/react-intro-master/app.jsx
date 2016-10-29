// function Hero(props) {
//     return (
//         <div className="container">
//             <img src={props.imageUrl} />
//             <h1>{props.title}</h1>
//             <p>{props.subtitle}</p>
//         </div>
//     );
// }

function Hero() {
    return (
        <div className="container">
            <img src="https://facebook.github.io/react/img/logo.svg" />
            <h1>React!!!</h1>
            <p>Библиотека для создания пользовательских интерфейсов</p>
        </div>
      );
}

ReactDOM.render(<Hero />, document.getElementById('root'));

// ReactDOM.render(
//     <div>
//         <Hero title="React"
//             subtitle="Библиотека для создания пользовательских интерфейсов"
//             imageUrl="https://facebook.github.io/react/img/logo.svg"/>
//         <Hero title="Angular 2"
//             subtitle="Один фреймворк"
//             imageUrl="https://angular.io/resources/images/logos/angular2/angular.svg"/>
//     </div>,
// document.getElementById('root'));
