import React,{Component} from 'react';
import './styles.css';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props){
		super(props);
		this.state = {
			type:''
		}
	}
    onLogin = (e)=>{
        e.preventDefault();
        this.setState({
            type : 'student'
        })
	}
    render() {
        if(this.state.type === 'student'){
			var {location} = this.props;
			return <Redirect to={{
				pathname : '/student/home',
				state : {
					from : location
				}
            }}/>
		}
        return (
            <div className='container'>
                {/* margin left */}
                <div className="col-xs-0 col-sm-1 col-md-2 col-lg-3"></div>
                { /* center body */}
                <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
                    <div className="panel panel-primary panel-login">
                        <div className="panel-heading">
                            <h3 className="panel-title">B-Grade</h3>
                        </div>
                        <div className="panel-body">
                            <form onSubmit={this.onLogin} className="form-horizontal" >
                                <div className="col-xs-0 col-sm-1 col-md-1 col-lg-1"></div>
                                <div className="col-xs-12 col-sm-10 col-md-10 col-lg-10">
                                    <div className="form-group"> 
                                        <input type="text" name="student-id" className="form-control" required="required" placeholder='Student ID' /> 
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="student-password" className="form-control" placeholder='Password' />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-danger btn-login">Login</button>
                                    </div>
                                </div>
                                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                            </form>
                        </div>
                    </div>
                </div>
                { /* margin right */}
                <div className="col-xs-0 col-sm-1 col-md-2 col-lg-3 btn-login"></div>
            </div>
        );
    }
}

export default Login;
