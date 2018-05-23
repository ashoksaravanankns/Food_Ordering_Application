import React from 'react';
import Button from '../../../components/UI/Button/Button';

class ContactData extends React.Component{
    render(){
        return(
            <div>

                <h4>Enter ContactForm</h4>
                <form>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <Button clicked>Submit</Button>
                    </form>

            </div>
        )
    }
}

export default ContactData;