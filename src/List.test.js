import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import List from './Components/List'

describe('List component rendering test', () => {
    it('Render component without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List cards={[]} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('Renders to UI as expected', () => {
        const tree = renderer.create(<List cards={[]} />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('Renders to UI as expected', () => {
        const tree = renderer.create(<List cards={[{ id: 'a', title: 'First card', content: 'lorem ipsum' }]} />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})