import React from 'react';
import Form from '../../../Components/Form/Form';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header';
import Description from '../Description/Description';
import UnitSelector from '../UnitSelector/UnitSelector';

const FrontPage = () => {
    return (
        <div className='container'>
            <div class="row">
                <div class="col-9">
                    <Description></Description>
                </div>
                <div class="col-3">
                    <UnitSelector></UnitSelector>
                </div>
                <Form></Form>

            </div>
            


        </div>
    );
};

export default FrontPage;