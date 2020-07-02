import React from 'react';
import './test.css';

/**
 * 面向对象方式书写组件
 */
export default class Test extends React.Component {
  constructor(props) {
    super(props);
    console.log('[TestComponent]', props);
  }

  render() {
    return (
        <div className="Test">
            this is a TestComponent
            <p className="text">{this.props.name}</p>
        </div>
    )
  }
}
