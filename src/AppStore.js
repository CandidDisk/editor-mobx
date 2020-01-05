import React, { Component } from 'react';

//mobx
import { observable, autorun, action, computed } from 'mobx';

var shortid = require('shortid');

class Store {



    //Test List
    @observable pageListTest = [
        {id: 0, title: "Title", subTitle: "subTitle"},
        {id: 1, title: "Title2", subTitle: "subTitle2"}
    ];

    //Initialization of page list
    @observable pageList = [];

    @action addPage(title, subTitle, textColour, backColour) {
        this.pageList.push({
            key: shortid.generate(),
            title: title,
            subTitle: subTitle,
            textColour: textColour,
            backColour: backColour
        });
    }

    //Local render data
    @observable localTitle = '';

    @observable localSubTitle = '';

    @observable localTextColour = '';

    @observable localBackColour = '';


    //Page change
    @observable localKey = '';

    @action changePage(key) {

    }
}

const ObservablePageStore = new Store()

export {
    ObservablePageStore
}