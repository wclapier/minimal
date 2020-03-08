import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

const TextTransition = ({items, removeItemHandler}) => {
  return (
    <div>
      <CSSTransitionGroup transitionName="example" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
        {items.map(function(item) {
          return (
            <div key={item.id} className="todo-item" onClick={removeItemHandler.bind(null, item)}>
              {item.name}
            </div>
          );
        })}
      </CSSTransitionGroup>
    </div>
  );
};

TextTransition.propTypes = {
  items: React.PropTypes.array.isRequired,
  removeItemHandler: React.PropTypes.func.isRequired
};

export default TextTransition;