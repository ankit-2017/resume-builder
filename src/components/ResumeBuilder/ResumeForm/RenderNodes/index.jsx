/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// eslint-disable-next-line react/forbid-prop-types
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import Styles from './RenderNodes.module.scss';

const RenderNodes = ({
  nodeStack, addNodeHandler, removeNodeHandler, baseNode, parentId, nestedNode, companyId,
}) => {
  const dispatch = useDispatch();
  return (
    <>
      {
        nodeStack.map((node) => {
          const { removable, id } = node.props;
          return (
            <div className={Styles.container} key={id}>
              <div>
                {node}
              </div>
              <div className={Styles.sectionWrapper}>
                {
                  removable ? (
                    <div
                      className={Styles.deleteSection}
                      onClick={() => dispatch(removeNodeHandler({ id, parentId, companyId }))}
                    >
                      <div className={Styles.iconContainer}>
                        <RemoveCircleOutlineIcon color="white" />
                      </div>
                    </div>
                  ) : (
                    <div
                      className={Styles.addSection}
                      onClick={() => dispatch(addNodeHandler({
                        parentId, baseNode, nestedNode, companyId,
                      }))}
                    >
                      <div className={Styles.iconContainer}>
                        <AddCircleOutlineIcon color="white" />
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          );
        })
      }
    </>
  );
};
RenderNodes.defaultProps = {
  nodeStack: [],
  addNodeHandler: () => {},
  removeNodeHandler: () => {},
  parentId: '',
  baseNode: () => {},
  nestedNode: {},
  companyId: '',
};

RenderNodes.propTypes = {
  nodeStack: PropTypes.array,
  addNodeHandler: PropTypes.func,
  removeNodeHandler: PropTypes.func,
  parentId: PropTypes.string,
  baseNode: PropTypes.func,
  nestedNode: PropTypes.object,
  companyId: PropTypes.string,
};

export default RenderNodes;
