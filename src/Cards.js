import React, { Component } from 'react';

//ui elements
import { Card, Row, Col } from 'react-bootstrap';

import { CompactPicker } from 'react-color';

import './PageComp.css';

import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler,
MDBCollapse, MDBFormInline, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu,
MDBDropdownItem, MDBBtn, MDBIcon, MDBCol, p, MDBCardText, MDBCardTitle, MDBCardImage,
MDBCardBody, MDBCard, MDBPagination, MDBPageItem, MDBPageNav, MDBRow, MDBInput, small
} from 'mdbreact';

//mobx
import { observer } from 'mobx-react';

import { action } from 'mobx';

import { ObservablePageStore } from './AppStore';

//Left Card
@observer
class LeftCard extends Component {

    render () {

        const store = this.props.store;

        return (

            <div>
                <div className='card' style={{height: "50rem", width: "30rem", backgroundColor:store.localBackColour}}>

                    <p className='title1' style={{color:store.localTextColour}}>{store.localTitle}</p>

                    <p className='title1' style={{color:store.localTextColour}}>{store.localSubTitle}</p>

                </div>
            </div>

        );
    }

}


//Right Card
@observer
class RightCard extends Component {

    handleChangeTitle = (e) => {
        this.props.store.localTitle = e.target.value;
    };

    handleChangeSubTitle = (e) => {
        this.props.store.localSubTitle = e.target.value;
    };

    handleChangeTextColour = (e) => {
        this.props.store.localTextColour = e.hex;
    };

    handleChangeBackColour = (e) => {
        this.props.store.localBackColour = e.hex;
    };

    handleChangeKey = (e) => {
        this.props.store.localKey = e.target.value;
    };

    render () {
        const store = this.props.store;
        return (
            <div>
                <div className='card' style={{height: "50rem", width: "30rem"}}>
                    <form  style={{marginLeft: "7rem", marginTop: "2rem"}}>
                        <MDBInput
                            label="Title"
                            name="title"
                            id="title"
                            size="lg"
                            required
                            value={store.localTitle}
                            onChange={this.handleChangeTitle}

                        />

                        <p className='inputLabel3'>Less than 100 characters</p>

                        <p className='inputLabel1'>Background Colour</p>

                        <CompactPicker
                            onChange={this.handleChangeBackColour}
                        />

                        <MDBInput
                            label="Subtitle"
                            name="subTitle"
                            id="subTitle"
                            size="lg"
                            required
                            value={store.localSubTitle}
                            onChange={this.handleChangeSubTitle}

                        />


                        <p className='inputLabel1'>Text Colour</p>

                        <CompactPicker
                            onChange={this.handleChangeTextColour}
                        />

                        <MDBInput
                            label="Select Page"
                            name="keyLoader"
                            id="keyLoader"
                            size="lg"
                            required
                            value={store.localKey}
                            onChange={this.handleChangeKey}

                        />


                        <div style={{marginTop: "3rem"}}>
                            <MDBBtn onClick={ this.onChangePage }> Change Page </MDBBtn>

                            <MDBBtn onClick={ this.onNewPage }> Submit </MDBBtn>
                        </div>

                    </form>

                </div>
            </div>
        );
    }

    onChangePage = (e) => {
    }

    onNewPage = (e) => {
        e.preventDefault();

        this.props.store.addPage(this.props.store.localTitle, this.props.store.localSubTitle,
                                 this.props.store.localTextColour, this.props.store.localBackColour);

    }

}

export {
    LeftCard,
    RightCard
}