import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="col-lg-5 m-auto py-5"> 
               <h1>Contact</h1>
               <form>
                    <input className="form-control col-form-label m-3" type="text" placeholder="Name">
                    </input>
                    <span class="help-block m-3">Please enter your name</span>
                    <input className="form-control col-form-label m-3 col-lg" type="email" placeholder="Email">
                    </input>
                    <span class="help-block m-3">Please enter your email. We will use it only for your question.</span>
                    <input className="form-control col-form-label m-3 col-lg" type="text" placeholder="Phone">
                    </input>
                    <span class="help-block m-3">Enter your phone number</span>
                    <br /><label class="m-3" for="comment">Comment:</label>
  <textarea class="form-control m-3" rows="5" id="comment"></textarea>
                    <button className="btn btn-primary btn-lg btn-block m-3">Send</button>
                </form> 
            </div>
            
        );
    }
}

export default Contact;