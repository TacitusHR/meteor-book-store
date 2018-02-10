import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai from 'chai';
import sinonChai from 'sinon-chai';

// enzyme 3 needs an adapter
Enzyme.configure({adapter: new Adapter()});

chai.use(sinonChai);
