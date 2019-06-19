import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Card from './Components/Card'

describe('Card Component Rendering Tests', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Card />, div)
        ReactDOM.unmountComponentAtNode(div)
    })

    it('renders to UI as expected', () => {
        const tree = renderer.create(<Card />).toJSON();
        expect(tree).toMatchSnapshot()
    })

    it('renders to UI as expected with PROPS', () => {
        const tree = renderer.create(<Card title="Dinosaurs" content="Died out" />).toJSON();
        expect(tree).toMatchSnapshot()
    })

})