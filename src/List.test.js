import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import List from './Components/List'

describe('List component rendering test', () => {
    it('Render component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('Renders to UI as expected', () => {
        const tree = renderer.create(<List />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})