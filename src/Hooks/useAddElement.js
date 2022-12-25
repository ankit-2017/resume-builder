import { useState } from 'react';
import { cloneElement, uniqueId } from 'utils';

const useAddElement = (Node) => {
  // const defaultId = uniqueId();
  const [nodes, setNodes] = useState([
    <Node
      key={Math.random()}
      removable={false}
      id={uniqueId()}
    />,
  ]);
  const addNodeHandler = () => {
    const newElement = cloneElement(
      <Node
        key={Math.random()}
        removable
        id={uniqueId()}
      />,
    );
    setNodes((prevStack) => [...prevStack, newElement]);
  };

  const removeNodeHandler = (id) => {
    console.log('remove handler called', id, nodes);
    nodes?.forEach((item, index) => {
      if (item.props.id === id) {
        console.log('delete', item);
        nodes.splice(index, 1);
      }
    });
    setNodes(() => [...nodes]);
  };

  return [nodes, addNodeHandler, removeNodeHandler];
};

export default useAddElement;
