import React from 'react';
import {shallow} from 'enzyme';
import AddBook from "../AddBook";
import {expect} from 'chai';
import sinon from 'sinon';

describe('AddBook', () => {
    it('renders', () => {
        const form = shallow(<AddBook />);

        expect(form.find('[name="title"]').length).to.be.equal(1);
        expect(form.find('[name="author"]').length).to.be.equal(1);
        expect(form.find('button[type="submit"]').length).to.be.equal(1);
    });

    it('calls Books.insert on submit', () => {
        const call = sinon.stub(Meteor, 'call');
        try {
            const form = shallow(<AddBook />);

            form.setState({
                title: 'Catcher in the Rye',
                author: 'J.D. Salinger',
            });

            form.simulate('submit', {
                preventDefault: () => {}
            });

            expect(call).to.have.been.calledOnce;
            expect(call).to.have.been.calledWith('Books.insert', {
                title: 'Catcher in the Rye',
                author: 'J.D. Salinger',
            });
        } finally {
            call.restore();
        }
    });
});
