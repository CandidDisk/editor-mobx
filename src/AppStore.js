import React, { Component } from 'react';

//mobx
import { observable, autorun, action, computed } from 'mobx';

var shortid = require('shortid');

class Store {



    //Test List
    @observable pageListTest = [
        {key: 0, title: "Title", subTitle: "subTitle"},
        {key: 1, title: "Title2", subTitle: "subTitle2"},
        {key: 2, title: "Title3", subTitle: "subTitle3", backColour:"#cccccc", textColour:"#ffffff"}
    ];

    @observable testKeyArr = this.pageListTest.find(pageListTest => pageListTest.key === 0)

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

    @observable localKeyArr = '';

    @action changePage(keyIn) {

        this.localKeyArr = this.pageList.find(pageList => pageList.key === keyIn)

        this.localTitle = this.localKeyArr.title;

        this.localSubTitle = this.localKeyArr.subTitle;

        this.localTextColour = this.localKeyArr.textColour;

        this.localBackColour = this.localKeyArr.backColour
    }
}

const ObservablePageStore = new Store()

export {
    ObservablePageStore
}