
var {Component} = React;
var {Router, Route, IndexRoute, Link} = ReactRouter;

class Main extends Component{
    render(){
        return(
            <div>
                <h1>자동차 정보 관리 시스템</h1>
                <ul className="header" >
                    <li><Link exact to="/">Home</Link></li>
                    <li><Link to="/fabcar">Management</Link></li>
                </ul>
                <div className="content">
                {this.props.children}
                </div>
            </div>
        );
    }
}

class Home extends Component{
    render(){
        return(
            <div>
                <h2>자동차 정보 관리 시스템 입니다.</h2>
                <p>호서대학교 컴퓨터공학부</p>
            </div>
        );
    }
}

class Fabcar extends Component{


    render(){
        return(
            <div>
                <ul>
                    <li><a href='car2.html'> 자동차 생성</a></li>
                    <li><a href='car1.html'> 자동차 검색</a></li>
                    <li><a href='ChangeOwner.html'> 차량소유자 변경</a></li>                      
                    <li><a href='Update.html'> 정비이력 등록</a></li>                                
                </ul>
            </div>
        );
    }
}



ReactDOM.render(
    (<Router>
        <Route path="/" component={Main} >
            <IndexRoute component={Home} />
            <Route path="fabcar" component={Fabcar} />
        </Route>
    </Router>)
    ,document.getElementById("root")
);

