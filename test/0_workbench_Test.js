//SET TEST MODULE HERE
import chai from 'chai';
import enzyme from 'enzyme';
import { shallow, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';

enzyme.configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

import {TopMenu, BodyContent} from '../workbench/components/functionalComponents';
import {getScrollPos, isBrowserIE, scrollPosReducer} from '../workbench/components/actionsReducers';

let testSubject = shallow(<TopMenu position = {200}/>);
describe('The <TopMenu /> Component',()=>{
    it('should return a class \'titleContainer\'',()=>{        
        chai.expect(testSubject).to.have.className('titleContainer');
    });
    it('should return a class \'titleContainer titleContainerSolid\' if \'position\' < 140 ',()=>{
        let testSubject = shallow(<TopMenu position = {100} />);
        chai.expect(testSubject).to.have.className('titleContainer titleContainerSolid');
    });
    it('should return a class \'menu\'',()=>{        
        chai.expect(testSubject.find('.titleContainer')).to.have.descendants('.menu');
    });
    it('should return a class \'menuContent leftTitle\' ', ()=>{        
        chai.expect(testSubject.find('.menu')).to.have.descendants('.menuContent .leftTitle');
    });
});

describe('The <BodyContent /> Component', ()=>{
    it('should return a class \'parallaxClass\'',()=>{
        let testSubject = shallow(<BodyContent />);
        chai.expect(testSubject).to.have.className('parallaxClass');        
    });
    it('should return a class \'parallax background\'',()=>{
        let testSubject = shallow(<BodyContent />);
        chai.expect(testSubject.find('.parallaxClass')).to.have.descendants('.parallax .background');
    });
    it('should return an id  \'backgroundImg\'',()=>{
        let testSubject = shallow(<BodyContent />);
        chai.expect(testSubject.find('.parallax .background')).to.have.descendants('#backgroundImg');
    });
    it('should return a class \'parallax foreground\'',()=>{
        let testSubject = shallow(<BodyContent />);
        chai.expect(testSubject.find('.parallaxClass')).to.have.descendants('.parallax .foreground');
    });
    it('should return an id \'contentContainer\'',()=>{
        let testSubject = shallow(<BodyContent />);
        chai.expect(testSubject.find('.parallax .foreground')).to.have.descendants('#contentContainer');
    });
});

describe('The \'getScrollPos\' action',()=>{
    it('should return an object',()=>{
        chai.expect(getScrollPos(140)).to.be.a('object');
    });
    it('should return the action type',()=>{
        chai.expect(getScrollPos(140)).to.have.property('type','GET_POSITION');        
    });
    it('should return the position',()=>{
        chai.expect(getScrollPos(140)).to.have.property('position',140);        
    });
});

describe ('The \'scrollPosReducer\' reducer',()=>{
    it('should do a thing',()=>{
        
    });
});